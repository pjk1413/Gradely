import Header from '../../components/main_page/header/Header';
import './admin_page.css';
import UserHomeLayout from '../../layout/UserHomeLayout';
import React, { useState, useEffect, Component } from 'react';
import { connect } from 'react-redux'
import { getAdminUser } from './../../action/userActions'; //import the action
import { getAllStudents } from './../../action/studentActions'
import { getAllTeachers } from './../../action/teacherActions'
import { getAllParents } from './../../action/parentActions'
import { PropTypes } from 'prop-types';
import { getAllCourses } from './../../action/courseActions';

class AdminPage extends Component {

    componentWillMount() {
        //Action to set the state of the user
        this.props.getAdminUser(sessionStorage.getItem("user"));
        this.props.getAllStudents()
        this.props.getAllParents()
        this.props.getAllTeachers()
        this.props.getAllCourses()
    }

    componentDidMount() {
        this.props.course && this.props.course.map(course => {
            if (this.props.teachers) {
                
            }
            return (
                course
            )
        })
    }

    render() {
        return (
            <div className="">
            <Header
                type="ADMIN" />
            <UserHomeLayout 
                    type="ADMIN" />
        </div>
        );
    }
}

AdminPage.prototypes = {
    students: PropTypes.array.isRequired,
    parents: PropTypes.array.isRequired,
    teachers: PropTypes.array.isRequired,
    courses: PropTypes.array.isRequired
}

const mapStateToProps = state => ({
    user: state.user,
    students: state.students,
    parents: state.parents,
    teachers: state.teachers.teachers,
    courses: state.courses.courses
})

//connects our component to the store
export default connect(mapStateToProps, { getAdminUser, getAllStudents, getAllTeachers, getAllParents, getAllCourses })(AdminPage);








