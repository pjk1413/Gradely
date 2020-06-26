import React, { Component } from 'react';
import Message from '../../../images/icons/message.svg';
import Close from '../../../images/icons/close.svg';
import View from '../../../images/icons/eye.svg';
import Info from '../../../images/icons/info.svg';

class Notification extends Component {
    render() {
        return (
            
            <div className="card mx-auto" style={{width: '18rem'}}>
                {/* Design an object that can be passed in that will contain all of the data*/}
                <div className="card-body">
                    <h5 className="card-title">{this.props.title}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">{this.props.location}</h6>
                    <p className="card-text">{this.props.details}</p>
                    <a data-target="#writeMessage" data-toggle="modal" className="card-link px-1"><img src={Message}/></a>
                    <button type="button" className="btn" data-toggle="modal" data-target="#message"><img src={View}/></button>
                    <a href="#" className="card-link px-1"><img src={Info}/></a>
                    <a href="#" className="card-link px-1"><img src={Close}/></a>
                </div>
            </div>
        );
    }
}

export default Notification;