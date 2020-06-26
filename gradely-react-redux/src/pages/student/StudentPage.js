import React, { Component } from 'react';
import { connect } from 'react-redux'
import './student_page.css';
import Header from '../../components/main_page/header/Header';
import Image from '../../images/img_avatar.png';
import UserHomeLayout from './../../layout/UserHomeLayout';
import { getStudentUser } from './../../action/userActions';
import { getStudentCourses } from './../../action/studentActions'
import StudentGradeModal from '../../components/student/StudentGradeModal';
import ClassPageModal from '../../components/student/ClassPageModal';

class StudentPage extends Component {

    componentWillMount() {
        console.log(sessionStorage.getItem("user"))
        this.props.getStudentUser(sessionStorage.getItem("user"));
        this.props.getStudentCourses(sessionStorage.getItem("user"))
    }

    render() {
        return (
            <div className="">
                <Header type="STUDENT"/>
                <UserHomeLayout type="STUDENT" />

                <StudentGradeModal />
                <ClassPageModal />
            </div>
        );
    }
}

const mapStateToProps = state => ({
    courses: state.user.user
})

export default connect(mapStateToProps, { getStudentUser, getStudentCourses })(StudentPage);