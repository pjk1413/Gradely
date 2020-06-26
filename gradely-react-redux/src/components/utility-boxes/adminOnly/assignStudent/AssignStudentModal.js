import React, { Component } from 'react';
import axios from 'axios'
import CourseItem from './CourseItemAssignment';
import Bounce from 'react-reveal/Bounce'
import AssignStudentForm from './AssignStudentForm';
import StudentItem from './StudentItem';
import { connect } from 'react-redux'
import { editCourseDetails, addStudentToCourse } from './../../../../action/courseActions';

class AssignStudentModal extends Component {
    constructor() {
        super()
        this.handleSubmit = this.handleSubmit.bind(this)
        this.onChange = this.onChange.bind(this)
        this.state = {
            show: false,
            search: "",
            selectedCourse: {},
            studentList: []
        }
    }


    componentWillUpdate() {
        if (this.props.editUser) {
            this.setState({
                show: true
            })
        }   
    }

    handleSubmit() {
        let course = this.props.editCourse
        console.log(course)
        this.props.addStudentToCourse(course)
    }

    showStudents() {
        document.getElementById("show-students").style.display = 'block';
    }

    onChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    filterList(list) {
        const length = this.state.search.length
        if (Array.isArray(list)) {
          return list.filter(student => {
            if ((this.state.search.toLowerCase() == student.user.firstName.toLowerCase().substr(0, length))) {
              return student
            }
          })
        }
      }

      

    render() {
        let counter = 1
        //let tempCourses = this.props && this.props.courses && this.props.courses.courses
        const tempStudents = this.props.students && this.props.students.students
        //const courseItems = []
        const courseItems = this.props && this.props.courses && this.props.courses.courses && this.props.courses.courses.map(course => {
            return <CourseItem key={course.id} currentCourse={course} name={course.name} />
        })

        const studentItems = this.filterList(tempStudents) && this.filterList(tempStudents).map(student => {
            return <StudentItem key={student.id} currentStudent={student} name={student.user.firstName + " " + student.user.lastName} />
        })

        return (
            <div>
                <div className="modal fade" id="assignStudentModal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog mw-100 w-75" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Assign Students</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">×</span>
                                </button>
                            </div>
                            <div className="modal-body">

                                <div>
                                    <div className="row pl-2 border-bottom">

                                        {/* Top Search Bar */}

                                        <form className="form-inline ml-auto mr-2" >
                                            <div className="input-group mb-2 mr-sm-2">
                                                <div className="input-group-prepend">

                                                    <div className="input-group-text">Search</div>
                                                </div>
                                                <input onChange={this.onChange} 
                                                type="text" className="form-control" 
                                                id="inlineFormInputGroupUsername2" name="search"
                                                placeholder="Student First or Last Name" />
                                            </div>
                                        </form>



                                    </div>
                                    <div className="row">
                                        <div className="col-md-3 border-right overflow-auto mt-4">
                                            <h5>Courses</h5>
                                            <div className="btn-group-vertical">

                                                {/* List of all courses that have been searched for */}

                                                {courseItems}


                                            </div>
                                        </div>

                                        <div className="col mt-4">

                                            <div className="col-md-12 pl-3">


                                                <Bounce top>
                                                    {/* Form to create a new course */}

                                                    <div id="assignStudents">
                                                        <AssignStudentForm />
                                                    </div>



                                                </Bounce>
                                            </div>
                                        </div>                                   
                                        <Bounce>
                                        
                                        <div id="show-students" className="col-md-3 border-left overflow-auto mt-4" 
                                        style={this.props.editCourse ? {display: 'block'} : {display: 'none'}}>
                                            <h5>Students</h5>
                                            <div className="btn-group-vertical">

                                                {studentItems}

                                            </div>
                                        </div>
                                        </Bounce>
                                    </div>
                                </div>

                            </div>
                            
                            <div className="modal-footer">
                                <button onClick={this.handleSubmit} className="btn btn-primary mr-auto">Save Student Assignments</button>
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
     
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
    students: state.students,
    editCourse: state.temp.editCourse
})

export default connect(mapStateToProps, { editCourseDetails, addStudentToCourse })(AssignStudentModal);