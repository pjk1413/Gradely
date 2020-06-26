import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addToDoItem } from './../../../action/userActions';

class AddItem extends Component {
    constructor() {
        super()
        this.onChange = this.onChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.state = {
        }
    }

    onChange(e) {
      this.setState({
        [e.target.name]: e.target.value
      })
    }

    handleSubmit() {

      const item = {
        checked: false,
        description: this.state.text,
        tempUserId: this.props.user.id
      }

      this.props.addToDoItem(item)
    }

    render() {
        return (
            <div>
                <div className="modal fade" id="addItemModal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                  <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLongTitle">  Add Item to List</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                          <span aria-hidden="true">×</span>
                        </button>
                      </div>
                      <div className="modal-body">

                        <input 
                        onChange={this.onChange} 
                        type="text" name="text" className="form-control mb-2 mr-sm-2" 
                        placeholder="To Do List Item" />
                        
                      </div>
                      <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button 
                        onClick={this.handleSubmit} type="button" className="btn btn-primary">Add Item</button>
                      </div>
                    </div>
                  </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
  user: state.user.user.user
})

export default connect(mapStateToProps, { addToDoItem })(AddItem);