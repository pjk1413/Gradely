import React, { Component } from 'react';
import axios from 'axios'
import UserListing from './UserListing';
import AddUserForm from './AddUserForm';
import teacherReducer from './../../../../reducer/teacherReducer';
import studentReducer from './../../../../reducer/studentReducer';
import { useSelector, connect } from 'react-redux';
import adminReducer from './../../../../reducer/adminReducer';
import store from './../../../../store';
import { PropTypes } from 'prop-types';
import Bounce from 'react-reveal/Fade'

class AddUserModal extends Component {
  constructor() {
    super()

    this.onChange = this.onChange.bind(this)
    this.state = {
      search: "",
      type: "all"
    }
  }
  
  onChange(e) {
    this.setState({[e.target.name]: e.target.value})
  }

  componentDidMount() {
    
  }

  filterList(list, type) {
      if (Array.isArray(list)) {
        return list.filter(user => {
          if (this.checkUser(user.user.firstName, user.user.lastName) && this.typeCheck(type)) {
            return user
          }
        })
      }  
  }


  typeCheck(type) {
    if(this.state.type == type || this.state.type == "all") {
      return true
    } else {
      return false
    }
  }

  checkUser(firstName, lastName) {
    const length = this.state.search.length
    if (this.state.search.toLowerCase() == firstName.toLowerCase().substr(0, length) || 
    this.state.search.toLowerCase() == lastName.toLowerCase().substr(0, length)) {
      return true
    } else {
      return false
    }
  }

  render() {
    const teacherList = this.props.teachers && this.props.teachers.teachers
    const parentList = this.props.parents && this.props.parents.parents
    const studentList = this.props.students && this.props.students.students
    const adminList = []; //Just needs to load the data in

    const adminComponentList = this.filterList(adminList, "admin") && this.filterList(adminList, "admin").map(admin => {
      const fullName = admin.user.firstName + " " + admin.user.lastName
      return <Bounce key={admin.id}><UserListing id={admin.id} currentUser={admin} type="admin" text={fullName}/></Bounce> 
    });

    const studentComponentList = this.filterList(studentList, "student") && this.filterList(studentList, "student").map(student => {
      const fullName = student.user.firstName + " " + student.user.lastName
      return <Bounce key={student.id}><UserListing id={student.id} currentUser={student} type="student" text={fullName}/></Bounce>
  
    })

    const teacherComponentList = this.filterList(teacherList, "teacher") && this.filterList(teacherList, "teacher").map(teacher => {
      const fullName = teacher.user.firstName + " " + teacher.user.lastName
      return <Bounce key={teacher.id}><UserListing id={teacher.id} currentUser={teacher} type="teacher" text={fullName} /></Bounce>
    })

    const parentComponentList = this.filterList(parentList, "parent") && this.filterList(parentList, "parent").map(parent => {
      const fullName = parent.user.firstName + " " + parent.user.lastName
      return <Bounce key={parent.id}><UserListing id={parent.id} currentUser={parent} type="parent" text={fullName} /></Bounce>
      
    })

    

    return (
      <div>
        <div data-backdrop="static" className="modal fade" id="addStudentModal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog modal-dialog-scrollable mw-100 w-75" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Add or Remove Users</h5>
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
                        <input onChange={this.onChange} 
                        value={this.state.search} type="text" name="search"
                        className="form-control" placeholder="Username" />
                      </div>

                      {/* Select user dropdown menu */}
                      <div className="input-group mb-2 mr-sm-2">
                        <select className="custom-select my-1 mr-sm-2" name="type" onChange={this.onChange} value={this.state.type}>
                          <option value="all" selected>Select All</option>
                          <option value={"student"}>Student</option>
                          <option value={"admin"}>Admin</option>
                          <option value={"parent"}>Parent</option>
                          <option value={"teacher"}>Teacher</option>
                        </select>
                      </div>         
                    </form>

                  </div>
                  <div className="row">
                    <div className="col-md-3 border-right overflow-auto mt-4">

                      {/* List of all users that have been searched for */}
                      <div className="border p-2 rounded my-2">
                      <h6>Students</h6>
                      
                      {studentComponentList && studentComponentList.length > 0 ? studentComponentList : <small>No Results</small>}
                      </div>
                      
                      <div className="border p-2 rounded my-2">
                      <h6 className="">Parents</h6>
                      {parentComponentList && parentComponentList.length ? parentComponentList : <small>NoResults</small>}
                      </div>
                      
                      <div className="border p-2 rounded my-2">
                      <h6>Teachers</h6>
                      {teacherComponentList && teacherComponentList.length ? teacherComponentList : <small>No Results</small>}
                      </div>

                      <div className="border p-2 rounded my-2">
                      <h6>Admin</h6>
                      {adminComponentList && adminComponentList.length ? adminComponentList : <small>No Results</small>}
                      </div>

                      </div>
                    <div className="col mt-4">
                      <div className="col-md-12">

                        {/* Form to create a new student */}
                        <AddUserForm />

                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                {/* <h4 className="text-success mr-5">{this.state.success}</h4> */}
                <button type="button" className="btn btn-secondary" data-dismiss="modal" >Close</button>
              </div>
            </div>
          </div>
        </div>

      </div>
    );
  }
}


const mapStateToProps = state => ({
  user: state.user,
  students: state.students,
  parents: state.parents,
  teachers: state.teachers
})

export default connect(mapStateToProps, {})(AddUserModal);
