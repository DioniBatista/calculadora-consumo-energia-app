import {combineReducers} from 'redux';
import updateReducer from './updateValueReducer';

export default combineReducers({
    clickState: updateReducer
});