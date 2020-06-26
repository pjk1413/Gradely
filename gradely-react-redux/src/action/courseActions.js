import axios from 'axios'
import { GET_ALL_COURSES, ADD_COURSE, GET_COURSE, GET_ALL_COURSES_NEW_ASSIGNMENT, HOLD_EDIT_COURSE, HOLD_REMOVE_ASSIGNMENT, HOLD_UPDATE_ASSIGNMENT, UPDATE_STUDENT_SCORE } from './types';
import { getAdminUser } from './adminActions';

export const getAllCourses =()=> dispatch => {
    axios.get("http://localhost:8080/course/all")
    .then(response => {
        dispatch({
            type: GET_ALL_COURSES,
            payload: response.data
        })
    })
}

export const getAllTeacherCourses =(id)=> dispatch => {
    console.log("GET TEACHER COURSES")
    axios.get("http://localhost:8080/course/scores/all/" + id)
    .then(response => {
        console.log(response.data)
        dispatch({
            type: GET_ALL_COURSES,
            payload: response.data
        })
    })
}

export const addCourse =(course)=> dispatch => {
    axios.post("http://localhost:8080/course/new", course)
    .then(response => {
        dispatch({
            type: GET_ALL_COURSES,
            payload: response.data
        })
    })
}

export const deleteCourse = (courseId) => dispatch => {
    axios.get("http://localhost:8080/course/delete/" + courseId)
    .then(response => {
        dispatch({
            type: GET_ALL_COURSES,
            payload: response.data
        })
    })
}

export const updateAssignment = (assignment) => dispatch => {
    axios.post("http://localhost:8080/course/assignment/update", assignment)
    .then(response => {
        dispatch({
            type: HOLD_UPDATE_ASSIGNMENT,
            payload: assignment
        })
    })
}

export const addAssignment = (assignment) => dispatch => {
    axios.post("http://localhost:8080/course/assignment/new/", assignment)
    .then(response => {
        dispatch({
            type: HOLD_EDIT_COURSE,
            payload: response.data
        })
    })
}

export const deleteAssignment = (assignmentId) => dispatch => {
    axios.get("http://localhost:8080/course/assignment/delete/" + assignmentId)
    .then(response => {
        dispatch({
            type: HOLD_REMOVE_ASSIGNMENT,
            payload: assignmentId
        })
    })
}

export const editCourseDetails = (course) => dispatch => {
    axios.post("http://localhost:8080/course/update", course)
    .then(response => {
        dispatch({
            type: GET_ALL_COURSES,
            payload: response.data
        })
    })
}

export const addStudentToCourse = (course) => dispatch => {
    console.log("COURSE ACTION")
    axios.post("http://localhost:8080/course/student/add/", course)
    .then(response => {
        console.log(response.data)
        dispatch({
            type: GET_COURSE,
            payload: response.data
        })
    })
}

export const saveNewStudentScore = (score) => dispatch => {
    axios.post("http://localhost:8080/student/new/score", score)
    .then(response => {
        dispatch({
            type: UPDATE_STUDENT_SCORE,
            payload: score
        })
    })
}

export const saveStudentScore = (score) => dispatch => {
    axios.post("http://localhost:8080/student/update/score", score)
    .then(response => {
        dispatch({
            type: UPDATE_STUDENT_SCORE,
            payload: score
        })
    })
}
