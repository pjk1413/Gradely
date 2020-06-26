import React, { Component } from 'react';

import './messaging.css';
import MessagePreview from './MessagePreview';
import WriteMessage from './WriteMessage';
import { connect } from 'react-redux'

class MessageBoxModal extends Component {

    

    render() {
        const sampleMessage = {
            name: "Michael Douglas",
            email: "michael.douglas@gmail.com",
            subject: "New Ideas",
            innerText: "This is a sample message testing the contents and display ability of our messaging dialogue"
        }

        let messages = []
        if (this.props.messages) {
            messages = this.props.messages.map(message => {
                return <MessagePreview message={message}/>
            })
        }
        

        return (
            <div><div>
            <div class="modal fade" id="message" data-backdrop="static" data-keyboard="false" tabindex="-1" role="dialog" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div class="modal-dialog modal-lg mw-100 w-75 z-1035">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="staticBackdropLabel">Messaging</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <table class="tabel table-sm table-hover w-100">
                                <thead>
                                    <tr>
                                        <th scope="col"></th>
                                        <th scope="col">Name</th>
                                        <th scope="col">Email</th>
                                        <th scope="col">Subject</th>
                                        <th scope="col">Preview</th>                        
                                        <th scope="col">Options</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {messages.length > 0 ? messages : <p className="mx-auto">All Caught Up!</p>}
                                </tbody>
                            </table>
                        </div>
                        <div class="modal-footer">
                             
                            <button type="button" className="btn btn-primary mr-auto" data-toggle="modal" data-target="#writeMessage">New Message</button>
                            <input type="text" className="form-control mb-2 mr-sm-2 w-25" placeholder="Search" />
                            <button type="button" className="btn btn-primary">Search</button>
                         
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            
                        </div>
                    </div>
                </div>
                
            </div>
            </div></div>
        );
    }
}

const mapStateToProps = state => ({
    messages: state.user.messages
})

export default connect(mapStateToProps, {})(MessageBoxModal);