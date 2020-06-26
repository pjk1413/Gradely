import React, { Component } from 'react';
import { connect } from 'react-redux'

class StudentGradeModal extends Component {
    render() {
        let count = 0
        const courseAssignments = this.props.tempCourse && this.props.tempCourse.assignments.map(assignment => {
            count++
            let scores = this.props.user.assignmentScores
            
            const studentScore = scores && scores.find(score => {

                return assignment.assignmentScores.find(assignment => {

                    return score.id === assignment.id
                })
            })

            //studentScore = studentScore ? studentScore : studentScore.points = 0
            
            const finalScore = studentScore ? studentScore.points + "/" + assignment.totalPoints : 0

            return (
                <tr>
                    <td>{count}</td>
                    <td>{assignment.name}</td>
                    <td>{finalScore}</td>
                    <td>{assignment.description}</td>
                </tr>
            )
        })


        return (

            <div className="modal fade" id="studentGradeModal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">{this.props.tempCourse && this.props.tempCourse.name}</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <div className="table-responsive">
                                <table className="table table-hover">
                                    <thead>
                                        <tr>
                                            <th scope="col">#</th>
                                            <th scope="col">Assignment Name</th>
                                            <th scope="col">Score</th>
                                            <th scope="col">Description</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {courseAssignments}

                                    </tbody>
                                </table>
                            </div>



                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>


        );
    }
}

const mapStateToProps = state => ({
    user: state.user.user,
    tempCourse: state.temp.editCourse
})

export default connect(mapStateToProps, {})(StudentGradeModal);