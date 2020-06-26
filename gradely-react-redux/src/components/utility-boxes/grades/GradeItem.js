import React, { Component } from 'react';
import { holdTempCourse } from './../../../action/tempActions';
import { connect } from 'react-redux'

class GradeItem extends Component {
    constructor() {
        super()
        this.handleCurrentCourse = this.handleCurrentCourse.bind(this)
    }

    handleCurrentCourse() {
        this.props.holdTempCourse(this.props.currentCourse)
    }

    render() {
        let color = null;
        let letterGrade = "F"
        if (this.props.grade.percent > 89) {
            color = "bg-success text-light"
            letterGrade = "A"
            if (this.props.grade.percent < 94) {
                letterGrade = "A-"
            } else if (this.props.grade.percent > 96) {
                letterGrade = "A+"
            }
        } else if (this.props.grade.percent > 79) {
            color = "bg-info text-light"
            letterGrade = "B"
            if (this.props.grade.percent < 84) {
                letterGrade = "B-"
            } else if (this.props.grade.percent > 86) {
                letterGrade = "B+"
            }

        } else if (this.props.grade.percent > 69) {
            color = "bg-warning"
            letterGrade = "C"
            if (this.props.grade.percent < 74) {
                letterGrade = "C-"
            } else if (this.props.grade.percent > 76) {
                letterGrade = "C+"
            }
        } else if (this.props.grade.percent > 59) {
            color = "bg-danger"
            letterGrade = "D"
            if (this.props.grade.percent < 64) {
                letterGrade = "D-"
            } else if (this.props.grade.percent > 66) {
                letterGrade = "D+"
            }
        } else if (isNaN(this.props.grade.percent)) {
            
            color = "bg-alertalert"
            letterGrade = "NA"
            
        } else {
            
            color = "bg-danger"
            letterGrade = "F"
        }

        let gradeCardStyle = "card mx-1 my-1 " + color


        return (
            <div className={gradeCardStyle} style={{ width: '10rem' }}>
                <div className="card-body">
                    <h5 className="card-title text-center">{this.props.grade.className}</h5>
                    <h6 className="card-subtitle mb-2 display-4 text-center">{letterGrade}</h6>
                    <p className="card-text text-center">
                        Percent: {this.props.grade.percent}
                    </p>
                    <a onClick={this.handleCurrentCourse} data-toggle="modal" data-target="#classPageModal" className="btn btn-secondary my-1 w-100 text-light">Class Page</ a>
                    <a onClick={this.handleCurrentCourse} data-toggle="modal" data-target="#studentGradeModal" className="btn btn-light my-1 w-100 text-dark">View Grades</ a>
                </div>
            </div>

        );
    }
}

export default connect(null, { holdTempCourse })(GradeItem);