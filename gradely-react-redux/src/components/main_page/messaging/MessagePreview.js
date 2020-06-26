import React, { Component } from 'react';
import Read from '../../../images/icons/book.svg'
import Replay from '../../../images/icons/reply.svg'
import Delete from '../../../images/icons/trash.svg'
import Tag from '../../../images/icons/tag.svg'
import './messaging.css';
import { connect } from 'react-redux'
import { removeUserFromMessage } from './../../../action/userActions'
import { addUserToList } from './../../../action/tempActions';

class MessagePreview extends Component {
    constructor() {
        super()
        this.handleReply = this.handleReply.bind(this)
        this.handleDelete = this.handleDelete.bind(this)
    }

    handleDelete() {
        const userId = this.props.message.sentById
        const messageId = this.props.message.id
        this.props.removeUserFromMessage(userId, messageId);
    }

    handleReply(sentById) {
        // const sentByUser = this.props.users.find(
        //     function(user) {
        //         return user.id === sentById
        //     }
        // )

        //this.props.addUserToList(sentByUser)
    }

    length(text) {
        const MAX_LENGTH = 30;
        let message = text;

        if ((message && message.length) > MAX_LENGTH) {
            message = message.slice(0, MAX_LENGTH) + "...";
        }

        return message
    }


    render() {
        
        return (
            <tr>
                <th scope="row"></th>
                <td className="text-small text-nowrap">{this.length(this.props.message.sentByName && this.props.message.sentByName)}</td>
                <td className="text-small text-nowrap">{this.length(this.props.message.sentByEmail && this.props.message.sentByEmail)}</td>
                <td className="text-small text-nowrap">{this.length(this.props.message.subject)}</td>
                <td className="text-small text-nowrap">{this.length(this.props.message.bodyText)}</td>
                <td className="">
                <div className="row w-100 float-right">
                <button className="btn" data-toggle="modal" data-target="#read">
                    <img width="25" height="25" src={Read}/>
                </button>
                <button className="btn" data-toggle='modal' data-target="#writeMessage" onClick={this.handleReply(this.props.message.sentById)}>
                    <img width="25" height="25" src={Replay}/>
                </button>
                <button className="btn" onClick={this.handleDelete}>
                    <img width="25" height="25" src={Delete}/>
                </button>
                {/* <button className="btn" onClick={this.handle}>
                    <img width="25" height="25" src={Tag}/>
                </button> */}
                

                </div>
            </td>

            <div className="modal fade write-bg" id="read" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title" id="exampleModalLabel">{this.props.message.subject}</h5>
                      <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">×</span>
                      </button>
                    </div>
                    <div className="modal-body">
                        {this.props.message.bodyText}
                      
            
                    </div>
                    <div className="modal-footer">
                      <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                    </div>
                  </div>
                </div>
              </div>
         
            </tr>
        );
    }
}

const mapStateToProps = state => ({
    messages: state.user.messages,
    mailList: state.temp.mailList,
    users: state.user.users
})

export default connect(mapStateToProps, { removeUserFromMessage, addUserToList })(MessagePreview);