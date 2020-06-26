import React, { Component } from 'react';
import LoginBox from '../../components/login/LoginBox';
import Header from '../../components/login/header/Header';
import './login_page.css';

class LoginPage extends Component {
    
    render() {
        sessionStorage.clear();
        return (
            <div className="hide-scroll">
                <Header />
                <div className="row vh-100 bg-fade">
                    <div className="col-md-6 my-auto">
                        <LoginBox />
                    </div>
                    <div className="image-container col-md-6"></div>
                        
                </div>
            </div>
        );
    }
}

export default LoginPage;