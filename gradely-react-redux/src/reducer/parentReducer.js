import { axios } from 'axios';
import { GET_ALL_PARENTS, REMOVE_PARENT, ADD_PARENT, UPDATE_PARENT } from '../action/types';
//Reducer is a switch statement with actions and defines those actions

const initialState = {}

//Is it better to return the list from the API call and set state to that, or update state on my own
const parentReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_PARENTS:
            return {
                ...state,
                parents: action.payload
            };
        case REMOVE_PARENT:
            return {
                ...state,
                parents: state.parents.filter((parent)=> parent.id !== action.payload)
            };
        case UPDATE_PARENT:
            return null;
        case ADD_PARENT:
            let tempParentList = state.parents
            tempParentList.push(action.payload)
            return {
                ...state,
                parents: tempParentList
            };
        default:
            return state;
    }
} 

export default parentReducer;