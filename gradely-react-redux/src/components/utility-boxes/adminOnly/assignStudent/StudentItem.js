import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addStudentToCourse, removeStudentFromCourse } from './../../../../action/tempActions';
import checkMark from './../../../../images/icons/check.png'
import Fade from 'react-reveal/Fade'

class StudentItem extends Component {
    constructor() {
        super()
        this.handleAddStudent = this.handleAddStudent.bind(this)
        this.state = {
        }
    }

    handleAddStudent(currentStudent) {
        //Use the temp form
        if (!this.state.checked) {
            this.props.addStudentToCourse(currentStudent)
        } else {
            this.props.removeStudentFromCourse(currentStudent.id)
        }
        this.setState({
            checked: !this.state.checked
        })

    }

    componentDidUpdate(prevProps) {
        if(prevProps.editCourse === undefined) {
            if (this.props.editCourse.students && this.props.editCourse.students.find((student) => student.id === this.props.currentStudent.id)) {
                this.setState({
                    checked: true
                })
            } else {
                this.setState({
                    checked: false
                })
            }
        } else if (this.props.editCourse && this.props.editCourse !== prevProps.editCourse && prevProps.editCourse) {

            if (this.props.editCourse.students && this.props.editCourse.students.find((student) => student.id === this.props.currentStudent.id)) {
                console.log(this.props.currentStudent.id)
                this.setState({
                    checked: true
                })
            } else {
                this.setState({
                    checked: false
                })
            }
        }

    }

    render() {
        return (
            <button type="button" className={this.state.checked ? "btn btn-primary" : "btn btn-secondary"}
                onClick={() => this.handleAddStudent(this.props.currentStudent)}>
                {this.props.name} {this.state.checked ? <Fade><img style={{ width: '14px', height: '14px' }} src={checkMark} /></Fade> : null}
            </button>
        );
    }
}

const mapStateToProps = state => ({
    editCourse: state.temp.editCourse
})

export default connect(mapStateToProps, { addStudentToCourse, removeStudentFromCourse })(StudentItem);