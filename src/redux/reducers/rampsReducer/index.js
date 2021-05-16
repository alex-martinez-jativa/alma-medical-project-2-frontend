import {REQUEST_RAMPS, SUCCESS_RAMPS, ERROR_RAMPS, FILTER_BY_MATERIAL, COUNT_RAMPS } from '../../actionTypes';

const initialState = {
    ramps: [],
    loading: false,
    error: false,
    count: 0
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
        case COUNT_RAMPS:
            return {
                ...state,
                count: action.payload
            }
        default:
            return state;
    }
}

export default rampsReducer;