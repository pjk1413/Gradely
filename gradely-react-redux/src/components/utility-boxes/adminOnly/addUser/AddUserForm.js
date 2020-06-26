import React, { Component } from 'react';
import axios from 'axios'
import { connect } from 'react-redux'
import { addTeacher } from '../../../../action/teacherActions';
import { addStudent } from './../../../../action/studentActions';
import { addParent } from './../../../../action/parentActions';
import { addAdmin } from './../../../../action/adminActions';

class AddUserForm extends Component {
    constructor() {
        super()
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onChange = this.onChange.bind(this)
        this.state = {
            states: [],
            dob: "",
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            address: "",
            unit: "",
            city: "",
            state: "",
            zipcode: "",
            type: ""
        }
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }

    handleSubmit(e) {
        e.preventDefault();
        console.log("SUBMIT")
        const type = this.state.type ? this.state.type : document.getElementById('type').value;
        const user = {
            user: {
                firstName: this.state.firstName,
                lastName: this.state.lastName,
                dob: this.state.dob,
                email: this.state.email,
                password: this.state.password,
                contactInformation: [{
                    address: this.state.address,
                    city: this.state.city,
                    state: this.state.state,
                    zipcode: this.state.zipcode
                }]
            }

        }
        switch (type) {
            case 'PARENT':
                this.props.addParent(user);
                break;
            case 'STUDENT':
                this.props.addStudent(user);
                break;
            case 'ADMIN':
                this.props.addAdmin(user);
                break;
            case 'TEACHER':
                this.props.addTeacher(user);
                break;
            default:
                break;
        }

        document.getElementById("form-to-clear").reset();
    }

    componentDidMount() {
        axios.get("http://localhost:8080/getStates").then(response => {
            const temp = response.data.map(st => {
                return <option key={st}>{st}</option>
            })

            this.setState({
                states: temp
            })
        })
    }

    render() {

        console.log(this.state.type)

        return (
            <div>
                <form id="form-to-clear" onSubmit={this.handleSubmit}>
                    <div className="form-row w-100">
                        <div className="form-group col-md-6 w-100">
                            <label htmlFor="email">Email address</label>
                            <input onChange={this.onChange} type="email" name="email" className="form-control w-100" id="email" aria-describedby="emailHelp" placeholder="Enter email" required />

                        </div>
                        <div className="form-group col-md-6 w-100">
                            <label htmlFor="password">Password</label>
                            <input onChange={this.onChange} type="password" name="password" className="form-control w-100" id="password" placeholder="Password" required />

                        </div>
                    </div>

                    <div className="form-row w-100">

                        <div className="form-group col-md-6 w-100">
                            <label htmlFor="password">First Name</label>
                            <input required onChange={this.onChange} type="text" name="firstName" className="form-control w-100" id="firstName" placeholder="First Name" />
                        </div>

                        <div className="form-group col-md-6 w-100">
                            <label htmlFor="password">Last Name</label>
                            <input required onChange={this.onChange} type="text" name="lastName" className="form-control w-100" id="lastName" placeholder="Last Name" />
                        </div>
                    </div>
                    <div className="form-group">
                        <label for="inputAddress">Address</label>
                        <input required onChange={this.onChange} type="text" className="form-control" id="inputAddress" name="address" placeholder="1234 Main St" />
                    </div>
                    <div className="form-row">
                        <div className="form-group col">
                            <label for="inputAddress2">Address 2</label>
                            <input onChange={this.onChange} type="text" className="form-control" id="inputAddress2" name="unit" placeholder="Apartment, studio, or floor" />
                        </div>
                        <div className="form-group col">
                            <label for="inputAddress2">Date of Birth</label>
                            <input required onChange={this.onChange} type="date" className="form-control" id="inputAddress2" name="dob" placeholder="Apartment, studio, or floor" />

                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label for="inputCity">City</label>
                            <input required onChange={this.onChange} type="text" className="form-control" name="city" id="inputCity" />
                        </div>
                        <div className="form-group col-md-4">
                            <label for="inputState">State</label>
                            <select required onChange={this.onChange} id="inputState" name="state" className="form-control">
                                <option selected>Choose State</option>
                                {this.state.states}
                            </select>
                        </div>
                        <div className="form-group col-md-2">
                            <label for="inputZip">Zip</label>
                            <input onChange={this.onChange} type="text" name="zipcode" className="form-control" id="inputZip" />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="input-group col">
                            <p className="text-alert">{this.state.message}</p>
                            <select id="type" onChange={this.onChange} className="custom-select mt-4" name="type" required>
                                <option value="STUDENT" selected>Student</option>
                                <option value="ADMIN">Admin</option>
                                <option value="PARENT">Parent</option>
                                <option value="TEACHER">Teacher</option>
                            </select>
                        </div>
                        <div className="col">

                            <input type="submit" className="btn btn-primary w-100 mt-4">

                            </input>

                        </div>
                    </div>
                </form>
            </div>
        );
    }
}


const mapStateToProps = state => ({
    user: state.user,
    students: state.students,
    parents: state.parents,
    teachers: state.teachers
  })

export default connect(null, { addAdmin, addParent, addStudent, addTeacher })(AddUserForm);