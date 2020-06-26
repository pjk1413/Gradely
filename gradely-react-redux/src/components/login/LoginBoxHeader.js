import React, { Component } from 'react';

class LoginBoxHeader extends Component {
    render() {
        return (
            <div>
                <div className="rounded-lg jumbotron jumbotron-fluid bg-primary h-25 pt-1 pb-1">
                    <div className="container">
                        <h1 className="display-5 text-light">Gradely</h1>
                        {//<p className="lead text-light">Communication. Data. Results.</p>
    }
                    </div>
                </div>
            </div>
        );
    }
}

export default LoginBoxHeader;