import axios from 'axios'
import { GET_ALL_TEACHERS, REMOVE_TEACHER, UPDATE_TEACHER, ADD_TEACHER, GET_USER } from './types'


export const addTeacher =(user)=> dispatch => {
    axios.post("http://localhost:8080/teacher/new/", user)
    .then(response => {
        dispatch({
            type: ADD_TEACHER,
            payload: response.data
        })
    })
}

export const getAllTeachers =()=> dispatch => {
    console.log("GET TEACHERS")
    axios.get("http://localhost:8080/teacher/all")
    .then(response => {
        console.log(response.data)
        dispatch({
            type: GET_ALL_TEACHERS,
            payload: response.data
        })
    })
}

export const removeTeacher =(id)=> dispatch => {
    console.log(id)
    axios.get("http://localhost:8080/teacher/delete/" + id)
    .then(response => {
        console.log("Teacher Removed From Database")
        dispatch({
            type: REMOVE_TEACHER,
            payload: id
        })
    })
}

export const editTeacher =(teacher)=> dispatch => {
    axios.post("http://localhost:8080/teacher/update/details", teacher)
    .then(response => {
        dispatch({
            type: UPDATE_TEACHER,
            payload: teacher
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