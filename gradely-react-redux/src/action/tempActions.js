import axios from 'axios'
import { HOLD_EDIT_USER, HOLD_EDIT_USER_TYPE, HOLD_EDIT_COURSE, HOLD_ADD_STUDENT, HOLD_REMOVE_STUDENT, 
    HOLD_EDIT_ASSIGNMENT, UPDATE_GRID, HOLD_UPDATE_ASSIGNMENT_SCORE, ADD_USER_TO_LIST, REMOVE_USER_FROM_LIST } from './types';
import { updateAssignment } from './courseActions';

export const holdTempCourse = (course) => {
    return {
        type: HOLD_EDIT_COURSE,
        payload: course
    }
}

export const holdTempAssignment = (assignment) => {
    return {
        type: HOLD_EDIT_ASSIGNMENT,
        payload: assignment
    }
}

export const holdTempUser = (user) => {
    return {
        type: HOLD_EDIT_USER,
        payload: user
    }
}

export const holdTempUserType = (type) => {
    return {
        type: HOLD_EDIT_USER_TYPE,
        payload: type
    }
}

export const clearEditCourse = () => {
    return {
        type: HOLD_EDIT_COURSE,
        payload: null
    }
}

export const removeStudentFromCourse = (student) => {
    return {
        type: HOLD_REMOVE_STUDENT,
        payload: student      
}}

export const addStudentToCourse = (student) => {
    return {
        type: HOLD_ADD_STUDENT,
        payload: student
    }
}

export const gridHandleChange = (data) => {
    return {
        type: UPDATE_GRID,
        payload: data
    }
}

//CHECK HERE IF ERROR IN TEMP ASSIGNMENT
export const updateTempAssignment = (assignment) => {
    return {
        HOLD_UPDATE_ASSIGNMENT_SCORE,
        payload: assignment
    }
}

export const removeUserFromList = (id) => {
    return {
        type: REMOVE_USER_FROM_LIST,
        payload: id
    }
}

export const addUserToList = (user) => {
    return {
        type: ADD_USER_TO_LIST,
        payload: user
    }
}