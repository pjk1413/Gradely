import { combineReducers } from 'redux';
import studentReducer from './studentReducer';
import userReducer from './userReducer';
import teacherReducer from './teacherReducer';
import parentReducer from './parentReducer';
import tempReducer from './tempReducer'
import courseReducer from './courseReducer';

//List of all reducers go in here
const allReducers = combineReducers({
    students: studentReducer,
    user: userReducer,
    parents: parentReducer,
    teachers: teacherReducer,
    temp: tempReducer,
    courses: courseReducer
})

export default allReducers;