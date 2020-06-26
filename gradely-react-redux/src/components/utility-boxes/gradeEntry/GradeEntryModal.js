import React, { Component } from 'react';
import './gradeEntry.css';
import GradeEntryNavBar from './GradeEntryNavBar';
//import GradeEntryTable from './GradeEntryTable';
//import ReactDataSheet from 'react-datasheet';
//import 'react-datasheet/lib/react-datasheet.css';
import Table from './Table';
import GradeEntryClassNavBar from './GradeEntryClassNavBar';
import { connect } from 'react-redux'
//import TablePractice from './TablePractice';


class GradeEntryModal extends Component {
    render() {
        return (
            <div data-backdrop="static" className="modal fade" id="gradeEntryModal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-lg mw-100 w-90" role="document">
                  <div className="modal-content">
                    <div className="modal-header">
                      <h5 className="modal-title" id="exampleModalLabel">{this.props.editCourse && this.props.editCourse.name}</h5>
                      <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">×</span>
                      </button>
                    </div>
                    <div className="modal-body">
                      <GradeEntryNavBar />
                      <GradeEntryClassNavBar />
                      <Table />
                      {/* <TablePractice /> */}
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
  editCourse: state.temp.editCourse
})

export default connect(mapStateToProps, {})(GradeEntryModal);