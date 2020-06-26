import NotificationBox from "../components/utility-boxes/notifications/NotificationBox"
import React from 'react'
import GradeEntryBox from "../components/utility-boxes/gradeEntry/GradeEntryBox"
import ToDoItem from "../components/utility-boxes/toDo/ToDoItem"
import ToDoListBox from "../components/utility-boxes/toDo/ToDoListBox"
import AddStudentModal from "../components/utility-boxes/adminOnly/addUser/AddUserModal"
import SideBarItem from "../layout/SideBarItem"
import GradeBox from './../components/utility-boxes/grades/GradeBox';
import DataOverviewBox from './../components/utility-boxes/dataOverview/DataOverviewBox';

export const TeacherBoxList = {
    sideBarList: [
        {
            name: "Add/Remove User",
            link: "",
            modal: "#addStudentModal",
            display: (props)=> <SideBarItem name={props.name} link={props.link} modal={props.modal}/> 
        },
        {
            name: "Automation",
            link: "",
            modal: "#addStudentModal",
            display: (props)=> <SideBarItem name={props.name} link={props.link} modal={props.modal}/> 
        },
        {
            name: "Analyze Data",
            link: "",
            modal: "#addStudentModal",
            display: (props)=> <SideBarItem name={props.name} link={props.link} modal={props.modal}/> 
        },
        {
            name: "Create Reports",
            link: "",
            modal: "#addStudentModal",
            display: (props)=> <SideBarItem name={props.name} link={props.link} modal={props.modal}/> 
        }
    ],
    boxList: [
        {
            name: "Notifications",
            description: "Shows a scrolling list of cards with various notifications on them",
            show: true,
            display: (props)=> <NotificationBox user={props}/> 
        },
        {
            name: "To Do List",
            description: "Provides a simple to do list for the user to keep track of what is to be done",
            show: true,
            display: (props)=> <ToDoListBox user={props}/> 
        }
    ],

    linkList: [
        {
            name: "Add/Edit Assignments",
            show: true,
            link: "#createAssignmentModal"
        },
        {
            name: "Edit/View Grades",
            show: true,
            link: "#gradeEntryModal"
        },
        {
            name: "View Student Data",
            show: true,
            link: "#studentRosterModal"
        }


    ]
} 

export const StudentBoxList = {
    boxList: [
        {
            name: "Notifications",
            description: "Shows a scrolling list of cards with various notifications on them",
            show: true,
            display: (props)=> <NotificationBox user={props}/> 
        },
        {
            name: "To Do List",
            description: "Provides a simple to do list for the user to keep track of what is to be done",
            show: true,
            display: (props)=> <ToDoListBox user={props}/> 
        },
        {
            name: "Grade Preview",
            description: "Allows user to view their grades quickly upon login",
            show: true,
            display: (props)=> <GradeBox user={props}/> 
        }
    ],
    linkList: [
        {
            name: "View Grades",
            show: true,
            link: "#studentGradeModal"
        }
    ]
} 

export const ParentBoxList = {
    boxList: [
        {
            
        }
    ]
} 

export const AdminBoxList = {
    sideBarList: [
        {
            name: "Add/Remove User",
            link: "",
            modal: "#addStudentModal",
            display: (props)=> <SideBarItem name={props.name} link={props.link} modal={props.modal}/> 
        },
        {
            name: "Add/Remove Course",
            link: "",
            modal: "#addStudentModal",
            display: (props)=> <SideBarItem name={props.name} link={props.link} modal={props.modal}/> 
        },
        {
            name: "Analyze Data",
            link: "",
            modal: "#addStudentModal",
            display: (props)=> <SideBarItem name={props.name} link={props.link} modal={props.modal}/> 
        },
        {
            name: "Create Reports",
            link: "",
            modal: "#addStudentModal",
            display: (props)=> <SideBarItem name={props.name} link={props.link} modal={props.modal}/> 
        }
    ],
    boxList: [
        {
            name: "Notifications",
            description: "Shows a scrolling list of cards with various notifications on them",
            show: true,
            display: (props)=> <NotificationBox user={props}/> 
        },
        // {
        //     name: "Data Overview",
        //     description: "Gives a general overview of major data points for administrators",
        //     show: true,
        //     display: (props)=> <DataOverviewBox user={props}/> 
        // }, 
        {
            name: "To Do List",
            description: "Provides a simple to do list for the user to keep track of what is to be done",
            show: true,
            display: (props)=> <ToDoListBox user={props}/> 
        }
    ],

    linkList: [
        {
            name: "Add/Remove User",
            show: true,
            link: "#addStudentModal"
        },
        {
            name: "Add/Remove Course",
            show: true,
            link: "#addCourseModal"
        },
        {
            name: "Student Assignment",
            show: true,
            link: "#assignStudentModal"
        }


    ]
} 