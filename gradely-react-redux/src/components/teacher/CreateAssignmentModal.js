import React, { Component } from 'react';
import CreateAssignmentTable from './CreateAssignmentTable';
import CreateAssignmentForm from './CreateAssignmentForm';
import Fade from 'react-reveal/Fade';
import { connect } from 'react-redux';
import CourseItem from './CourseItem';
import { getAllTeacherCourses } from './../../action/courseActions'

class CreateAssignmentModal extends Component {
    constructor() {
        super()
        this.state = {
            selectedCourse: {}
        }
    }

    render() {
        //this.props.getAllTeacherCourses(sessionStorage.getItem("user"))
        const courseList = this.props.courses && this.props.courses.map(course => {

            return <CourseItem key={course.id} name={course.name} currentCourse={course} />
        })


        return (
            <div>
                <div className="modal fade" id="createAssignmentModal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog mw-100 w-75" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Add/Edit Assignments</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">×</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                {/* Class List, either pagination style or something */}
                                <div className="row">

                                </div>
                                <div className="row">
                                    <div className="col-md-3 border-right">
                                        <div class="btn-group-vertical" role="group" aria-label="First group">
                                           
                                            {courseList}

                                        </div>
                                    </div>
                                    <div className="col">
                                        <Fade><h6 className="mx-auto">{this.props.editCourse && this.props.editCourse.name}</h6></Fade>
                                        <div className="row">
                                            
                                            <CreateAssignmentForm />
                                            {/* name, assignment type, points, due date, description, course */}

                                        </div>
                                        <CreateAssignmentTable selectedCourse={this.state.selectedCourse} />

                                    </div>
                                </div>

                            </div>
                            <div className="modal-footer">
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
    courses: state.courses.courses,
    editCourse: state.temp.editCourse
})

export default connect(mapStateToProps, { getAllTeacherCourses })(CreateAssignmentModal);