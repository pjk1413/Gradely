import React, { Component } from 'react';
import NotificationBox from './../components/utility-boxes/notifications/NotificationBox';
import ToDoListBox from './../components/utility-boxes/toDo/ToDoListBox';
import AddItem from './../components/utility-boxes/toDo/AddItem';
import GradeEntryBox from './../components/utility-boxes/gradeEntry/GradeEntryBox';
import DataOverviewBox from './../components/utility-boxes/dataOverview/DataOverviewBox';
import { TeacherBoxList, StudentBoxList, ParentBoxList, AdminBoxList } from '../data/BoxList';
import Bounce from 'react-reveal/Bounce'
import FadeIn from 'react-fade-in';
import SideBarItem from './SideBarItem';
import NewsHeadLineBox from './feedBoxItems/NewsHeadLineBox';
import { connect } from 'react-redux'

class UserHomeLayout extends Component {

    defaultBox(type) {
        switch (type) {
            case "STUDENT":
                return StudentBoxList;
                break;
            case "PARENT":
                return ParentBoxList;
                break;
            case "TEACHER":
                return TeacherBoxList;
                break;
            case "ADMIN":
                return AdminBoxList;
                break;
            default:
                break;
        }
    }


    render() {
        
        const currentUser = sessionStorage.getItem("user");

        let tempFeedBox = []
        const userFeedBox = []


        let tempBoxList = localStorage.getItem(currentUser) ? localStorage.getItem(currentUser).boxList : this.defaultBox(this.props.type).boxList;

        let tempSideBarList = localStorage.getItem(currentUser) ? localStorage.getItem(currentUser).boxList : this.defaultBox(this.props.type).sideBarList;

        const userSideBarList = tempSideBarList && tempSideBarList.map(sideItem => {
            const details = {
                name: sideItem.name,
                link: sideItem.link,
                modal: sideItem.modal
            }
            return sideItem.display(details)
        })

        const userComponentList = tempBoxList && tempBoxList.map(box => {
            return box.display(this.props.user)
        }
        )


        const userNavList = []

        return (
            <div>
                {/*
                Contains a side bar and spots for all additional components
                */}


                <div className="row">
                    <div className="col-md-2 bg-light border-right pr-0 vh-100">
                        <div class="sidebar-sticky pt-3">
                            <FadeIn>
                                {/* <ul class="nav flex-column">
                                    {userSideBarList}
                                    
                                </ul> */}

                                <h6 class="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
                                    <span className="text-dark mx-auto">{this.props.user.user.user && this.props.user.user.user.firstName}'s Feed</span>
                                    <a data-toggle="modal" data-target="#userFeedModal" class="d-flex align-items-center text-dark" href="#" aria-label="Add a new report">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-plus-circle"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="16"></line><line x1="8" y1="12" x2="16" y2="12"></line></svg>
                                    </a>
                                </h6>
                                <ul class="nav flex-column mb-2">
                                    {/* Feed box for either current events or college previews */}
                                    <NewsHeadLineBox />
                                    {/* {userFeedBox} */}
                                </ul>
                            </FadeIn>
                        </div>

                    </div>
                    <Bounce top>
                        <div
                            style={{ overflow: 'inherit' }} className="col-md-10 vh-100">
                            {userComponentList}
                        </div>
                    </Bounce>
                </div>


                <AddItem add={this.addItem} />
            </div>
        );
    }
}


{/* 
    Use for a link to teachers pay teachers or something like that
    <li class="nav-item">
<a class="nav-link text-dark" href="#">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-shopping-cart"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
Products
</a>
</li> */}
const mapStateToProps = state => ({
    user: state.user
})

export default connect(mapStateToProps, {})(UserHomeLayout);