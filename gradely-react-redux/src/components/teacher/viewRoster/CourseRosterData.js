import React, { Component } from 'react';
import { connect } from 'react-redux'

class CourseRosterData extends Component {
    render() {

        console.log(this.props.editCourse)
        let count = 0
        const studentList = this.props.editCourse && this.props.editCourse.students && this.props.editCourse.students.map(student => {
            count ++
            return (
                <tr>
                    <td>{count}</td>
                    <td>{student.user.firstName}</td>
                    <td>{student.user.lastName}</td>
                </tr>
            )
        })


        return (
            <div>
                <div className="table-responsive">
                    <table className="table table-hover table-sm">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">First Name</th>
                                <th scope="col">Last Name</th>
                            </tr>
                        </thead>
                        <tbody>
                            {studentList}

                        </tbody>
                    </table>
                </div>

            </div>
        );
    }
}

const mapStateToProps = state => ({
    editCourse: state.temp.editCourse
})

export default connect(mapStateToProps, {})(CourseRosterData);