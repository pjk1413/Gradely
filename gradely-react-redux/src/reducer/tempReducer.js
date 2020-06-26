import { axios } from 'axios';
import { HOLD_EDIT_USER, UPDATE_STUDENT, UPDATE_USER, HOLD_EDIT_COURSE, HOLD_ADD_STUDENT, HOLD_REMOVE_STUDENT, 
    HOLD_REMOVE_ASSIGNMENT, HOLD_UPDATE_ASSIGNMENT_SCORE, UPDATE_STUDENT_SCORE, ADD_USER_TO_LIST, REMOVE_USER_FROM_LIST, SEND_MESSAGE } from '../action/types';
import { HOLD_EDIT_USER_TYPE, HOLD_EDIT_ASSIGNMENT, HOLD_UPDATE_ASSIGNMENT,UPDATE_GRID } from './../action/types';
//Reducer is a switch statement with actions and defines those actions

const initialState = {
    studentList: [],
    data: [],
    mailList: []
}

//Is it better to return the list from the API call and set state to that, or update state on my own
const tempReducer = (state = initialState, action) => {
    switch (action.type) {
        case HOLD_UPDATE_ASSIGNMENT_SCORE:
            //payload is a new studentScore, needs to be added into the student and the assignment

            return {
                ...state
            }
        case UPDATE_GRID:
            return {
                ...state,
                data: action.payload
            }
        case UPDATE_USER: 
            let newTemp = {
                ...state.editUser
            }
            newTemp.user = action.payload
            return {
                ...state,
                editUser: newTemp
            }
        case UPDATE_STUDENT:
            return {
                ...state,
                editUser: action.payload
            }
        case HOLD_EDIT_USER:
            return {
                ...state,
                editUser: action.payload
            };
        case HOLD_EDIT_USER_TYPE:
            return {
                ...state,
                editUserType: action.payload
            }
        case HOLD_EDIT_ASSIGNMENT:
            const tempAssignment = Object.assign({}, action.payload)
            return {
                ...state,
                editAssignment: tempAssignment
            }
        case HOLD_EDIT_COURSE:
            const tempCourse = Object.assign({}, action.payload)
            return {
                ...state,
                editCourse: tempCourse
              }
        case HOLD_REMOVE_ASSIGNMENT:
            let courseRemoveAssignment = {
                ...state.editCourse
            }

            const courseAssignment = courseRemoveAssignment.assignments && courseRemoveAssignment.assignments.filter(
                function checkId(assignment) {
                    return assignment.id !== action.payload
                }
            )
            courseRemoveAssignment.assignments = courseAssignment

            return {
                ...state,
                editCourse: courseRemoveAssignment
            }

        case HOLD_UPDATE_ASSIGNMENT:
            let courseUpdateAssignment = {
                ...state.editCourse
            }

            const courseTempAssignment = courseUpdateAssignment.assignments && courseUpdateAssignment.assignments.map(
                function checkId(assignment) {
                    if(assignment.id === action.payload.id) {
                        return action.payload
                    } else {
                        return assignment
                    }
                }
            )
            courseUpdateAssignment.assignments = courseTempAssignment

            return {
                ...state,
                editCourse: courseUpdateAssignment
            }

        case HOLD_REMOVE_STUDENT:
            let courseRemoveStudent = {
                ...state.editCourse
            }
            
            const course = courseRemoveStudent.students && courseRemoveStudent.students.filter(
                function checkId(student) {
                    //console.log(student.id)
                    //console.log(action.payload)
                    return student.id !== action.payload
                }
            )
            courseRemoveStudent.students = course

            return {
                ...state,
                editCourse: courseRemoveStudent
            }
        case HOLD_ADD_STUDENT:
            let courseAddStudent = {
                ...state.editCourse
            }
            courseAddStudent.students.push(action.payload)
            return {
                ...state,
                editCourse: courseAddStudent
            }
        case UPDATE_STUDENT_SCORE:
            return {
                ...state
            }
        case REMOVE_USER_FROM_LIST:
            let tempRemoveMailList = state.mailList

            tempRemoveMailList = tempRemoveMailList.filter(
                function checkId(user) {
                    return user.id !== action.payload
                }
            )

            return {
                ...state,
                mailList: tempRemoveMailList
            }
        case ADD_USER_TO_LIST:
            let tempAddMailList = [...state.mailList]
            
            tempAddMailList.push(action.payload)
            const newList = tempAddMailList
            return {
                ...state,
                mailList: newList
            }
        case SEND_MESSAGE:
            return {
                ...state
            }
        default:
            return state;
    }
} 

export default tempReducer;
