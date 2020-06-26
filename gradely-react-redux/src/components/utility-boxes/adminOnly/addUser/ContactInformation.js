import React, { Component } from 'react';
import axios from 'axios'
import Fade from 'react-reveal/Fade'
import { connect } from 'react-redux'
import { addContact, deleteContact, addPhone, deletePhone } from './../../../../action/userActions'

class ContactInformation extends Component {
    constructor() {
        super()
        this.onChange = this.onChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleDelete = this.handleDelete.bind(this)
        this.addPhone = this.addPhone.bind(this)
        this.deletePhone = this.deletePhone.bind(this)
        this.state = {
            states: [],
            address: "",
            unit: "",
            city: "",
            state: "",
            zipcode: "",
            selectAddress: "",
            phone: ""
        }
    }

    addPhone() {
        console.log(this.state.phone)
        this.props.addPhone(this.state.phone, this.props.editUser.user.id)
    }

    deletePhone() {
        const userId = this.props.editUser.user.id;
        const phoneNumber = document.getElementById("selectPhone").value
        this.props.deletePhone(phoneNumber, userId)
    }

    handleDelete(e) {
        e.preventDefault()
        const userId = this.props.editUser.user.id;
        const contactId = document.getElementById("selectAddress").value
        
        console.log(contactId)
        this.props.deleteContact(contactId, userId)
    }

    handleSubmit(e) {
        e.preventDefault()

        const type = this.props.editUserType
        const user = {
            id: this.props.editUser.user.id,
            contactInformation: [{
                id: document.getElementById("selectAddress").key,
                address: this.state.address ? this.state.address : null,
                unit: this.state.unit ? this.state.unit : null,
                city: this.state.city ? this.state.city : null,
                state: this.state.state ? this.state.state : null,
                zipcode: this.state.zipcode ? this.state.zipcode : null
            }],

        }
        this.props.addContact(user)
    }

    onChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    togglePhoneNumbers() {

        if (document.getElementById("editPhoneNumbers").style.display == "none") {
            document.getElementById("editPhoneNumbers").style.display = "block"
        } else {
            document.getElementById("editPhoneNumbers").style.display = "none"
        }
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
        const cInfo = this.props.editUser && this.props.editUser.user && this.props.editUser.user.contactInformation
        const pNum = this.props.editUser && this.props.editUser.user && this.props.editUser.user.phone


        const contactId = document.getElementById("selectAddress") && document.getElementById("selectAddress").value 
        
        console.log(this.state.phone)
        const phoneList = pNum && pNum.map(number => {
            return <option key={number} value={number}>({number.substr(0, 3)}) {number.substr(3, 3)}-{number.substr(6, 4)} </option>
        })

        const addressList = cInfo && cInfo.map(item => {
            return <option key={item.id} value={item.id}>{item.address} {item.city}, {item.state} {item.zipcode}</option>
        })


        return (
            <div>
                <form onSubmit={this.handleDelete}>
                    <div className="form-row">

                        <Fade left>
                            <div className="form-group col-md-10">
                                <label for="selectAddress">Select Address to Delete</label>
                                <select id="selectAddress" onChange={this.onChange} name="selectAddress"
                                    className="form-control">
                                    {addressList}
                                </select>
                            </div>
                        </Fade>
                        <Fade right>
                            <div className="col-md-2">
                                <input type="submit"
                                value="Delete" 
                                className="btn btn-warning w-100 h-100" 
                                onClick={this.handleDelete}></input>
                            </div>
                        </Fade>

                    </div>
                </form>
                <Fade right>
                    <hr />
                    <h5>Add New Address Below</h5>
                </Fade>
                
                    <form onSubmit={this.handleSubmit} id="form-to-clear">
                    <Fade top>
                        <div className="form-group">
                            <label for="inputAddress">Address</label>
                            <input type="text" onChange={this.onChange} name="address" value={this.state.address}
                                className="form-control" id="inputAddress"
                                placeholder="1234 Main St" />
                        </div>
                    </Fade>
                    <Fade bottom>
                        <div className="form-group">
                            <label for="inputAddress2">Address 2</label>
                            <input type="text" onChange={this.onChange} name="unit" value={this.state.unit}
                                className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" />
                        </div>
                    </Fade>
                    <div className="form-row">

                        <div className="form-group col-md-6">
                            <Fade left>
                                <label for="inputCity">City</label>
                                <input type="text" onChange={this.onChange} name="city" value={this.state.city}
                                    className="form-control" id="inputCity" />
                            </Fade>
                        </div>


                        <div className="form-group col-md-4">
                            <Fade right>
                                <label for="inputState">State</label>
                                <select id="inputState" onChange={this.onChange} name="state" value={this.state.state}
                                    className="form-control" required>
                                    {this.state.states}

                                </select>
                            </Fade>
                        </div>


                        <div className="form-group col-md-2">
                            <Fade bottom>
                                <label for="inputZip">Zip</label>
                                <input type="text" onChange={this.onChange} name="zipcode" value={this.state.zipcode}
                                    className="form-control" id="inputZip" />
                            </Fade>
                        </div>

                    </div>
                    <div className="form-row">
                        <Fade top>
                            <div className="col">
                                <button type="button" onClick={this.togglePhoneNumbers} className="btn btn-secondary w-100">Edit/Add Phone Number(s)</button>
                            </div>
                        </Fade>
                        <Fade left>
                            <div className="col">
                                <input type="submit" className="btn btn-primary w-100"></input>
                            </div>
                        </Fade>

                    </div>
                </form>


                <div className="mt-5" id="editPhoneNumbers" style={{ display: "none" }}>
                    <form>
                        <div className="form-row">

                            <Fade left>
                                <div className="form-group col-md-10">
                                    <label for="selectPhone">Select Phone Number to Delete</label>
                                    <select id="selectPhone" onChange={this.onChange} name="selectPhone"
                                        className="form-control" value={this.state.selectPhone}>
                                        {phoneList}

                                    </select>
                                </div>
                            </Fade>
                            <Fade right>
                                <div className="col-md-2 mt-3">
                                    <button type="button" onClick={this.deletePhone} className="btn btn-warning w-100 h-75 ">Delete</button>
                                </div>
                            </Fade>

                        </div>
                        <Fade top>
                            <div className="form-row">
                                <div className="col-md-10">
                                    <div className="form-group">
                                        <label for="inputAddress">Phone Number</label>
                                        <input type="text" onChange={this.onChange} name="phone" value={this.state.phone}
                                            className="form-control" id="phone" placeholder="5555555555" />
                                    </div>
                                </div>
                                <div className="col-md-2 mt-3">
                                    <button type="button" onClick={this.addPhone} className="btn btn-primary w-100 h-75 ">Add</button>
                                </div>
                            </div>
                        </Fade>
                    </form>

                </div>




            </div>
        );
    }
}

const mapStateToProps = state => ({
    editUser: state.temp.editUser,
    editUserType: state.temp.editUserType
})


export default connect(mapStateToProps, { addContact, deleteContact, addPhone, deletePhone })(ContactInformation);