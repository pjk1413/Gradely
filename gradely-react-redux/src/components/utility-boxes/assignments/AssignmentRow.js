import React, { Component } from 'react';

class AssignmentRow extends Component {
    render() {
        let assignmentStyle = "bg-warning"; //May also be bg-danger
        return (
            <tr className={assignmentStyle}>
                <th scope="row"></th>
                <td>{this.props.assignment.teacher}</td>
                <td>{this.props.assignment.class}</td>
                <td>{this.props.assignment.assignment}</td>
                <td>{this.props.assignment.points}</td>
                <td>{this.props.assignment.percentGrade}</td>
                <td>{this.props.assignment.date}</td>
            </tr>
        );
    }
}

export default AssignmentRow;