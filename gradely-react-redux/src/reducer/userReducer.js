import { GET_USER, HOLD_EDIT_USER, UPDATE_USER, UPDATE_MESSAGES } from '../action/types'
import { GET_ALL_USERS, ADD_CALENDAR_ITEM, REMOVE_CALENDAR_ITEM, 
    ADD_TODO_ITEM, REMOVE_TODO_ITEM, UPDATE_TODO_ITEM } from './../action/types';
import { bindActionCreators } from 'redux';

const initialState = {
    user: {}
}

export default function(state = initialState, action) {
    switch (action.type) {
        case REMOVE_CALENDAR_ITEM:
            let otherTempUser = { ...state.user }

            const index = otherTempUser.user.calendarList.filter(
                function(item) {
                    return item.id != action.payload
                })
            otherTempUser.user.calendarList = index

            return {
                ...state,
                user: otherTempUser
            }
        case ADD_CALENDAR_ITEM:
            let tempUser = { ...state.user }

            tempUser.user.calendarList.push(action.payload)

            return {
                ...state,
                user: tempUser
            }
        case GET_USER:
            return {
                ...state,
                user: action.payload
            }
        case UPDATE_MESSAGES:
            return {
                ...state,
                messages: action.payload
            };
        case GET_ALL_USERS:
            return {
                ...state,
                users: action.payload
            }
        case UPDATE_TODO_ITEM:
            let updateToDoUser = { ...state.user }
            const newUserUpdate = updateToDoUser.user.toDoList.map(item => {
                if (item.id === action.payload.id) {
                    return action.payload
                } else {
                    return item
                }
            })

            return {
                ...state,
                user: newUserUpdate
            }
        case ADD_TODO_ITEM:
            let tempToDoUser = { ...state.user }
            tempToDoUser.user.toDoList.push(action.payload)

            return {
                ...state,
                user: tempToDoUser
            }
        case REMOVE_TODO_ITEM:
            let removeToDoUser = { ...state.user }

            const removeIndex = removeToDoUser.user.toDoList.filter(
                function(item) {
                    return item.id != action.payload
                })
            removeToDoUser.user.toDoList = removeIndex

            return {
                ...state,
                user: removeToDoUser
            }
        default:
            return state;
    }
}

