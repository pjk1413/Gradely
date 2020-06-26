import React, { Component } from 'react';
import '../modal.css'
import Fade from 'react-reveal/Fade'
import axios from 'axios'

class EditUser extends Component {
    constructor(props) {
        super()
        //this.handleSubmit = this.handleSubmit.bind(this);
        this.showAddress = this.showAddress.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        
        this.state = {
            editAddressSelect: "",
            useAddress: false,
            newUser: "",
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
            style: {
                display: "none"
            },
            currentAddress: ""

        }
    }

    handleSubmit(event) {
        event.preventDefault();

        const user = {
            id: this.props.user.id,
            type: this.props.user.type,
            firstName: this.state.firstName ? this.state.firstName : event.target.firstName.placeholder,
            lastName: this.state.lastName ? this.state.lastName : event.target.lastName.placeholder,
            dob: this.state.dob ? this.state.dob : event.target.dob.placeholder,
            email: this.state.email ? this.state.email : event.target.email.placeholder,
            password: this.state.password ? this.state.password : event.target.password.placeholder
        }

        if (!user.type) {
            return "User type not defined"
        }
        let path = ""
        switch (user.type) {
            case "TEACHER":
                path = "teacher/update"
                break;
            case "PARENT":
                path = "parent/update"
                break;
            case "STUDENT":
                path = "student/update"
                break;
            case "ADMIN":
                path = "admin/update"
                break;
            default:

                break;
        }

        if (this.state.editAddressSelect == "EDIT" || this.state.editAddressSelect == "") {
            
        const currentPath = "http://localhost:8080/" + path

        axios.post(currentPath, user).then(response => {
            this.props.newUser(response.data)
        })
        } else if(this.state.editAddressSelect == "ADD") {
            const address = {
            contactInformation: this.state.useAddress ? ([{
                address: this.state.address ? event.target.address.placeholder : this.state.address,
                city: this.state.city ? event.target.city.placeholder : this.state.city,
                unit: this.state.unit ? this.state.unit : event.target.unit.placeholder,
                state: this.state.state ? event.target.state.placeholder : this.state.state,
                zipcode: this.state.zipcode ? event.target.zipcode.placeholder : this.state.zipcode
            }]) : null }
        const currentPath = "http://localhost:8080/" + path + "/addAddress/" + user.id
        axios.get(currentPath, address).then(response => {
            this.props.newUser(response.data)
            this.setState({
                newUser: response.data
            })
        })
        }

    }

    setDob(value) {
        this.setState({
            dob: value
        })
    }

    setEmail(value) {
        this.setState({
            email: value
        })
    }

    setPassword(value) {
        this.setState({
            password: value
        })
    }

    setFirstName(value) {
        this.setState({
            firstName: value
        })
    }

    setLastName(value) {
        this.setState({
            lastName: value
        })
    }

    setAddress(value) {
        this.setState({
            address: value
        })
    }

    setUnit(value) {
        this.setState({
            unit: value
        })
    }

    setCity(value) {
        this.setState({
            city: value
        })
    }

    setUserState(value) {
        this.setState({
            state: value
        })
    }

    setZipcode(value) {
        this.setState({
            zipcode: value
        })
    }

    setType(value) {

        this.setState({
            type: value
        })
    }

    handleAddress(value) {
        this.setState({
            currentAddress: value
        })
    }

    addAddress() {
        let sel = document.getElementById("addressPick").value
        console.log(sel.address)
        const status = document.getElementById("addressEdit").style.display
        if (status == "block") {
            document.getElementById("addressEdit").style.display = "none"
            this.setState({
                useAddress: false
            })
        } else {
            document.getElementById("addressEdit").style.display = "block";
            this.setState({
                useAddress: true,
                currentAddress: sel,
                editAddressSelect: "ADD"
            })
        }
    }

    showAddress() {
        let sel = document.getElementById("addressPick").value
        console.log(sel.address)
        const status = document.getElementById("addressEdit").style.display
        if (status == "block") {
            document.getElementById("addressEdit").style.display = "none"
            this.setState({
                useAddress: false
            })
        } else {
            document.getElementById("addressEdit").style.display = "block";
            this.setState({
                useAddress: true,
                currentAddress: sel,
                editAddressSelect: "EDIT"
            })
        }
    }

