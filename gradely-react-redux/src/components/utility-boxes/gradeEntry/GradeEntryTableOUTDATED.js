import _ from 'lodash';
import React from 'react';
//import Datasheet from 'react-datasheet'
import './gradeEntry.css'
import userData from '../../../data/teacher'

export default class GradeEntryTable extends React.Component {
  constructor (props) {
    super(props)
    this.writeHeaders = this.writeHeaders.bind(this)
    this.writeStudents = this.writeStudents.bind(this)
    this.state = {
        grid: []


    //   grid: [
    //     [
    //       {readOnly: true, value: '', width: 100},
    //       {value: 'A', readOnly: true, width: 100},
    //       {value: 'B', readOnly: true, width: 100},
    //       {value: 'C', readOnly: true, width: 100},
    //       {value: 'D', readOnly: true, width: 100}
    //     ],
    //     [{readOnly: true, value: 1}, {value: 1}, {value: 3}, {value: 3}, {value: 3}],
    //     [{readOnly: true, value: 2}, {value: 2}, {value: 4}, {value: 4}, {value: 4}],
    //     [{readOnly: true, value: 3}, {value: 1}, {value: 3}, {value: 3}, {value: 3}],
    //     [{readOnly: true, value: 4}, {value: 2}, {value: 4}, {value: 4}, {value: 4}]
    //   ]
    }
  }
  writeHeaders(assignmentList) {
      const tempGrid = this.state.grid
      const headerList = assignmentList.map(course => {
          const newValue = course.title + " (" + course.points + ") " + course.type
          return {value: newValue, readOnly: true, width: 100} 
      })

      headerList.unshift({value: '', readOnly: true, width: 150})
      tempGrid.splice(0,1,headerList)
      this.setState({
        grid: tempGrid 
      })
  }

  writeStudents(studentList) {

  }

  render () {
    const user = userData.userList[0] //temporary
    
    //this.writeHeaders(user.courseObjects[0].assignmentObjects) //Takes a list of assignment objects
    this.writeStudents(user.courseObjects.studentObjects) //Takes a list of student objects
    const userCourses = user.courseObjects.map(course => {
        return course
    })


    return (
      <div></div>
      // <Datasheet
      // className="table table-hover"
      //   data={this.state.grid}
      //   valueRenderer={(cell) => cell.value}
      //   onContextMenu={(e, cell, i, j) => cell.readOnly ? e.preventDefault() : null}
      //   onCellsChanged={changes => {
      //     const grid = this.state.grid.map(row => [...row])
      //     changes.forEach(({cell, row, col, value}) => {
      //       grid[row][col] = {...grid[row][col], value}
      //     })
      //     this.setState({grid})
      //   }}
      // />
    )
  }
}
