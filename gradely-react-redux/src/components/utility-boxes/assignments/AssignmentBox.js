import React, { Component } from 'react';
import AssignmentRow from './AssignmentRow';

class AssignmentBox extends Component {
    render() {
        const assignment = {
            teacher: "Mr. Biggs",
            class: "Algebra 1",
            assignment: "Intro to Me",
            points: 100,
            percentGrade: "13.4%",
            date: "Thursday, May 21st"
        }


        return (
     
                <div className="jumbotron p-3 m-3 shadow">
                <h6>Current Assignments</h6>
                <div className="row">
                    {/* Options to filter assignments goes here */}
                </div>
                    <div className="table-responsive">
                    <table className="table table-sm table-hover bg-light rounded-lg">
                      <thead>
                        <tr>
                          <th scope="col"></th>
                          <th scope="col">Teacher</th>
                          <th scope="col">Class</th>
                          <th scope="col">Assignment Name</th>
                          <th scope="col">Points Available</th>
                          <th scope="col">Percentage Grade</th>
                          <th scope="col">Due Date</th>

                        </tr>
                      </thead>
                      <tbody>
                        <AssignmentRow assignment={assignment}/>
                        
                      </tbody>
                    </table>
                    </div>
                    
                </div>
        );
    }
}

export default AssignmentBox;