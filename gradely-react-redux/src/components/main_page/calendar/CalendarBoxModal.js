import React, { Component } from 'react';
import CalendarInsert from './CalendarInsert';

class CalendarBoxModal extends Component {

    render() {
        return (
          <div class="modal fade in-front" id="calendar" data-backdrop="static" data-keyboard="false" tabindex="-1" role="dialog" aria-labelledby="staticBackdropLabel" aria-hidden="true">
          <div class="modal-dialog">
              <div class="modal-content">
                  <div class="modal-header">
                      <h5 class="modal-title" id="staticBackdropLabel">Upcoming Dates</h5>
                      <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                          <span aria-hidden="true">&times;</span>
                      </button>
                  </div>
                  <div class="modal-body">
                      {/* Calendar goes here */}
                      <CalendarInsert />
                      
                  </div>
                  <div class="modal-footer">
                        <button type="button" class="btn btn-primary mr-auto">Add Event</button>
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                  </div>
              </div>
          </div>
      </div>
      
        );
    }
}

export default CalendarBoxModal;