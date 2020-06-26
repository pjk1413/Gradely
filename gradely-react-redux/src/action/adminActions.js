import axios from 'axios'
import { ADD_ADMIN, GET_USER, UPDATE_ADMIN } from './types';

export const getAdminUser = (id) => dispatch => {
    axios.get("http://localhost:8080/admin/find/" + id)
        .then(response => {
            dispatch({
                type: GET_USER,
                payload: response.data
            })
        })
}

export const addAdmin =(user)=> dispatch => {
    axios.post("http://localhost:8080/admin/new/", user)
    .then(response => {
        dispatch({
            type: ADD_ADMIN,
            payload: user
        })
    })
}

export const editAdmin =(admin)=> dispatch => {
    axios.post("http://localhost:8080/admin/update/details", admin)
    .then(response => {
        dispatch({
            type: UPDATE_ADMIN,
            payload: admin
        })
    })
}