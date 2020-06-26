import React, { Component } from 'react';
import 'handsontable/dist/handsontable.full.css';
import { HotTable, HotColumn } from '@handsontable/react'
import { connect } from 'react-redux';
import { gridHandleChange, updateTempAssignment } from './../../../action/tempActions'
import { saveStudentScore, saveNewStudentScore } from './../../../action/courseActions'
import Handsontable from "handsontable";
import 'handsontable/dist/handsontable.full.css';


class Table extends Component {
    constructor() {
        super()
        this.hot = React.createRef();
        this.data = [

        ]
    }

    swapHotData() {
        // The Handsontable instance is stored under the `hotInstance` property of the wrapper component.
        this.hot.current.hotInstance.loadData([['new', 'data']]);
    }

    handleChange(changes) {

        changes && changes.forEach(([row, prop, oldValue, newValue]) => {
                console.log(newValue)

                //Checks if values are different
            if (oldValue !== newValue) {

                // ** Sets the data into the table
                this.hot.current.hotInstance.setDataAtRowProp(row, prop, newValue)   


                const id = this.hot.current.hotInstance.getRowHeader(row).split(":")[0]
                
                //Set student assignment score, update course, and start a timer to save the data
                const student = this.props.editCourse.students && this.props.editCourse.students.find(student => {
                    return student.id === parseInt(id)
                })

                let assignmentScore = student.assignmentScores.find(assignment => {
                    return assignment.assignmentTempId === prop
                })
                console.log(assignmentScore)
                if(assignmentScore) {
                    assignmentScore.points = newValue
                    assignmentScore.turnedIn = true
                    //assignmentScore.courseTempId = this.props.editCourse.id
                    //assignmentScore.assignmentTempId = prop
                    //assignmentScore.studentTempId = id
                    
                    this.data = this.hot.current.hotInstance.getData

                    console.log(assignmentScore)

                    this.props.saveStudentScore(assignmentScore);
                } else {
                    console.log("NO SCORE")
                    assignmentScore = {
                        points: newValue,
                        turnedIn: true,
                        courseTempId: this.props.editCourse.id,
                        assignmentTempId: prop,
                        studentTempId: id
                    }

                    console.log(assignmentScore)

                    this.data = this.hot.current.hotInstance.getData
                    this.props.saveNewStudentScore(assignmentScore)
                }

                // assignmentScore.points = newValue
                // assignmentScore.turnedIn = true
                // assignmentScore.courseTempId = this.props.editCourse.id


                
                //this.props.saveStudentScore(assignmentScore);
                //this.props.updateTempAssignment(assignmentScore)
            }
        });
    }




    render() {

        let colHeaders = []
        let columnSchema = []
        let rowHeaders = null
        let data = []

        if (this.props.editCourse && this.props.editCourse.students) {

            //rowHeaders are students
            rowHeaders = this.props.editCourse.students.map(student => {

                //Creates an object that will be used to organize the data
                let studentArray = []
                student.assignmentScores && student.assignmentScores.forEach(score => {
                    studentArray.push([score.assignmentTempId, score.points])
                });

                const temp = new Map(studentArray)
                const studentObj = Object.fromEntries(temp)

                data && data.push(studentObj)

                //Returns the heading
                return student.id + ": " + student.user.firstName + " " + student.user.lastName
            })
        }

        if (this.props.editCourse && this.props.editCourse.assignments) {

            //Sort by assignment ID
            // ** Creates the column headers as well as colSchema //
            // ***************************** //
            colHeaders = this.props.editCourse.assignments.map(assignment => {
                const colObj = { data: assignment.id }
                columnSchema.push(colObj)
                return assignment.name + " (" + assignment.totalPoints + ")"
            })
        }

        this.data = data

        return (
            <div id="hot-app" className="my-3">
                <HotTable
                    ref={this.hot}
                    id="hot-table"
                    className="my-3"
                    afterChange={(changes) => { this.handleChange(changes) }}
                    //setDataAtRowProp={this.state.changes}
                    licenseKey={'non-commercial-and-evaluation'}
                    data={this.data}
                    colHeaders={colHeaders}
                    rowHeaders={rowHeaders}
                    rowHeaderWidth={150}
                    columns={columnSchema}
                    height={"300"}
                    headerTooltips={{ rows: true, columns: true, onlyTrimmed: false }}
                />
            </div>
        );
    }
}

const mapStateToProps = state => ({
    editCourse: state.temp.editCourse,
    data: state.temp.data,
})


export default connect(mapStateToProps, { gridHandleChange, saveNewStudentScore, updateTempAssignment, saveStudentScore })(Table)