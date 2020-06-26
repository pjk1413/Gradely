import React, { Component } from 'react';
import Table from './Table'
import GradeEntryNavBar from './GradeEntryNavBar';
import GradeEntryClassNavBar from './GradeEntryClassNavBar';
//import TablePractice from './TablePractice/table';

class GradeEntryBox extends Component {
    render() {
        return (
            <div className="jumbotron p-3 m-3 shadow">
                <h4>Grade Entry</h4>
                  <GradeEntryNavBar />
                  <GradeEntryClassNavBar />
                  <Table />
            </div>
        );
    }
}

export default GradeEntryBox;