import {combineReducers} from 'redux';
import rampsReducer from './rampsReducer';

export default combineReducers({
    ramps: rampsReducer
})