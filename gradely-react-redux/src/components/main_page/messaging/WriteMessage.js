import React, { Component } from 'react';
import './messaging.css';
import { connect } from 'react-redux'
import RecipientItem from './RecipientItem';
import Fade from 'react-reveal/Fade'
import { sendMessage } from './../../../action/userActions'

class WriteMessage extends Component {
  constructor() {
    super()
    this.handleSend = this.handleSend.bind(this)
    this.onChange = this.onChange.bind(this)
    this.state = {
      search: ''
    }
  }

  handleSend() {
    let date = new Date()
    console.log(this.props.currentUser)
    const message = {
      subject: this.state.subject,
      bodyText: this.state.bodyText,
      sentById: this.props.currentUser.id,
      sentByEmail: this.props.currentUser.email,
      sentByName: this.props.currentUser.firstName + " " + this.props.currentUser.lastName,
      recipients: this.props.mailList,
      sentOn: Date.now()
    }

    this.props.sendMessage(message);
  }

  onChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  filterList(list) {
    if (Array.isArray(list)) {
      return list.filter(user => {
        if (this.checkUser(user.firstName, user.lastName)) {
          return user
        }
      })
    }
  }

  checkUser(firstName, lastName) {
    const length = this.state.search.length
    if (this.state.search.toLowerCase() == firstName.toLowerCase().substr(0, length) ||
      this.state.search.toLowerCase() == lastName.toLowerCase().substr(0, length)) {
      return true
    } else {
      return false
    }
  }

  componentWillReceiveProps() {
    console.log("RUN")
  }


  render() {
    let users = []
    if (this.props.users) {
      users = this.filterList(this.props.users).map(user => {
        return <RecipientItem firstName={user.firstName} lastName={user.lastName} currentUser={user} />
      })
    }

    let recipients = []

    if (this.props.mailList) {
      recipients = this.props.mailList && this.props.mailList.map(mail => {
        return <Fade><small className="rounded-pill bg-info shadow p-1 px-2 text-white m-1 mb-3">{mail.firstName} {mail.lastName}</small></Fade>
      })
    }

    return (
      <div>
        <div className="modal fade write-bg" id="writeMessage" data-backdrop="static" data-keyboard="false" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered mw-100 w-50" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">Compose Message</h5>

                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                <div className="row">

                  {recipients}

                </div>
                <div className="row">
                  <div className="col-md-3">

                    {users}
                  </div>
                  <div className="col">
                    <form>
                      <input type="text" class="form-control" name="search" onChange={this.onChange} placeholder="Search Users" />


                      <input type="text" className="form-control my-1" name="subject" onChange={this.onChange} placeholder="Subject" />
                      <textarea className="form-control my-1" rows={5} onChange={this.onChange} name="bodyText" defaultValue={"Enter text here"} />
                    </form>
                  </div>

                </div>

              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary mr-auto" data-dismiss="modal">Cancel</button>
                {/* <button type="button" className="btn btn-info">Save</button> */}
                <button type="button" onClick={this.handleSend} className="btn btn-primary w-25">Send</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  currentUser: state.user.user.user,
  users: state.user.users,
  mailList: state.temp.mailList
})

export default connect(mapStateToProps, { sendMessage })(WriteMessage);