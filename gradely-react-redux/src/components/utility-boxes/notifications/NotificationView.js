import React, { Component } from 'react';

class NotificationView extends Component {
    render() {
        return (
            <div>
                <div className="modal fade" id="notificationView" tabIndex={-1} role="dialog" aria-labelledby="notificationView" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h5 className="modal-title" id="exampleModalLabel">View</h5>
                          <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">×</span>
                          </button>
                        </div>
                        <div className="modal-body">
                          
                
                        </div>
                        <div className="modal-footer">
                     
                        </div>
                      </div>
                    </div>
                  </div>
            </div>
        );
    }
}

export default NotificationView;