    componentDidMount() {
        axios.get("http://localhost:8080/getStates").then(response => {
            const temp = response.data.map(st => {
                return <option>{st}</option>
            })

            this.setState({
                states: temp
            })
        })
    }

    render() {
        let date = "";

        if (this.props.user.dob) {
            let temp = new Date(Date.parse(this.props.user.dob))
            date = temp.toISOString()
        }


        return (
            <div>

                {/* This whole area needs to be redone with various pieces and tags so that the type of user you are asking to edit, 
                alters what appears on the page.  That way it can all be seperate and easy to manage */}

                <div data-backdrop="static" className="modal fade modal-bg-color" id="" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog mw-75 w-75" role="document">
                        <div className="modal-content">
                            <div className="modal-header" ref={this.focusRef}>
                                <h5 className="modal-title" id="exampleModalLabel">Edit User Details</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">×</span>
                                </button>
                            </div>
                            <div className="modal-body p-5">
                                <form onSubmit={this.handleSubmit} id="form-to-clear">
                                    
                                    <div className="form-row w-100">
                                        <div className="form-group col-md-6 w-100">
                                            <label htmlFor="email">Email address</label>
                                            <input
                                                onChange={e => this.setEmail(e.target.value)}
                                                type="email"
                                                name="email"
                                                className="form-control w-100"
                                                id="email"
                                                aria-describedby="emailHelp"
                                                value={this.state.email ? this.state.email : null}
                                                placeholder={this.props.user.email ? this.props.user.email : "Enter email"}
                                            />

                                        </div>
                                        <div className="form-group col-md-6 w-100">
                                            <label htmlFor="password">Password</label>
                                            <input
                                                onChange={e => this.setPassword(e.target.value)}
                                                type="password" name="password"
                                                className="form-control w-100"
                                                id="password"
                                                value={this.state.password ? this.state.password : null}
                                                placeholder={this.props.user.password ? this.props.user.password : "Password"}
                                            />

                                        </div>
                                    </div>

                                    <div className="form-row w-100">

                                        <div className="form-group col-md-6 w-100">
                                            <label htmlFor="password">First Name</label>
                                            <input
                                                value={this.state.firstName ? this.state.firstName : null}
                                                onChange={e => this.setFirstName(e.target.value)}
                                                type="text"
                                                name="firstName"
                                                className="form-control w-100"
                                                id="firstName"
                                                aria-describedby="emailHelp"
                                                placeholder={this.props.user.firstName ? this.props.user.firstName : "First Name"}
                                            />
                                        </div>

                                        <div className="form-group col-md-6 w-100">
                                            <label htmlFor="password">Last Name</label>
                                            <input
                                                value={this.state.lastName ? this.state.lastName : null}
                                                onChange={e => this.setLastName(e.target.value)}
                                                type="text" name="lastName"
                                                className="form-control w-100"
                                                id="lastName"
                                                placeholder={this.props.user.lastName ? this.props.user.lastName : "Last Name"} />
                                        </div>
                                    </div>

                                    <div className="form-group col">
                                        <label for="inputAddress2">Date of Birth</label>
                                        <input
                                            onChange={e => this.setDob(e.target.value)}
                                            value={date ? date.substr(0, 10) : null}
                                            type="date" className="form-control"
                                            //onfocus={e=> this.setDob(e.target.selected)}
                                            id="inputAddress2"
                                            name="dob"
                                            placeholder={date ? date.substr(0, 10) : ""} />

                                    </div>

{/* Place ability to add and edit addresses here, either through a new modal or an existing one */}

                                    


                                    <div className="form-row">
                                        <div className="col">
                                            <button onClick={this.showAddress} className="btn btn-info w-100 mt-4">Add/Edit Address</button>
                                        </div>
                                        <div className="col">
                                            <input type="submit" className="btn btn-primary w-100 mt-4">
                                            </input>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div className="modal-footer">
                                <h4 className="text-success mr-5">{this.state.success}</h4>
                                <button type="button" className="btn btn-secondary" data-dismiss="modal" >Close</button>
                            </div></div>
                    </div>
                </div>

            </div>

        );
    }
}

export default EditUser;