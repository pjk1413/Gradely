import React, { Component } from 'react';
import { connect } from 'react-redux'
import { holdTempCourse } from './../../../action/tempActions';

class CourseRosterClassNavBar extends Component {
    
    selected(course) {
        this.props.holdTempCourse(course)
    }
    
    render() {

        const courses = this.props.courses && this.props.courses.map(course => {
            return (
                <button key={course.id} id={course.id} type="button" 
                className={this.props.editCourse && this.props.editCourse.id === course.id ? "btn btn-primary mr-1" : "btn btn-secondary mr-1"} 
                onClick={() => this.selected(course)}>
                    {course.name}
                </button>
            )
        })
        //Code to return a navbar with a list of all the teachers classes
        return (
            <div className="pt-2">
                <div class="btn-toolbar" role="toolbar">
                    <div className="btn-group">
                        {courses}
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    user: state.user.user,
    courses: state.courses.courses,
    editCourse: state.temp.editCourse
})

export default connect(mapStateToProps, { holdTempCourse })(CourseRosterClassNavBar);