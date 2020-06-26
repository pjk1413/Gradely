import React, { Component } from 'react';
import Bookmark from '../images/icons/bookmark.svg'

class SideBarItem extends Component {
    render() {
        return (
            <li class="nav-item">
                <a class="nav-link active text-dark" href={this.props.link} data-toggle="modal" data-target={this.props.modal}>
                   <img className="p-1"src={Bookmark} />   {this.props.name}</a>
            </li>
        );
    }
}

export default SideBarItem;