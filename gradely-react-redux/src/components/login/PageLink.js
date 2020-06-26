import React, { Component } from 'react';

class PageLink extends Component {
    
    render() {
        return (
            <a href="#" 
            className={this.props.active ? "nav-link active" : "nav-link"}
            onClick={()=> this.props.active}>
                {this.props.title}
                </a>
        );
    }
}

export default PageLink;