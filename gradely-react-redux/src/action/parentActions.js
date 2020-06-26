import axios from 'axios'
import { GET_ALL_PARENTS, REMOVE_PARENT, ADD_PARENT, UPDATE_PARENT } from './types'



export const getAllParents =()=> dispatch => {
    axios.get("http://localhost:8080/parent/all")
    .then(response => {
        console.log("ALL STUDENTS")
        dispatch({
            type: GET_ALL_PARENTS,
            payload: response.data
        })
    })
}

export const removeParent =(id)=> dispatch => {
    axios.get("http://localhost:8080/parent/delete/" + id)
    .then(response => {
        dispatch({
            type: REMOVE_PARENT,
            payload: id
        })
    })
}

export const addParent =(user)=> dispatch => {
    axios.post("http://localhost:8080/parent/new/", user)
    .then(response => {
        dispatch({
            type: ADD_PARENT,
            payload: response.data
        })
    })
}

export const editParent =(parent)=> dispatch => {
    axios.post("http://localhost:8080/parent/update/details", parent)
    .then(response => {
        dispatch({
            type: UPDATE_PARENT,
            payload: parent
        })
    })
}