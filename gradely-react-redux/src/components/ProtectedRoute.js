import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
class ProtectedRoute extends Component {

    render() {
        const Component = this.props.component;
        const isAuthenticated = sessionStorage.getItem("user");
        return isAuthenticated ? (
            <Component />
        ) : (
            <Redirect to={{ pathname: '/' }} />
        );
    }
}

export default ProtectedRoute;