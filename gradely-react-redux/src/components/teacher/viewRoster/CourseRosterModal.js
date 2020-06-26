import React, { Component } from 'react';
import CourseRosterClassNavBar from './CourseRosterClassNavBar';
import CourseRosterData from './CourseRosterData';

class CourseRosterModal extends Component {
    render() {
        return (
            <div>
                <div className="modal fade" id="studentRosterModal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog mw-100 w-50" role="document">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h5 className="modal-title" id="exampleModalLabel">Course Rosters</h5>
                          <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">×</span>
                          </button>
                        </div>
                        <div className="modal-body">
                          <CourseRosterClassNavBar />
                          <CourseRosterData />
                        </div>
                        <div className="modal-footer">
                          <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                          <button type="button" className="btn btn-primary">Save changes</button>
                        </div>
                      </div>
                    </div>
                  </div>
            </div>
        );
    }
}
export default CourseRosterModal;