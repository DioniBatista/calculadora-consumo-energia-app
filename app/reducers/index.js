import {combineReducers} from 'redux';
import updateReducer from './updateValueReducer';
import sessionReducer from "./sessionReducer";

export default combineReducers({
    clickState: updateReducer,
    sessionState: sessionReducer
});