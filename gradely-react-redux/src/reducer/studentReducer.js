
import { GET_ALL_STUDENTS, REMOVE_STUDENT, UPDATE_STUDENT, ADD_STUDENT } from '../action/types';
//Reducer is a switch statement with actions and defines those actions

//state is the initial state 
const initialState = {}

//Is it better to return the list from the API call and set state to that, or update state on my own
const studentReducer = (state = initialState, action) => {
    let tempStudentList = null;
    switch (action.type) {
        case GET_ALL_STUDENTS:
            return {
                ...state,
                students: action.payload
            };
        case REMOVE_STUDENT:
            return {
                ...state,
                students: state.students.filter((student) => student.id !== action.payload)
            };
        case UPDATE_STUDENT:
            tempStudentList = state.students && state.students.map(student => {
                
                if (student.id == action.payload.id) {
                    return action.payload
                } else {
                    return student
                }
            })
            return {
                ...state,
                students: tempStudentList
            };
        case ADD_STUDENT:
            tempStudentList = state.students
            tempStudentList.push(action.payload)
            return {
                ...state,
                students: tempStudentList
            };
        default:
            return state;
    }
} 

export default studentReducer;