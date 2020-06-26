import React, { Component } from 'react';
import GradeItem from './GradeItem';
import { connect } from 'react-redux';

class GradeBox extends Component {

    findPercent(assignments, scores) {
        let totalPoints = 0;
        let studentTotal = 0;
        console.log(scores)

        assignments.map(assignment => {
            
            const studentScore = scores && scores.find(score => {
                //console.log(assignment)
                return assignment.assignmentScores.find(assignment => {

                    return score.id === assignment.id
                })
            })

            //console.log(studentScore)
            //totalPoints += assignment.totalPoints

            if(studentScore) {
                studentTotal += studentScore.points
                totalPoints += assignment.totalPoints
            }

            //studentTotal += (studentScore && studentScore.points)
        })
        console.log(studentTotal)
        console.log(totalPoints)
        return ((studentTotal / totalPoints) * 100).toFixed(1)
    }


    render() {
        const gradeListObject = this.props.gradeListObject;

        //Create a list of column objects <th scope="col">{gradeObject.classTitle}</th>
        //Create 4 lists from gradeObjects that then populate all the columns and rows

        

        const gradeData = {
            className: "Algebra",
            percent: 97,
            classLink: "http://www.google.com"
        }
        
        const GradeList = this.props.courses && this.props.courses.map(course => {
            const gradeData = {
                className: course.name,
                percent: this.findPercent(course.assignments, this.props.user.assignmentScores)
            }
            return <GradeItem key={course.id} grade={gradeData} currentCourse={course}/>
        })


        return (

            <div className="jumbotron p-3 m-3 shadow">
                <h6>Grades</h6>
                <div className="row mx-auto">
                    {GradeList}
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    user: state.user.user,
    courses: state.courses.courses
})


export default connect(mapStateToProps, {})(GradeBox);