import React, { Component } from 'react';
import { connect } from 'react-redux'
import { holdTempCourse } from './../../../../action/tempActions';

class CourseItem extends Component {
    constructor() {
        super()
        this.handleSelect = this.handleSelect.bind(this)
        this.state = {

        }
    }


    handleSelect() {
        this.props.holdTempCourse(this.props.currentCourse)
        this.props.changeView()
    }

    render() {
        return (
            <button
            className="btn btn-secondary" type="button"
            onClick={this.handleSelect} 
            name="course-button" id="course-button" value={this.props.currentCourse}>
                {this.props.name}
            </button>
        );
    }
}

const mapStateToProps = state => ({
    editCourse: state.temp.editCourse
})

export default connect(mapStateToProps, { holdTempCourse })(CourseItem);