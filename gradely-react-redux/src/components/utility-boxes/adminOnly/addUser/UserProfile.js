import React, { Component } from 'react';
import DefaultImage from './../../../../images/default_user.png';
import UserPicture from './../../../../images/default_user.png'
import { connect } from 'react-redux';

class UserProfile extends Component {

    componentWillReceiveProps() {

    }

    render() {
        const currentUser = this.props.editUser && this.props.editUser.user
        const picture = (currentUser && currentUser.user && currentUser.user.picture) ? 
              currentUser.user.picture : UserPicture;
        const firstName = currentUser && currentUser.firstName;
        const lastName = currentUser && currentUser.lastName;

        const cInfo = this.props.editUser && this.props.editUser.user && this.props.editUser.user.contactInformation
        const pNum = this.props.editUser && this.props.editUser.user && this.props.editUser.user.phone
        
        const phoneList = pNum && pNum.map(number => {
            return <p className="text-center" key={number}>({number.substr(0,3)}) {number.substr(3,3)}-{number.substr(6,4)} </p>
        })


        const addressList = cInfo && cInfo.map(item => {
            return <p className="text-center" key={item.id}>{item.address} {item.city}, {item.state} {item.zipcode}</p>
        })

        return (
            <div className="card" >
                <img src={picture} className="card-img-top"/>
                <div className="card-body">
                    <h5 className="card-title text-center">{firstName}<br/>{lastName} </h5>

                    <h6 className="text-center">Address</h6>
                    {addressList && addressList.length > 0 ? addressList : <p className="text-center">No Address Listed</p>}
                    <hr />
                    <h6>Phone Numbers</h6>
                    {phoneList && phoneList.length > 0 ? phoneList : <p className="text-center">No Phone Number Listed</p>}
            </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    editUser: state.temp.editUser,
    editUserType: state.temp.editUserType
})

export default connect(mapStateToProps, {})(UserProfile);