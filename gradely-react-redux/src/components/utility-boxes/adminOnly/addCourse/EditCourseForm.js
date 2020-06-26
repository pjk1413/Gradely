import React, { Component } from 'react';
import axios from 'axios'
import { connect } from 'react-redux'
import { editCourseDetails } from './../../../../action/courseActions'

class EditCourseForm extends Component {
    constructor() {
        super()
        this.handleSubmit = this.handleSubmit.bind(this)
        this.onChange = this.onChange.bind(this)
        this.state = {
            name: "",
            startDate: "",
            endDate: "",
            startTime: "",
            roomNumber: "",
            courseMeeting: "",
            teacher: ""
        }
    }

    onChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    setCourseMeeting(value) {
        let currentMeeting = this.state.courseMeeting
        currentMeeting = currentMeeting + "-" + value
        this.setState({
            courseMeeting: currentMeeting
        })
    }

    handleSubmit(event) {
        event.preventDefault();
        
        const course = {
            id: this.props.editCourse.id,
            name: this.state.name ? this.state.name : this.props.editCourse.name,
            teacher: this.state.teacher ? {id: this.state.teacher} : this.props.editCourse.teacher,
            startDate: this.state.startDate ? this.state.startDate : this.props.editCourse.startDate,
            endDate: this.state.endDate ? this.state.endDate : this.props.editCourse.endDate,
            time: this.state.startTime ? this.state.startTime : this.props.editCourse.time,
            room: this.state.room ? this.state.room : this.props.editCourse.room,
            meetsOn: this.state.courseMeeting
        }
        this.props.editCourseDetails(course)
    }

    render() {
        let startDate = "";
        let endDate = ""
        if (this.props.editCourse && this.props.editCourse.startDate) {
            let temp = new Date(Date.parse(this.props.editCourse.startDate))
            startDate = temp.toISOString()
        }

        if (this.props.editCourse && this.props.editCourse.endDate) {
            let temp = new Date(Date.parse(this.props.editCourse.endDate))
            endDate = temp.toISOString()
        }
        const tempTeachers = this.props.teachers && this.props.teachers.teachers
        const teacherList = tempTeachers && tempTeachers.map(teacher => {
            return <option key={teacher.id} id={teacher.id} value={teacher.id}>{teacher.user.firstName} {teacher.user.lastName}</option>
        })


        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div className="row">
                        <div className="col">
                            <div className="form-group col">
                                <label for="startDate">Course Start Date</label>
                                <input
                                    onChange={this.onChange}
                                    type="date" className="form-control"
                                    id="startDate"
                                    name="startDate"
                                    placeholder={startDate ? startDate.substr(0, 10) : ""} />

                            </div>
                        </div>
                        <div className="col">
                            <div className="form-group col">
                                <label for="inputAddress2">Course End Date</label>
                                <input
                                    onChange={this.onChange}
                                    type="date" className="form-control"
                                    id="inputAddress2"
                                    name="endDate"
                                    placeholder={endDate ? endDate.substr(0, 10) : ""} />

                            </div>
                        </div>

                    </div>
                    <div className="row">
                        <div className="col">
                            <div className="form-group col">
                                <label for="inputAddress2">Start Time</label>
                                <input
                                    onChange={this.onChange}
                                    type="time" className="form-control"
                                    id="inputAddress2"
                                    name="startTime"
                                    placeholder={this.props.editCourse && this.props.editCourse.time} />

                            </div>
                        </div>
                        <div className="col">
                            <div className="form-group col">
                                <label for="inputAddress2">Room Number</label>
                                {/* Turn this into a series of checkboxes */}
                                <input
                                    onChange={this.onChange}
                                    type="text" className="form-control"
                                    id="inputAddress2"
                                    name="room"
                                    placeholder={this.props.editCourse && this.props.editCourse.room} />

                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="form-group col w-100">
                            <label htmlFor="teacher">Teacher</label>
                            <select className="custom-select mr-sm-2" id="teacher-id"
                                onChange={this.onChange} name="teacher">
                                {teacherList}
                            </select>

                        </div>
                        <div className="form-group col">
                            <label for="inputAddress2">Class Name</label>
                            {/* Turn this into a series of checkboxes */}
                            <input
                                onChange={this.onChange}
                                type="text" className="form-control"
                                id="inputAddress2"
                                name="name"
                                placeholder={this.props.editCourse && this.props.editCourse.name}
                                 />

                        </div>

                    </div>


                    <div className="row">
                        <div className="col">
                            <h6 className="mb-3">Class Meet Days:</h6>
                            <div className="form-group row">

                                <div className="form-check form-check-inline">
                                    <input onClick={e => this.setCourseMeeting(e.target.value)}
                                        value={"M"} type="checkbox" className="form-check-input" id="M" name="courseMeeting" />
                                    <label className="form-check-label" for="M">M</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input onClick={e => this.setCourseMeeting(e.target.value)}
                                        value={"T"} type="checkbox" className="form-check-input" id="T" name="courseMeeting" />
                                    <label className="form-check-label" for="T">T</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input onClick={e => this.setCourseMeeting(e.target.value)}
                                        value={"W"} type="checkbox" className="form-check-input" id="W" name="courseMeeting" />
                                    <label className="form-check-label" for="W">W</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input onClick={e => this.setCourseMeeting(e.target.value)}
                                        value={"Th"} type="checkbox" className="form-check-input" id="Th" name="courseMeeting" />
                                    <label className="form-check-label" for="Th">Th</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input onClick={e => this.setCourseMeeting(e.target.value)}
                                        value={"F"} type="checkbox" className="form-check-input" id="F" name="courseMeeting" />
                                    <label className="form-check-label" for="F">F</label>
                                </div>

                            </div>
                        </div>


                    </div>
                    <button type="submit" className="btn btn-primary w-100">Add Class Details</button>



                </form>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    teachers: state.teachers,
    editCourse: state.temp.editCourse
})

export default connect(mapStateToProps, { editCourseDetails })(EditCourseForm);