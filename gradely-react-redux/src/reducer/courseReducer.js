
import { GET_ALL_COURSES, GET_COURSE, GET_ALL_COURSES_NEW_ASSIGNMENT } from './../action/types';

const initialState = {}

//Is it better to return the list from the API call and set state to that, or update state on my own
const courseReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_COURSES:
            return {
                ...state,
                courses: action.payload
            }
        case GET_ALL_COURSES_NEW_ASSIGNMENT:
            return {
                ...state,
                courses: action.payload
            }
        case GET_COURSE:
            let tempCourseList = [...state.courses]
            tempCourseList = tempCourseList && tempCourseList.map(course => {
                return course.id == action.payload.id ? action.payload : course
            })

            return {
                ...state,
                courses: tempCourseList
            }
        default:
            return state;
    }
}

export default courseReducer;