import React, { Component } from 'react';
import { connect } from 'react-redux';

class ClassPageModal extends Component {



    render() {
        let teacher = ''
        if (this.props.course) {
            teacher = this.props.course.teacher.user.firstName + " " + this.props.course.teacher.user.lastName
        }

        const assignments = this.props.course && this.props.course.assignments.map(assignment => {
            return (
                <div className="bg-light shadow rounded-lg m-3" style={{ width: '10rem' }}>
                    <div className="card-body">
                        <h5 className="card-title text-center">{assignment.name}</h5>
                        <div className="text-center mx-auto"><small className="text-muted ">{assignment.description}</small></div>
                        <hr />
                        <div className="text-center mx-auto"><small className="text-muted ">Total Points</small></div>
                        <h6 className="card-subtitle mb-2 display-4 text-center">{assignment.totalPoints}</h6>
                        <div className="text-center mx-auto"><small className="text-muted ">Due Date</small></div>
                        <p className="text-muted text-center">{assignment.dueDate}</p>
                    </div>
                </div>
            )
        })


        console.log(this.props.course)
        return (
            <div className="modal fade" id="classPageModal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog mw-100 w-75" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">{this.props.course && this.props.course.name}</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <div className="row p-3">
                                <p className="text-nowrap rounded-pill bg-primary shadow p-2 text-light">{teacher}</p>
                            </div>
                            <div className="row">
                                {assignments}
                            </div>


                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    course: state.temp.editCourse
})

export default connect(mapStateToProps, {})(ClassPageModal);