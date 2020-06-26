
import React, { Component } from 'react';
import LoginPage from '../pages/login/LoginPage'
import StudentPage from './../pages/student/StudentPage';
import AdminPage from '../pages/admin/AdminPage';
import {
    BrowserRouter as Router,
    NavLink,
    Switch,
    Route,
    Link,
    Redirect,
  } from "react-router-dom";
import { BrowserHistory } from 'react-router'
import ProtectedRoute from './../components/ProtectedRoute';
import TeacherPage from './../pages/teacher/TeacherPage';
import ErrorPage from './../pages/error/ErrorPage';
import FadeIn from 'react-fade-in';
import Rotate from "react-reveal/Rotate"
import Zoom from 'react-reveal/Zoom'



class Layout extends Component {

    signOut() {
        sessionStorage.clear()
        return <Redirect exact to="/"/>
    }

    render() {

        return (
            
            <Router>
                <div>
                    <Switch>

                        <Route 
                        path={["/", "/student", "/parent", "/staff", "/login", "/home", "/teacher", "/district", "/admin"]} 
                        exact 
                        component={LoginPage} />

                        <ProtectedRoute exact={true} path="/admin/home" component={AdminPage} />
                        <ProtectedRoute exact={true} path="/student/home" component={StudentPage} />
                        <ProtectedRoute exact={true} path="/teacher/home" component={TeacherPage} />
                        <ProtectedRoute exact={true} path="/parent/home" component={AdminPage} />
                        
                        <Route path="/error" component={ErrorPage} />
                        <Route path="/" component={this.signOut} />

                    </Switch>
                    
                </div>
            </Router>
            
        );

        

    }
}

export default Layout;