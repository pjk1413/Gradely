import React, { Component } from 'react';
import Checkmark from '../../../images/icons/checkmark.svg';
import Trash from '../../../images/icons/trash.svg';
import { connect } from 'react-redux'
import { removeToDoItem, updateToDoItem } from './../../../action/userActions';
import { REMOVE_TODO_ITEM } from './../../../action/types';

class ToDoItem extends Component {
  constructor() {
    super()
    this.handleChange = this.handleChange.bind(this)
    this.handleRemove = this.handleRemove.bind(this)
    
    this.state = {
      complete: false
    }
  }

  handleChange() {
    this.props.updateToDoItem(this.props.id)
    
    this.setState({
      complete: !this.state.complete
    })
  }

  handleRemove() {
    this.props.removeToDoItem(this.props.id)
  }

  render() {
    //All events need to be functions
    let completeStyle = {
      transitionDuration: '1s'
    }

    if (this.state.complete) {
      completeStyle = {
        opacity: .4,
        textDecoration: "line-through",
        transitionDuration: '1s'
      }
    }

    return (
      <div className="card p-2 col-md-3 m-3 rounded shadow" style={completeStyle}>
        <blockquote className="blockquote mb-0 card-body text-smaller" style={completeStyle}>
          {this.props.text}
        </blockquote>
        <div className="row">
          <div className="col">
            
            <button 
            onClick={this.handleChange} 
            className="btn btn-primary w-100">
              
              <span style={completeStyle}><img src={Checkmark} /></span></button>
          </div>
          <div className="col">
            <button 
            onClick={this.handleRemove} 
            className="btn btn-info w-100"><img src={Trash} /></button>
          </div>


        </div>
      </div>
    );
  }
}

export default connect(null, { removeToDoItem, updateToDoItem })(ToDoItem);