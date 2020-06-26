import React, { Component } from 'react';
import axios from 'axios';
import { editCourseDetails, addAssignment, getAllTeacherCourses } from './../../action/courseActions'
import { connect } from 'react-redux';
import { holdTempCourse } from './../../action/tempActions';

class CreateAssignmentForm extends Component {
    constructor() {
        super()
        this.onChange = this.onChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.state = {
            assignmentTypes: []
        }
    }

    onChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit(event) {
        event.preventDefault()
        if ( !(this.props.editCourse && this.props.editCourse.id) ) {
            alert("Please select a course")
        } else {
            let assignment = {
                name: this.state.name,
                description: this.state.description,
                dueDate: this.state.dueDate,
                totalPoints: this.state.totalPoints,
                assignmentType: this.state.assignmentType ? this.state.assignmentType : document.getElementById("assignmentType").value,
                courseId: this.props.editCourse.id
            }
            this.props.addAssignment(assignment) //needs to update the everything

            const updatedCourse = this.props.courses.find(course => {
                return course.id === this.props.editCourse.id
            }
            )

            this.props.getAllTeacherCourses(sessionStorage.getItem("user"))
            //this.props.holdTempCourse(updatedCourse)     
        }
    }

    componentDidMount() {
        axios.get("http://localhost:8080/assignment/getTypes").then(response => {
            this.setState({
                assignmentTypes: response.data
            })
        })
    }

    render() {
        let date = "";

        const assignmentTypes = this.state.assignmentTypes.map(type => {
            return <option key={type} value={type}>{type}</option>
        })

        return (

            <form className="w-100 p-3" onSubmit={this.handleSubmit}>
                {/* due date, description, course */}
                <div className="row py-1">
                    <div className="col">
                        <label htmlFor="name">Name</label>
                        <input
                            onChange={this.onChange}
                            type="text"
                            name="name"
                            className="form-control"
                            placeholder="Assignment Name" />
                    </div>
                    <div className="col">
                        <label htmlFor="assignmentType">Assignment Type</label>
                        <select onChange={this.onChange} className="custom-select" name="assignmentType" id="assignmentType">
                            {assignmentTypes}
                        </select>
                    </div>
                </div>

                <div className="row py-1">
                    <div className="col">
                        <label htmlFor="points">Points</label>
                        <input
                            onChange={this.onChange}
                            type="text"
                            name="totalPoints"
                            className="form-control"
                            placeholder="Total Points" />
                    </div>
                    <div className="col">
                        <label htmlFor="dueDate">Due Date</label>
                        <input
                            onChange={this.onChange}
                            type="date" className="form-control"
                            id="inputAddress2"
                            name="dueDate"/>
                    </div>
                </div>
                <div className="row py-1">
                    <div className="col">
                        <label htmlFor="description">Description</label>
                        <input
                            onChange={this.onChange}
                            type="text"
                            className="form-control"
                            id="description"
                            name="description"
                            placeholder="Assignment Description"
                        />
                    </div>
                    <div className="col-md-2 h-100"> 
                    <label htmlFor="description"></label>      
                        <input className="btn btn-primary mt-2 mr-2" type="submit" />
                    </div>
                </div>
            </form>
        );
    }
}

const mapStateToProps = state => ({
    editCourse: state.temp.editCourse,
    courses: state.courses.courses
})

export default connect(mapStateToProps, { editCourseDetails, addAssignment, holdTempCourse, getAllTeacherCourses })(CreateAssignmentForm);