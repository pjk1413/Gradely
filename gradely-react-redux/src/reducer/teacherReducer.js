import { axios } from 'axios';
import { GET_ALL_TEACHERS, REMOVE_TEACHER, ADD_TEACHER, UPDATE_TEACHER } from '../action/types';
//Reducer is a switch statement with actions and defines those actions

const initialState = {}

//Is it better to return the list from the API call and set state to that, or update state on my own
const teacherReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_TEACHERS:
            return {
                ...state,
                teachers: action.payload
            };
        case REMOVE_TEACHER:
            return {
                ...state,
                teachers: state.teachers.filter((teacher) => teacher.id !== action.payload)
            };
        case UPDATE_TEACHER:
            return null;
        case ADD_TEACHER:
            let tempTeacherList = state.teachers
            tempTeacherList.push(action.payload)
            return {
                ...state,
                teachers: tempTeacherList
            };
        default:
            return state;
    }
} 

export default teacherReducer;
