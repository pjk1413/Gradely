import React, { Component } from 'react';
import { connect } from 'react-redux'
import '../modal.css'

import UserDetails from './UserDetails';
import ContactInformation from './ContactInformation';
import UserProfile from './UserProfile';

class EditUserAll extends Component {
    constructor() {
        super()
    }

    handleEditWindow(window) {
        switch (window) {
            case 'userDetails':
                document.getElementById("userDetails").style.display = "block";
                document.getElementById("userContact").style.display = "none";
                document.getElementById("userOther").style.display = "none";

                break;
            case 'userContact':
                document.getElementById("userDetails").style.display = "none";
                document.getElementById("userContact").style.display = "block";
                document.getElementById("userOther").style.display = "none";
                break;
            case 'userOther':
                document.getElementById("userDetails").style.display = "none";
                document.getElementById("userContact").style.display = "none";
                document.getElementById("userOther").style.display = "block";
                break;
            default:

                break;
        }
    }

    render() {
        return (
            <div data-backdrop="static" className="modal fade modal-bg-color" id="editUser" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog mw-100 w-75" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Edit User Information</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>

                        <div className="modal-body pt-0">

                            {/* Begin */}
                            <div>
                                <div className="row pl-5 border-bottom">

                                    {/* Top Nav Bar */}
                                <div className="btn-group my-3" role="group">
                                    <button type="button" onClick={() => this.handleEditWindow("userDetails")} class="btn btn-secondary px-3">User Details</button>
                                    <button type="button" onClick={() => this.handleEditWindow("userContact")} class="btn btn-secondary px-3">Contact Information</button>
                                    <button type="button" onClick={() => this.handleEditWindow("userOther")} class="btn btn-secondary px-3">Advanced User Edit</button>
                                </div>
                                    

                                </div>
                                <div className="row">
                                    <div className="col-md-3 border-right overflow-auto mt-4">

                                        <UserProfile />

                                    </div>
                                    <div className="col mt-4">
                                        <div className="col-md-12">

                                            <div id="userDetails" style={{display: "none"}}>
                                                <UserDetails />
                                            </div>
                                            
                                            <div id="userContact" style={{display: "none"}}>
                                                <ContactInformation />
                                            </div>

                                            <div id="userOther" style={{display: "none"}}>
                                                {/* Determine user type and then display appropriate edit settings */}
                                                
                                            </div>


                                        </div>
                                    </div>
                                </div>
                            </div>





                        </div>
                        <div className="modal-footer">
                            
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    editUser: state.temp.editUser,
    editUserType: state.temp.editUserType
})

export default connect(mapStateToProps, {})(EditUserAll);