import React, { Component } from 'react';

class AdminOption extends Component {
    render() {
        return (
            <button className="btn-outline-primary p-5">{this.props.text}</button>
        );
    }
}

export default AdminOption;