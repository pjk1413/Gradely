import React, { Component } from 'react';
import './header.css';
import Image from '../../../images/Gradely.png';
import {
    BrowserRouter as Router,
    NavLink,
    Switch,
    Route,
    Link
  } from "react-router-dom";

class Header extends Component {
    render() {
        return (
            <Router>
            <div className="fixed-top">
                <nav className="navbar navbar-light w-100">
                    <NavLink className="navbar-brand" to="/">
                        <img src={Image} width="80" height="40" className="d-inline-block align-top" alt="" loading="lazy" />
                 
                    </NavLink>
                    <NavLink to="/more-information" href="#" className="float-right btn btn-light">More Information</NavLink>
                </nav>
            </div>
            <Switch>
                <Route path="/" ></Route>
                <Route path="/more-information" />
            </Switch>
            </Router>
        );
    }
}

export default Header;