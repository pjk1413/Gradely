import React, { Component } from 'react';
import UserInformation from './UserInformation';
import { connect } from 'react-redux';

class AccountModal extends Component {
    render() {
        return (
                <div className="modal fade" id="account" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog mw-50 w-25" role="document">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h5 className="modal-title" id="exampleModalLabel">Account Details</h5>
                          <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">×</span>
                          </button>
                        </div>
                        <div className="modal-body">
                          <UserInformation />
                          
                
                        </div>
                        <div className="modal-footer">
                          <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                          <button type="button" className="btn btn-primary">Save changes</button>
                        </div>
                      </div>
                    </div>
                  </div>
        );
    }
}

const mapStateToProps = state => ({
  user: state.user
})

export default connect(mapStateToProps, {})(AccountModal);