import React, { Component } from 'react';
import { connect } from 'react-redux'
import Fade from 'react-reveal/Fade'
import { editStudent } from './../../../../action/studentActions';
import { editAdmin } from './../../../../action/adminActions';
import { editTeacher } from './../../../../action/teacherActions';
import { editParent } from './../../../../action/parentActions';
import { editUserDetails } from './../../../../action/userActions';

class UserDetails extends Component {
    constructor() {
        super()
        this.handleSubmit = this.handleSubmit.bind(this)
        this.onChange = this.onChange.bind(this)
        this.state = {
            email: "",
            password: "",
            firstName: "",
            lastName: "",
            dob: ""
        }
    }

    handleSubmit(e) {
        e.preventDefault()

        const user = {
            id: this.props.editUser.user.id,
            firstName: this.state.firstName ? this.state.firstName : this.props.editUser.user.firstName,
            lastName: this.state.lastName ? this.state.lastName : this.props.editUser.user.lastName,
            dob: this.state.dob ? this.state.dob : this.props.editUser.user.dob,
            email: this.state.email ? this.state.email : this.props.editUser.user.email,
            password: this.state.password ? this.state.password : this.props.editUser.user.password

        }
        console.log(user)
        this.props.editUserDetails(user)
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }

    render() {
        let date = ""
        const user = this.props.editUser && this.props.editUser.user

        if (user && user.dob) {
            let temp = new Date(Date.parse(user.dob))
            date = temp.toISOString()
        }
        return (
            <div>
                <form onSubmit={this.handleSubmit} id="form-to-clear">

                    <div className="form-row w-100">
                        <Fade left>
                            <div className="form-group col-md-6 w-100">
                                <label htmlFor="email">Email address</label>
                                <input
                                    onChange={this.onChange}
                                    type="email"
                                    name="email"
                                    className="form-control w-100"
                                    id="email"
                                    placeholder={user ? user.email : "Enter email"}
                                />

                            </div>
                        </Fade>
                        <Fade right>
                            <div className="form-group col-md-6 w-100">
                                <label htmlFor="password">Password</label>
                                <input
                                    onChange={this.onChange}
                                    type="password" name="password"
                                    className="form-control w-100"
                                    id="password"
                                    placeholder={user ? user.password : "Password"} />
                            </div>
                        </Fade>

                    </div>

                    <div className="form-row w-100">
                        <Fade top>
                            <div className="form-group col-md-6 w-100">
                                <label htmlFor="password">First Name</label>
                                <input
                                    onChange={this.onChange}
                                    type="text"
                                    name="firstName"
                                    className="form-control w-100"
                                    id="firstName"
                                    aria-describedby="emailHelp"
                                    placeholder={user ? user.firstName : "First Name"} />
                            </div>
                        </Fade>
                        <Fade bottom>
                            <div className="form-group col-md-6 w-100">
                                <label htmlFor="password">Last Name</label>
                                <input
                                    onChange={this.onChange}
                                    type="text" name="lastName"
                                    className="form-control w-100"
                                    id="lastName"
                                    placeholder={user ? user.lastName : "Last Name"} />
                            </div>
                        </Fade>
                    </div>
                    <div className="form-row w-100">
                        <Fade left>
                            <div className="form-group col-md-6 w-100 pl-0">
                                <label for="inputAddress2">Date of Birth</label>

                                <input
                                    onChange={this.onChange}
                                    value={this.state.dob}
                                    type="date" className="form-control"
                                    id="inputAddress2"
                                    name="dob"
                                    placeholder={date ? date : ""} />

                            </div>
                        </Fade>

                    </div>
                    <Fade right>
                        <div className="form-row">
                            <input type="submit" className="btn btn-primary w-100 mt-4"></input>
                        </div>
                    </Fade>
                </form>

            </div>
        );
    }
}

const mapStateToProps = state => ({
    editUser: state.temp.editUser,
    editUserType: state.temp.editUserType
})


export default connect(mapStateToProps, { editUserDetails, editParent, editAdmin })(UserDetails);