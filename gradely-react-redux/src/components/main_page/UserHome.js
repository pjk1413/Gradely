import React, { Component } from 'react';
import SideBarLink from './sideBar/SideBarLink';


class AdminLayout extends Component {
    render() {
        return (
            <div>
                {/*
                Contains a side bar and spots for all additional components
                */}

                <div className="row"></div>
                <div className="row">

                    {/*Transform bottom two columns to accomdate varying lists of components and links */}
                    <div className="col-md-2 bg-light vh-100">
                        <div class="sidebar-sticky pt-3">

                            <ul class="nav flex-column">
                            <SideBarLink title="Title Link" link={"Link goes here"}/>                                
                            </ul>

                            {/*Not sure if we will need this middle break point in our list or not */}
                            <h6 class="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
                                <span className="text-light">Saved reports</span>
                                <a class="d-flex align-items-center text-light" href="#" aria-label="Add a new report">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-plus-circle"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="16"></line><line x1="8" y1="12" x2="16" y2="12"></line></svg>
                                </a>
                            </h6>

                            <ul class="nav flex-column mb-2">
                                <SideBarLink title="Title Link" link={"Link goes here"}/>
                            </ul>

                        </div>
                    </div>

                    <div className="col-md-10 vh-100">
                        {/* This will contain a series of components as defined by the users profile */}

                    </div>
                </div>


            </div>
        );
    }
}

export default AdminLayout;