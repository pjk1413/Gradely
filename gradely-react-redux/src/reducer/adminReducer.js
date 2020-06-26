import { axios } from 'axios';
import { GET_ALL_STUDENTS } from '../action/types';
//Reducer is a switch statement with actions and defines those actions

//state is the initial state 
const initialState = {}

//Is it better to return the list from the API call and set state to that, or update state on my own
const adminReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD':
            return state;
        case 'REMOVE':
            return null;
        case 'UPDATE':
            return null;
        case "ALL":
            return state;
        default:
            break;
    }
} 

export default adminReducer;