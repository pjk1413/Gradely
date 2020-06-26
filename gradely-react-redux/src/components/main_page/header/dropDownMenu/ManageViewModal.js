import React, { Component } from 'react';
import UserInformation from './UserInformation';
import AssignmentBox from './../../../utility-boxes/assignments/AssignmentBox';
import { TeacherBoxList, StudentBoxList, ParentBoxList, AdminBoxList } from './../../../../data/BoxList';

class ManageViewModal extends Component {
  constructor() {
    super()
    this.onChange = this.onChange.bind(this)
    this.state = {

    }
  }

  boxListPicker(type) {
    switch (type) {
      case "STUDENT":
        return StudentBoxList.boxList;
        break;
      case "PARENT":
        return ParentBoxList.boxList;
        break;
      case "TEACHER":
        return TeacherBoxList.boxList;
        break;
      case "ADMIN":
        return AdminBoxList.boxList;
        break;
      default:
        break;
    }
  }

  handleSubmit() {

  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.checked
    })
  }

  render() {
    //create object to store box properties as well as a boolean, then map that array to display on the screen
    const currentUser = sessionStorage.getItem("user");
    let tempBoxList = []
    tempBoxList = localStorage.getItem(currentUser) ? localStorage.getItem(currentUser).boxList : this.boxListPicker(this.props.type);
    


    const userBoxList = tempBoxList && tempBoxList.map(box => {

      return (
        <form className="form-inline border rounded p-3 my-1">
          <h6 className="mr-3">{box.name}</h6>
          <div className="form-check mr-sm-2">
            <input onChange={this.onChange} name={box.name} className="form-check-input" type="checkbox" id="inlineFormCheck" />
            <label className="form-check-label" htmlFor="inlineFormCheck">Show</label>
          </div>
          <small>{box.description}</small>
        </form>
      )
    })

    return (
      <div className="modal fade" id="manageView" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Manage Views</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              {userBoxList}

            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
              <button type="button" onClick={this.handleSubmit} className="btn btn-primary">Save changes</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ManageViewModal;