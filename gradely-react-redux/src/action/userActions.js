import { GET_USER, UPDATE_USER, UPDATE_MESSAGES, GET_ALL_USERS, SEND_MESSAGE, 
    ADD_CALENDAR_ITEM, REMOVE_CALENDAR_ITEM, ADD_TODO_ITEM, 
    REMOVE_TODO_ITEM, UPDATE_TODO_ITEM } from './types'
import axios from 'axios'
import { bindActionCreators } from 'redux'

//dispatch is part of thunk, it sends the data off to the reducer
export const getAdminUser = (id) => dispatch => {
    axios.get("http://localhost:8080/admin/find/" + id)
        .then(response => {
            dispatch({
                type: GET_USER,
                payload: response.data
            })
        })
}

export const getStudentUser = (id) => dispatch => {
    axios.get("http://localhost:8080/student/find/" + id)
    .then(response => {
        dispatch({
            type: GET_USER,
            payload: response.data
        })
    })
}

export const getTeacherUser = (id) => dispatch => {
    axios.get("http://localhost:8080/teacher/find/" + id)
        .then(response => {
            dispatch({
                type: GET_USER,
                payload: response.data
            })
        })
}

export const removeUserFromMessage = (userId, messageId) => dispatch => {
    axios.get(`http://localhost:8080/message/remove/${userId}/from/${messageId}/`)
    .then(response => ({
        type: UPDATE_MESSAGES,
        payload: response.data
    }))
}

export const sendMessage = (message) => dispatch => {
    axios.post("http://localhost:8080/message/send", message)
    .then(response => ({
        type: SEND_MESSAGE
    })
    )}

export const getAllMessages = (id) => dispatch => {
    axios.get("http://localhost:8080/message/get/" + id)
    .then(response => {
        dispatch({
            type: UPDATE_MESSAGES,
            payload: response.data
        })
    })
}

//CRUD FOR USER DETAILS
export const editUserDetails = (user) => dispatch => {
    axios.post("http://localhost:8080/user/update/details", user)
        .then(response => {
            dispatch({
                type: UPDATE_USER,
                payload: response.data
            })
        })
}

export const addContact = (user) => dispatch => {
    axios.post("http://localhost:8080/user/add/contact", user)
        .then(response => {
            dispatch({
                type: UPDATE_USER,
                payload: response.data
            })
        })
}

export const deleteContact = (contactId, userId) => dispatch => {
    axios.post(`http://localhost:8080/user/delete/contact/?contactId=${contactId}&userId=${userId}`)
        .then(response => {
            dispatch({
                type: UPDATE_USER,
                payload: response.data
            })
        })
}

export const deletePhone = (number, id) => dispatch => {
    axios.post(`http://localhost:8080/user/delete/phone/?phone=${number}&userId=${id}`)
        .then(response => {
            dispatch({
                type: UPDATE_USER,
                payload: response.data
            })
        })
}

export const addPhone = (number, id) => dispatch => {
    axios.post(`http://localhost:8080/user/add/phone/?phone=${number}&userId=${id}`)
        .then(response => {
            dispatch({
                type: UPDATE_USER,
                payload: response.data
            })

        })
}

export const getAllUsers = () => dispatch => {
    axios.get("http://localhost:8080/user/all")
    .then(response => {
        dispatch({
            type: GET_ALL_USERS,
            payload: response.data
        })
    })
}

export const removeCalendarItem = (calendarId) => dispatch => {
    axios.get("http://localhost:8080/user/removeCalendarItem/" + calendarId)
    .then(response => {
        dispatch({
            type: REMOVE_CALENDAR_ITEM,
            payload: calendarId
        })
    })
}

export const addCalendarItem = (calendar, id) => dispatch => {
    axios.post(`http://localhost:8080/user/addCalendarItem/?userId=${id}`, calendar)
    .then(response => {
        dispatch({
            type: ADD_CALENDAR_ITEM,
            payload: calendar
        })
    })
}

export const addToDoItem = (item) => dispatch => {
    axios.post("http://localhost:8080/user/addToDoItem/", item)
    .then(response => {
        dispatch({
            type: ADD_TODO_ITEM,
            payload: response.data
        })
    })
}

export const removeToDoItem = (id) => dispatch => {
    axios.get("http://localhost:8080/user/removeToDoItem/" + id)
    .then(response => {
        dispatch({
            type: REMOVE_TODO_ITEM,
            payload: id
        })
    })
}

export const updateToDoItem = (id) => dispatch => {
    axios.get("http://localhost:8080/user/updateToDoItem/" + id)
    .then(response => {
        dispatch({
            type: UPDATE_TODO_ITEM,
            payload: response.data
        })
    })
}


