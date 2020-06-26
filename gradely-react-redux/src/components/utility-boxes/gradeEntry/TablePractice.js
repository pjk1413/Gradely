// import React from 'react';
// import { connect } from 'react-redux';
// import Handsontable from 'handsontable';

// let data = []
// const hotTable = null;

// let columnSchema = []
// const rowHeaders = this.props.editCourse.students.map(student => {

//       //Creates an object that will be used to organize the data
//       let studentArray = []
//       student.assignmentScores.forEach(score => {
//           studentArray.push([score.assignmentTempId, score.points])
//       });

//       const temp = new Map(studentArray)
//       const studentObj = Object.fromEntries(temp)

//       data && data.push(studentObj)

//       //Returns the heading
//       return student.id + ": " + student.user.firstName + " " + student.user.lastName
//   })

//   // ***************************** //
//   const colHeaders = this.props.editCourse.assignments.map(assignment => {
//       const colObj = { data: assignment.id }
//       columnSchema.push(colObj)
//       return assignment.name + " (" + assignment.totalPoints + ")"
//   })


// function TablePractice(props) {
//   hotTable = new Handsontable(
//     document.getElementById("hot-app"),
//     {
//         licenseKey: 'non-commercial-and-evaluation',
//         data: data,
//         colHeaders: colHeaders,
//         rowHeaders: rowHeaders,
//         rowHeaderWidth: 150,
//         columns: columnSchema,
//         //rows: rowSchema,
//         //row: rowStudentLabel,
//         // width: "600", 
//         height: "600",
//         headerTooltips: {
//             rows: true,
//             columns: true,
//             onlyTrimmed: false
//         }
//     })

//   return (
//     <div id="hot-app" />
//   );
// }

// const mapStateToProps = state => ({

// })

// export default connect(mapStateToProps, {})(TablePractice);