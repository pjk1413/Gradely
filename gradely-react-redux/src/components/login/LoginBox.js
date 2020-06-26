import React, { Component, useState } from 'react';
import {
    BrowserRouter as Router,
    NavLink,
    Switch,
    Route,
    Link,
    Redirect,
    withRouter
} from "react-router-dom";
import LoginPage from '../../pages/login/LoginPage';
import axios from 'axios';
import FadeIn from 'react-fade-in';
import Bounce from 'react-reveal/Bounce'
import Slide from 'react-reveal/Slide'


class LoginBox extends Component {
    constructor(props) {
        super()
        this.handleSubmitError = this.handleSubmitError.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.adminLogin = this.adminLogin.bind(this)
        this.teacherLogin = this.teacherLogin.bind(this)
        this.districtLogin = this.districtLogin.bind(this)
        this.state = {
            email: "",
            password: "",
            message: "",
            staffMessage: ""
        }
    }

    setEmail(value) {
        this.setState({
            email: value
        })
    }

    setPassword(value) {
        this.setState({
            password: value
        })
    }

    handleSubmitError(text) {
        this.setState({
            message: text
        })
        document.getElementById("error-text").style = { display: "block" }
    }

    staffLogin() {
        document.getElementById("staff-login").style = { display: "block" }
    }

    otherLogin() {
        document.getElementById("staff-login").style = { display: "none" }
    }

    adminLogin() {
        this.setState({
            staffMessage: "Admin"
        })
        document.getElementById("staff-message").style = {display: "block"}
    }

    teacherLogin() {
        this.setState({
            staffMessage: "Teacher"
        })
        document.getElementById("staff-message").style = {display: "block"}
    }

    districtLogin() {
        this.setState({
            staffMessage: "District"
        })
        document.getElementById("staff-message").style = {display: "block"}
    }



    handleSubmit(event) {
        event.preventDefault()

        if (this.state.email.length > 0 && this.state.password.length > 0) {
            const user = {
                "email": this.state.email,
                "password": this.state.password
            }
            if (["student", "parent", "staff"].indexOf(this.props.location.pathname) > -1) {

                this.handleSubmitError("Please Select a User Type")

            } else (
                axios.post(`http://localhost:8080/${this.props.location.pathname}/login?email=${this.state.email}&password=${this.state.password}`)
                    .then((response) => {             
                        if (response.data != "") {
                            sessionStorage.setItem("user", response.data.id);
                            sessionStorage.setItem("userID", response.data.user.id)
                            switch (this.props.location.pathname) {
                                case "/admin":
                                    this.props.history.push('/admin/home')
                                    break;
                                case "/student":
                                    this.props.history.push('/student/home')
                                    break;
                                case "/teacher":
                                    this.props.history.push('/teacher/home')
                                    break;
                                case "/district":
                                    this.props.history.push('/district/home')
                                    break;
                                case "/parent":
                                    this.props.history.push('/parent/home')
                                    break;
                                default:
                                    break;
                            }
                        } else {
                            sessionStorage.clear()
                            this.handleSubmitError("Username or password is incorrect")
                        }
                    }).catch()
            )
        } else {
            this.handleSubmitError("Username or Password cannot be blank")
        }
    }

    render() {

        return (
            <FadeIn transitionDuration={1000}>
                <div className="mt-5 mx-auto w-50 p-3">
                    <div className="rounded-lg shadow p-3 bg-light">

                        <ul className="nav nav-tabs">
                            <li className="nav-item">
                                <NavLink activeClassName="active" className="nav-link" to="student">Student</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink activeClassName="active" className="nav-link" to="parent">Parent</NavLink>
                            </li>
                            <li className="nav-item" onClick={this.staffLogin}>
                                <NavLink activeClassName="active" className="nav-link" to="staff">Staff</NavLink>
                            </li>
                        </ul>

                        <div id="staff-login" className=" my-2" style={{ display: "none"}}>
                            <div className="row">
                                <div className="row mx-auto">
                                
                                    <Slide top>
                                        <div className="col">
                                        <NavLink
                                            activeClassName="active" 
                                            className="btn btn-info" 
                                            to="teacher" 
                                            onClick={this.teacherLogin}>Teacher</NavLink></div></Slide>
                                            
                                    <Slide right>
                                    <div className="col">
                                        <NavLink
                                            activeClassName="active" 
                                            className="btn btn-info" 
                                            to="admin" 
                                            onClick={this.adminLogin}>Admin</NavLink></div></Slide>
                                        
                                    <Slide left>
                                    <div className="col">
                                        <NavLink
                                            activeClassName="active" 
                                            className="btn btn-info" 
                                            to="district" 
                                            onClick={this.districtLogin}>District</NavLink></div></Slide>
                                
                                </div>

                            </div>
                        </div>

                        <Bounce>
                            <div id="error-text" style={{ display: "none" }}>
                                <small className="text-danger">{this.state.message}</small>
                            </div>
                        </Bounce>
                        <div>
                            <form onSubmit={this.handleSubmit}>

                                <div class="form-group mt-4">
                                    <label for="exampleInputEmail1">Email address  </label>
                                        
                                        <span style={{display: "none"}} id="staff-message" 
                                        className="float-right text-muted"><Bounce spy={this.state.staffMessage}>{this.state.staffMessage}</Bounce></span>

                                    <input
                                        type="email"
                                        className="border-top-0 border-left-0 border-right-0 rounded-0 form-control"
                                        value={this.state.email}
                                        autoFocus
                                        onChange={e => this.setEmail(e.target.value)}
                                        id="email"
                                        aria-describedby="Email Address" />
                                    <small id="emailHelp" className="form-text text-muted"></small>
                                </div>
                                <div class="form-group">
                                    <label for="exampleInputPassword1">Password</label>
                                    <input
                                        type="password"
                                        className="border-top-0 border-left-0 border-right-0 rounded-0 form-control"
                                        value={this.state.password}
                                        onChange={e => this.setPassword(e.target.value)}
                                        id="password" />
                                </div>
                                <div className="form-group">
                                    <button type="submit" class="btn btn-primary w-100">Submit</button>
                                </div>
                                <a href="#" className="text-muted"><small>Register</small></a><a className="float-right text-muted font-size" href="#"><small>Need help?</small></a>

                            </form>
                        </div>

                    </div>
                </div>
            </FadeIn>




        );
    }
}

export default withRouter(LoginBox);