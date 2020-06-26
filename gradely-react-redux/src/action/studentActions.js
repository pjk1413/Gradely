
import { GET_ALL_STUDENTS, REMOVE_STUDENT, ADD_STUDENT, GET_ALL_COURSES } from './types';
import axios from 'axios'


//Done
export const addStudent =(user)=> dispatch => {
    axios.post("http://localhost:8080/student/new/", user)
    .then(response => {
        dispatch({
            type: ADD_STUDENT,
            payload: response.data
        })
    })
}

//Done
export const getAllStudents =()=> dispatch => {
    axios.get("http://localhost:8080/student/all")
    .then(response => {
        dispatch({
            type: GET_ALL_STUDENTS,
            payload: response.data
        })
    })
}

//Done
export const removeStudent =(id)=> dispatch => {
    console.log(id)
    axios.get("http://localhost:8080/student/delete/" + id)
    .then(response => {
        dispatch({
            type: REMOVE_STUDENT,
            payload: id
        })
    })
}

export const getStudentCourses = (id) => dispatch => {
    console.log("STUDENT COURSE")
    axios.get("http://localhost:8080/course/studentCourses/" + id)
    .then(response => {
        console.log(response.data)
        dispatch({
            type: GET_ALL_COURSES,
            payload: response.data
        })
    })
}

//Done
// export const editStudent =(student)=> dispatch => {
//     axios.post("http://localhost:8080/student/update/details", student)
//     .then(response => {
//         dispatch({
//             type: UPDATE_STUDENT,
//             payload: response.data
//         })
//     })
// }


// export const addContactStudent = (student) => dispatch => {
//     axios.post("http://localhost:8080/student/add/contact", student)
//     .then(response => {
//         dispatch({
//             type: UPDATE_STUDENT,
//             payload: response.data
//         })
        
//     })
// }

// export const deleteContactStudent = (contactId, userId) => dispatch => {
//     axios.post(`http://localhost:8080/student/delete/contact?contactId=${contactId}&userId=${userId}`, )
//     .then(response => {
//         dispatch({
//             type: DELETE_CONTACT_STUDENT,
//             payload: contactId
//         })
        
//     })
// }

// export const deletePhoneStudent = (number, id) => dispatch => {
//     axios.post(`http://localhost:8080/student/delete/phone?number=${number}&id=${id}`)
//     .then(response => {
//         dispatch({
//             type: DELETE_PHONE_STUDENT,
//             payload: number
//         })
        
//     })
// }

// export const addPhoneStudent = (number) => dispatch => {
//     axios.post("http://localhost:8080/student/add/contact", number)
//     .then(response => {
//         dispatch({
//             type: UPDATE_STUDENT,
//             payload: response.data
//         })
        
//     })
// }

    