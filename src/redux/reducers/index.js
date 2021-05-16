import {combineReducers} from 'redux';
import rampsReducer from './rampsReducer';
import materialsReducer from './materialsReducer';

export default combineReducers({
    ramps: rampsReducer,
    materials: materialsReducer
})