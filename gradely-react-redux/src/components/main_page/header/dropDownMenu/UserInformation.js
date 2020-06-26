import React, { Component } from 'react';
import DefaultImage from '../../../../images/default_user.png';
import { connect } from 'react-redux'

class UserInformation extends Component {
    render() {
        //Need to adapt the whole thing to use user.user

        let phoneList = []
        let addressList = []

        addressList = this.props.user && this.props.user.contactInformation && this.props.user.contactInformation.map(contact => {
            return <p key={contact.id}>{contact.address + " " + contact.city + " " + contact.state + ", " + contact.zipcode}</p>
        }) 
        
        phoneList = this.props.user && this.props.user.phone && this.props.user.phone.map(number => {
            return <p key={number} className="text-center">{"("+number.slice(0,3)+")-"+number.slice(3,6)+"-"+number.slice(6,10)}</p>
        })

        addressList = addressList && addressList.length != 0 ? addressList : <a className="text-center" href="#addressModal">Add an Address </a>;
        
        phoneList = phoneList && phoneList.length != 0 ? phoneList : <div className="text-center"><a href="#addressModal">Add a phone number</a></div>; 

        const picture = this.props.user && this.props.user.picture ? this.props.user.picture : DefaultImage;
        

  
        return (
            <div>
                <div className="row p-4">
                    <div className="col border border-left pt-4 pb-2">
                        <div className="row text-center pb-3">
                        <a href="#" className="mx-auto"><img src={picture} width="100" height="100" className="border rounded-circle mx-auto" /></a>
                        </div>
                        <div className="row">
                            <div className="col">
                                <h6 className="text-muted text-center">
                                    {this.props.user && this.props.user.firstName} {this.props.user && this.props.user.lastName}</h6>
                                <h6 className="text-center">Address</h6>
                                <a href="#" ><p className="text-muted text-center">{addressList}</p></a>
                                <h6 className="text-center">Email</h6>
                                <p className="text-muted text-center">{this.props.user && this.props.user.email}</p>
                                <h6 className="text-center">Phone Number</h6>
                                {phoneList}
                            </div>
                        </div>
                    </div>
                    {/* <div className="col-md-8">

                    </div> */}

                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    user: state.user.user.user
})

export default connect(mapStateToProps, {})(UserInformation);