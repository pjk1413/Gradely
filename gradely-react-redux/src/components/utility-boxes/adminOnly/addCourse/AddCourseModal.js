import React, { Component } from 'react';
import AddCourseForm from './AddCourseForm';
import EditCourseForm from './EditCourseForm';
import axios from 'axios'
import CourseItem from './CourseItem';
import Bounce from 'react-reveal/Bounce'
import ViewCourseDetails from './ViewCourseDetails';
import { connect } from 'react-redux'
import { addCourse, deleteCourse } from './../../../../action/courseActions'
import { TeacherBoxList } from './../../../../data/BoxList';
import { clearEditCourse } from './../../../../action/tempActions'

class AddCourseModal extends Component {
  constructor() {
    super()
    this.onChange = this.onChange.bind(this)
    this.state = {
      search: "",
      selectedCourse: {}
    }
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  editCourse() {
    document.getElementById("createCourseForm").style.display = "none";
    document.getElementById("editCourseForm").style.display = "block";

  }

  newCourse() {
    document.getElementById("createCourseForm").style.display = "block";
    document.getElementById("editCourseForm").style.display = "none";
    this.props.clearEditCourse()
  }

  deleteCourse() {
    if (window.confirm("Are you sure you want to delete " + this.props.editCourse.name)) {
      this.props.deleteCourse(this.props.editCourse.id)
      this.newCourse()
    }

  }

  updateCourse(course) {
    const courses = this.props.courses.map(c => {
      if (c.id == course.id) {
        return course
      } else {
        return c
      }
    })

    this.props.updateCourseList(courses)
  }

  checkUser(firstName, lastName) {

    //(this.checkUser(course.teacher && course.teacher.firstName, course.teacher && course.teacher.lastName)
    const length = this.state.search.length
    if (this.state.search && this.state.search.toLowerCase() == firstName && firstName.toLowerCase().substr(0, length) ||
      this.state.search.toLowerCase() == lastName.toLowerCase().substr(0, length)) {
      return true
    } else {
      return false
    }
  }

  filterList(list) {
    const length = this.state.search.length

    if (Array.isArray(list)) {
      
      return list.filter(course => {
        if (this.state.search.toLowerCase() === (course && course.name.toLowerCase().substr(0, length))) {
          return course
        }
      })
    }
  }

  render() {

    const tempCourses = this.props.courses && this.props.courses.courses

    const courseComponentList = this.filterList(tempCourses) && this.filterList(tempCourses).map(course => {

      return <CourseItem key={course.id} currentCourse={course} name={course.name} changeView={this.editCourse} />
    })

    return (
      <div>
        <div>
          <div data-backdrop="static" className="modal fade" id="addCourseModal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog mw-100 w-75" role="document">
              <div className="modal-content">
                <div className="modal-header" ref={this.focusRef}>
                  <h5 className="modal-title" id="exampleModalLabel">Add or Remove Courses</h5>
                  <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">×</span>
                  </button>
                </div>
                <div className="modal-body">
                  <div>
                    <div className="row pl-2 border-bottom">

                      {/* Top Search Bar */}

                      <form className="form-inline" >
                        <div className="input-group mb-2 mr-sm-2">
                          <div className="input-group-prepend">

                            <div className="input-group-text">Search</div>
                          </div>
                          <input onChange={this.onChange} type="text"
                            className="form-control" id="inlineFormInputGroupUsername2" name="search"
                            placeholder="Course Name or Teacher Name" />
                        </div>



                      </form>
                      <h5 className="ml-auto mr-3">{this.props.editCourse && this.props.editCourse.name}</h5>



                    </div>
                    <div className="row">
                      <div className="col-md-3 border-right overflow-auto mt-4">
                        <div className="btn-group-vertical">

                          {/* List of all courses that have been searched for */}

                          {courseComponentList}


                        </div>
                      </div>

                      <div className="col mt-4">

                        <div className="col-md-12 pl-3">


                          <Bounce top>
                            {/* Form to create a new course */}
                            <div id="createCourseForm">

                              <AddCourseForm />

                            </div>

                            <div id="editCourseForm" style={{ display: "none" }}>
                              <EditCourseForm changeCourse={(updatedCourse) => this.updateCourse(updatedCourse)} userList={this.props.userList} course={this.state.selectedCourse} />
                            </div>

                            <div id="viewCourse" style={{ display: "none" }}>
                              <ViewCourseDetails changeCourse={(updatedCourse) => this.updateCourse(updatedCourse)} userList={this.props.userList} course={this.state.selectedCourse} />
                            </div>

                          </Bounce>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="modal-footer">

                  <button type="button" className="btn btn-primary" onClick={() => this.newCourse()}>Add a New Course</button>
                  <button type="button" className="btn btn-info mr-auto" onClick={() => this.deleteCourse()}>Remove Selected Course</button>
                  <h4 className="text-success mr-5"></h4>
                  <button type="button" className="btn btn-secondary" data-dismiss="modal" >Close</button>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  courses: state.courses,
  editCourse: state.temp.editCourse
})

export default connect(mapStateToProps, { addCourse, deleteCourse, clearEditCourse })(AddCourseModal);