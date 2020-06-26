import React, { Component } from 'react';
import Delete from '../../../../images/icons/trash.svg'
import Edit from '../../../../images/icons/edit.svg'
import { connect } from 'react-redux';

import { removeStudent } from './../../../../action/studentActions'
import { removeParent } from './../../../../action/parentActions';
import { holdTempUser, holdTempUserType } from './../../../../action/tempActions';
import { removeTeacher } from './../../../../action/teacherActions';

class UserListing extends Component {
    constructor() {
        super()
    }

    deleteUser() {
        //simply delete the user from here, show an alert box
        if(window.confirm("Are you sure you want to delete " + this.props.text + "?")) {
            switch (this.props.type) {
                case 'teacher':
                    this.props.removeTeacher(this.props.id)
                    break;
                case 'parent':
                    this.props.removeParent(this.props.id)
                    break;
                case 'student':
                    this.props.removeStudent(this.props.id)
                    break;
                case 'admin':
                    
                default:
                    break;
            }
        }
        
    }

    editUser() {
        this.props.holdTempUser(this.props.currentUser)
        this.props.holdTempUserType(this.props.type)
    }

    render() {
        const iconStyle = {
            width: 18,
            height: 18
        }
        return (
            <div>
            <form className="form-inline">

                <a
                    title={this.props.text}
                    onClick={() => this.deleteUser()}
                    className="mx-2">
                    <img style={iconStyle} src={Delete} /></a>

                <a
                    data-toggle="modal"
                    data-target="#editUser"
                    onClick={() => this.editUser()}
                    className="mx-2">
                    <img style={iconStyle} src={Edit} /></a>
                <span className="text-muted mx-2">{this.props.text}</span>
            </form>

        </div>
        );
    }
}

const mapStateToProps = state => ({
    students: state.students,
    parents: state.parents,
    teachers: state.teachers
})

export default connect(mapStateToProps, { removeTeacher, removeParent, removeStudent, holdTempUser, holdTempUserType })(UserListing);


    
