import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addUserToList, removeUserFromList } from './../../../action/tempActions';

class RecipientItem extends Component {
    constructor() {
        super()
        this.handleAddRecipient = this.handleAddRecipient.bind(this)
        this.state = {
        }
    }

    handleAddRecipient(currentUser) {
        //Use the temp form
        if (!this.state.checked) {
            this.props.addUserToList(currentUser && currentUser)
            //this.props.addStudentToCourse(currentUser)
        } else {
            this.props.removeUserFromList(currentUser.id)
            //this.props.removeStudentFromCourse(currentUser.id)
        }
        this.setState({
            checked: !this.state.checked
        })

    }

    componentDidUpdate(prevProps) {
        if(prevProps.mailList === undefined) {
            if (this.props.mailList && this.props.mailList.find((user) => user.id === this.props.currentUser.id)) {
                this.setState({
                    checked: true
                })
            } else {
                this.setState({
                    checked: false
                })
            }
        } else if (this.props.mailList && this.props.mailList !== prevProps.mailList && prevProps.mailList) {

            if (this.props.mailList && this.props.mailList.find((user) => user.id === this.props.currentUser.id)) {
                console.log(this.props.currentUser.id)
                this.setState({
                    checked: true
                })
            } else {
                this.setState({
                    checked: false
                })
            }
        }

    }
    render() {
        return (
        <button 
        type="button" 
        id={this.props.id} 
        className={this.state.checked === true ? "btn btn-primary rounded-pill text-nowrap my-1" : "btn btn-secondary rounded-pill text-nowrap my-1"}
        onClick={() => this.handleAddRecipient(this.props.currentUser)}>
            {this.props.firstName} {this.props.lastName}
        </button>

        );
    }
}

const mapStateToProps = state => ({
    mailList: state.temp.mailList
})

export default connect(mapStateToProps, { addUserToList, removeUserFromList })(RecipientItem);