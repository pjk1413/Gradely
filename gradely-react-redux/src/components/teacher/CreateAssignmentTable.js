import React, { Component } from 'react';
import { connect } from 'react-redux';
import Trash from './../../images/icons/trash.svg';
import { updateAssignment, deleteAssignment } from './../../action/courseActions';
import { holdTempAssignment } from './../../action/tempActions';
import Bounce from 'react-reveal/Bounce';
import axios from 'axios';
import { holdTempCourse } from './../../action/tempActions';

class CreateAssignmentTable extends Component {
    constructor() {
        super()
        this.editAssignment = this.editAssignment.bind(this)
        this.handleUpdate = this.handleUpdate.bind(this)
        this.deleteAssignment = this.deleteAssignment.bind(this)
        this.updateAssignment = this.updateAssignment.bind(this)
        this.onChange = this.onChange.bind(this)
        this.state = {
            edit: false
        }
    }

    deleteAssignment() {
        this.props.deleteAssignment(this.props.editAssignment && this.props.editAssignment.id)
    }

    updateAssignment() {
        const assignment = {
            id: this.props.editAssignment.id,
            name: this.state.name ? this.state.name : this.props.editAssignment.name,
            totalPoints: this.state.totalPoints ? this.state.totalPoints : this.props.editAssignment.totalPoints,
            dueDate: this.state.dueDate ? this.state.dueDate : this.props.editAssignment.dueDate,
            assignmentType: this.state.assignmentType ? this.state.assignmentType : this.props.editAssignment.assignmentType,
            description: this.props.editAssignment.description
        }

        this.props.updateAssignment(assignment)
    }

    onChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleUpdate() {
        this.setState({
            edit: !this.state.edit
        })
    }

    handleClick(assignment) {
        this.props.holdTempAssignment(assignment)
        if(this.props.holdTempAssignment) {
            document.getElementById("delete-button").style.display = 'block';
        }
    }

    editAssignment(id) {
        if (this.state.edit) {
            if (this.props.editAssignment && this.props.editAssignment.id === id) {
                document.getElementById("update-button").style.display = 'block';
                return true
            } else {
                return false
            }
        } else {
            document.getElementById("update-button").style.display = 'none';
            return false
        }
    }

    componentDidMount() {
        axios.get("http://localhost:8080/assignment/getTypes").then(response => {
            this.setState({
                assignmentTypes: response.data
            })
        })
    }

    // componentWillReceiveProps(prevProps) {
    //     if (prevProps.courses !== this.props.courses) {
    //         this.props.courses && this.props.courses.forEach(course => {
    //             if (course.id === (this.props.editCourse && this.props.editCourse.id)) {
    //                 this.props.holdTempCourse(course)
    //             }
    //         })
    //     }
    // }

    //componentWillUpdate
    //componentDidUpdate  


    render() {

        const assignmentTypes = this.state.assignmentTypes && this.state.assignmentTypes.map(type => {
            return <option key={type} value={type}>{type}</option>
        })

        let count = 0;



        //get course that is selected and find all assignments for that course
        const assignmentList = this.props.editCourse && this.props.editCourse.assignments && this.props.editCourse.assignments.map(assignment => {
            count++;
            return (
                <tr key={assignment.id}
                    className={this.props.editAssignment && this.props.editAssignment.id === assignment.id ? "bg-warning" : null}
                    onClick={() => this.handleClick(assignment)}>

                    <th scope="row">{count}</th>
                    <td>{this.editAssignment(assignment.id) ? <input className="form-control" type="text" onChange={this.onChange} name="name" placeholder={assignment.name}></input> : assignment.name}</td>
                    <td>{this.editAssignment(assignment.id) ? <input className="form-control" type="text" onChange={this.onChange} name="totalPoints" placeholder={assignment.totalPoints}></input> : assignment.totalPoints}</td>
                    <td>{this.editAssignment(assignment.id) ? <input className="form-control" type="date" onChange={this.onChange} name="dueDate" placeholder={assignment.dueDate}></input> : assignment.dueDate}</td>
                    <td>{this.editAssignment(assignment.id) ?
                        <select onChange={this.onChange} className="custom-select" name="assignmentType" onChange={this.onChange} name="assignmentType" placeholder={assignment.assignmentType} id="assignmentType">
                            {assignmentTypes}
                        </select> :
                        assignment.assignmentType}</td>

                </tr>
            )
        })

        return (
            <div>
                <div className="row bg-light my-1">
                    <Bounce><button style={{ display: 'none' }} id="delete-button" 
                    className="btn btn-danger mx-2" onClick={this.deleteAssignment}>Delete Selected</button></Bounce>
                    
                    <button className="btn btn-secondary mx-2" onClick={this.handleUpdate}>Edit Selected</button>
                    <Bounce><button className="btn btn-primary ml-auto mr-2"
                        style={{ display: 'none' }} id="update-button" onClick={this.updateAssignment}>Update</button></Bounce>
                </div>
                <table class="table table-hover table-sm">
                    <thead>
                        <tr>
                            <th scope="col"></th>
                            <th scope="col">Name</th>
                            <th scope="col">Points</th>
                            <th scope="col">Due Date</th>
                            <th scope="col">Type</th>
                        </tr>
                    </thead>
                    <tbody>
                        {assignmentList}
                    </tbody>
                </table>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    editCourse: state.temp.editCourse,
    editAssignment: state.temp.editAssignment,
    courses: state.courses.courses
})

export default connect(mapStateToProps, { holdTempAssignment, holdTempCourse, deleteAssignment, updateAssignment })(CreateAssignmentTable);