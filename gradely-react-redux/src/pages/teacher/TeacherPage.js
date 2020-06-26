import React, { Component } from 'react';
import UserHomeLayout from '../../layout/UserHomeLayout';
import Header from './../../components/main_page/header/Header';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';
import { getTeacherUser } from './../../action/userActions';
import { getAllStudents } from './../../action/studentActions';
import { getAllTeacherCourses } from './../../action/courseActions';

class TeacherPage extends Component {
    constructor() {
        super()

        this.state = {
            user: "",
            message: "",
            courseList: [],
            userList: []
        }
    }

    componentWillMount() {
        this.props.getTeacherUser(sessionStorage.getItem("user"));
        //this.props.getAllStudents()
        this.props.getAllTeacherCourses(sessionStorage.getItem("user")) //Loads the teachers courses

    }

    //Look into conditional rendering of Layouts here based on user type
    render() {
        return (


            <div className="">
                <Header type="TEACHER" />
                <UserHomeLayout type="TEACHER" />
            </div>
        );
    }
}

TeacherPage.prototypes = {
    students: PropTypes.array.isRequired,
    courses: PropTypes.array.isRequired
}

export default connect(null, { getTeacherUser, getAllStudents, getAllTeacherCourses })(TeacherPage);