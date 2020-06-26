import React, { Component } from 'react';
import { connect } from 'react-redux';

class AssignStudentForm extends Component {
    render() {

        const studentList = this.props.editCourse && this.props.editCourse.students && this.props.editCourse.students.map(student => {
            return <li className="list-group-item text-muted py-1" 
            key={student.id}>{student.id}: {student.user && student.user.firstName} {student.user && student.user.lastName}</li>
        })

        const length = this.props.editCourse && this.props.editCourse.students && this.props.editCourse.students.length ? 
        this.props.editCourse.students && this.props.editCourse.students.length :
        0

        return (
            <div>
                <h5>{this.props.editCourse && this.props.editCourse.name}  
                {this.props.editCourse ? ("    |    Students: " + length ) : null }</h5>
                <ul className="list-group list-group-flush">
                {studentList}
                </ul>
                
            </div>
        );
    }
}

const mapStateToProps = state => ({
    editCourse: state.temp.editCourse
})

export default connect(mapStateToProps, {})(AssignStudentForm);