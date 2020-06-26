import React, { Component } from 'react';
import Menu from '../../../images/icons/menu.svg';
import Message from '../../../images/icons/message.svg';
import Calendar from '../../../images/icons/calendar.svg';
import Alert from '../../../images/icons/alert.svg';
import './header.css'
import MessageBoxModal from '../messaging/MessageBoxModal';
import CalendarBoxModal from '../calendar/CalendarBoxModal';
import WriteMessage from './../messaging/WriteMessage';
import ManageViewModal from './dropDownMenu/ManageViewModal';
import AccountModal from './dropDownMenu/AccountModal';
import GradeEntryModal from '../../utility-boxes/gradeEntry/GradeEntryModal';
import DefaultImage from '../../../images/default_user.png';
import Rotate from 'react-reveal/Fade';
import { TeacherBoxList, StudentBoxList, ParentBoxList, AdminBoxList } from '../../../data/BoxList';
import ViewDataModal from './../../utility-boxes/adminOnly/ViewDataModal';
import EditUser from '../../utility-boxes/adminOnly/addUser/EditUser';
import AddCourseModal from './../../utility-boxes/adminOnly/addCourse/AddCourseModal';
import AddUserModal from './../../utility-boxes/adminOnly/addUser/AddUserModal';
import AssignStudentModal from '../../utility-boxes/adminOnly/assignStudent/AssignStudentModal';
import CreateAssignmentModal from '../../teacher/CreateAssignmentModal';
import { useSelector, useDispatch } from 'react-redux'
import { getAllMessages, getAllUsers } from './../../../action/userActions';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import CourseRosterModal from '../../teacher/viewRoster/CourseRosterModal';
import ViewMessageModal from './../messaging/ViewMessageModal';
import NotificationView from '../../utility-boxes/notifications/NotificationView';


class Header extends Component {
    componentDidMount() {
        console.log(sessionStorage.getItem("userID"))
        this.props.getAllMessages(sessionStorage.getItem("userID"))
        this.props.getAllUsers()
    }

    defaultLayout(type) {
        switch (type) {
          case "STUDENT":
            return StudentBoxList.linkList;
            break;
          case "PARENT":
            return ParentBoxList.linkList;
            break;
          case "TEACHER":
            return TeacherBoxList.linkList;
            break;
          case "ADMIN":
            return AdminBoxList.linkList;
            break;
          default:
            break;
        }
    }

    render() {
        const currentUser = this.props.user.user //current user needs to be a user object 
        const picture = (currentUser.user && currentUser.user.picture) ? 
              <img src={currentUser.user.picture} width="30" height="30" className="rounded-circle" /> : 
              <img src={DefaultImage} width="30" height="30" className="rounded-circle" />;
        const firstName = currentUser.user && currentUser.user.firstName

        //Drop Down Menu Items
        const dropDownMenuItemTemp = localStorage.getItem(currentUser.email) ? 
            localStorage.getItem(currentUser.user.email).boxList : 
            this.defaultLayout(this.props.type);

        const dropDownMenuItems = dropDownMenuItemTemp && dropDownMenuItemTemp.map(link => {
            return <a className="dropdown-item" data-toggle="modal" data-target={link.link}>{link.name}</a>
        })
        const dropLeft = {
            right: "0",
            left: "auto",
            width: "200px",
        }

        const messageCount = this.props.messages && this.props.messages.length;

        return (
            <div className="header-top z-1035">
                <nav className="navbar navbar-light bg-light p-0 row position-sticky shadow">
                    <div className="col-md-2 bg-secondary w-100 text-center py-0">
                        <div className="row p-1">
                            {/* Image below needs to be customized to the user */}
                            <div className="col-sm-4 my-auto p-0">
                                {picture}
                            </div>
                            <div className="col p-0"><span className="navbar-brand mb-0 display-4 text-light mx-auto">{firstName}</span></div>
                        </div>
                    </div>
                    <div className="col-md-10 pr-5">

                        {/* Drop Down Menu */}
                        <div className="float-right postion-relative">
                            <a className="nav-link dropdown pl-3 p-0 m-0" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false"><img src={Menu} width="30" height="30" /></a>
                            <div className="position-relative">
                                <div style={dropLeft} className="dropdown-menu shadow">
                                    <a className="dropdown-item" data-toggle="modal" data-target="#account">Account</a>
                                    <a className="dropdown-item" data-toggle="modal" data-target="#manageView">Manage View</a>
                                    <div className="dropdown-divider"></div>
                                    {dropDownMenuItems}
                                    <div className="dropdown-divider"></div>
                                    <a className="dropdown-item" href="signOut">Sign Out</a>
                                </div>
                            </div>
                        </div>

                        {/* Messages */}
                        <div className="float-right">
                            <span className="position-absolute badge badge-danger">{messageCount > 0 ? messageCount : null}</span>
                            <a className="" data-toggle="modal" data-target="#message"><img className="px-3" src={Message}></img></a>
                        </div>

                        {/* Calendar */}
                        <div className="float-right">
                            <a className="" data-toggle="modal" data-target="#calendar"><img className="px-3" src={Calendar}></img></a>
                        </div>

                        {/* Alerts */}
                        {/* <div className="float-right">
                            {/* ------------------- Use opacity to display or not ------------------------ */}
                            {/* <a className=""><img style={{ opacity: 1 }} className="px-3" src={Alert}></img></a> */}
                        {/* </div> */} 

                    </div>

                </nav>
                <Rotate>
                    <MessageBoxModal />
                    <CalendarBoxModal />
                    <WriteMessage />
                    <ManageViewModal type={this.props.type}/> 
                    <AccountModal />
                    <NotificationView />
                    <ViewMessageModal />

                    {/* Teacher Modals */}
                    <GradeEntryModal />
                    <CourseRosterModal />
                    {/* Admin Modals */}

                    <AddUserModal/>

                    <EditUser />
                    
                    <AddCourseModal  />

                    <AssignStudentModal />

                    {/* <ViewDataModal 
                    user={currentUser} /> */}
                    
                    <CreateAssignmentModal />

                </Rotate>
            </div>
        );
    }
}



//maps parts of state to properties of component
const mapStateToProps = state => ({
    user: state.user,
    messages: state.user.messages
})


        
        


//action we need to call as well? - actions go into the brackets, mappings go into the first part
export default connect(mapStateToProps, { getAllMessages, getAllUsers })(Header);