import React, { Component } from 'react';
import axios from 'axios'
import CourseItem from './CourseItem';
import { connect } from 'react-redux'
import { addCourse } from './../../../../action/courseActions'

class AddCourseForm extends Component {
    constructor() {
        super()
        this.onChange = this.onChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            teacher: "",
            title: ""
        }
    }

    onChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit (event) {
        event.preventDefault();

        const teacher = this.props.teachers.teachers.find(teacher=> {
            return teacher.id == this.state.teacher ? teacher : document.getElementById("teacher-id").value
        })

        const course = {
            name: this.state.title,
            teacher: {
                id: teacher ? teacher.id : document.getElementById("teacher-id").value,
                firstName: teacher.firstName,
                lastName: teacher.lastName
            }
        }
        this.props.addCourse(course)
        document.getElementById("form-to-clear").reset();
    }

    render() {
        console.log(this.state.teacher)
        const teacherList = this.props.teachers && this.props.teachers.teachers

        const teacherComponentList = teacherList && teacherList.map(teacher => {
            return <option key={teacher.id} value={teacher.id}>{teacher.user.firstName} {teacher.user.lastName}</option>
        })
 
        return (
            <div>
                <form id="form-to-clear" onSubmit={this.handleSubmit}>
                    <div className="form-row w-100">
                        <div className="form-group col-md-6 w-100">
                            <label htmlFor="title">Course Title</label>
                            <input onChange={this.onChange} type="text" name="title" className="form-control w-100" id="email" aria-describedby="emailHelp" placeholder="Course Title" required />
                 
                        </div>
                        <div className="form-group col-md-6 w-100">
                        <label htmlFor="teacher">Teacher</label>
                            <select className="custom-select mr-sm-2" id="teacher-id" onChange={this.onChange}name="teacher" required>
                              {teacherComponentList}
                            </select>
            
                        </div>
                    </div>
                    <div className="form-row w-100">
                        <button type="submit" className="btn btn-outline-primary mx-auto w-75">Create New Course</button>
                    </div>
                </form>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    teachers: state.teachers
})

export default connect(mapStateToProps,{ addCourse })(AddCourseForm);