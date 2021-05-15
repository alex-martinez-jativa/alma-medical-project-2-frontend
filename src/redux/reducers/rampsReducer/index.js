import {REQUEST_RAMPS, SUCCESS_RAMPS, ERROR_RAMPS, FILTER_BY_MATERIAL, GET_MATERIALS } from '../../actionTypes';

const initialState = {
    ramps: [],
    materials: [],
    loading: false,
    error: false
}

const rampsReducer = (state = initialState, action) => {
    switch(action.type) {
        case REQUEST_RAMPS:
            return {
                ...state,
                loading: true,
            }
        case SUCCESS_RAMPS:
        case FILTER_BY_MATERIAL:
            return {
                ...state,
                ramps: action.payload,
                loading: false,
            }
        case ERROR_RAMPS:
            return {
                ...state,
                error: true,
                loading: false
            }
        case GET_MATERIALS:
            return {
                ...state,
                materials: action.payload,
                loading: false,
            }
        default:
            return state;
    }
}

export default rampsReducer;