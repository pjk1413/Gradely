import React, { Component } from 'react';
//import Calendar from 'react-calendar';
//import 'react-calendar/dist/Calendar.css';
import { connect } from 'react-redux'

import { addCalendarItem, removeCalendarItem } from './../../../action/userActions';

class CalendarInsert extends Component {
  constructor() {
    super()
    this.onChange = this.onChange.bind(this)
    this.handleAdd = this.handleAdd.bind(this)
    this.state = {
      calendarItems: []
    }
  }

  handleAdd() {

    const newItem = {
      date: this.state.date,
      description: this.state.description
    }

    const id = this.props.user.user.id
    console.log(this.props.user)
    this.props.addCalendarItem(newItem, id)


  }

  handleDelete(itemId) {
    if (window.confirm("Are you sure you want to delete this calendar item?")) {

      const id = this.props.user.user.id
      this.props.removeCalendarItem(itemId)
    }
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {

      const calendarTable = this.props.user.user && this.props.user.user.calendarList.map(item => {
        return (
          <tr onClick={() => this.handleDelete(item.id)}>
            <td>{item.date}</td>
            <td>{item.description}</td>
          </tr>
        )
      })




    return (
      <div>
        <input type="date" className="form-control my-2" name="date" onChange={this.onChange}></input>
        <div className="input-group mb-3">
          <input type="text" class="form-control" name="description" onChange={this.onChange} placeholder="Description" />
          <div class="input-group-append">
            <button class="btn btn-outline-secondary" type="button" onClick={this.handleAdd}>Add</button>
          </div>
        </div>

        <table class="table table-borderless table-hover">
          <thead>
            <tr>
              <th scope="col">Date</th>
              <th scope="col">Description</th>
            </tr>
          </thead>
          <tbody>
            {calendarTable}
          </tbody>
        </table>


      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user.user
})

export default connect(mapStateToProps, { addCalendarItem, removeCalendarItem })(CalendarInsert)