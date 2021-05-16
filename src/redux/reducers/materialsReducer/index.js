import {REQUEST_MATERIALS, SUCCESS_MATERIALS, ERROR_MATERIALS } from '../../actionTypes';

const initialState = {
    materials: [],
    loading: false,
    error: false
}

const rampsReducer = (state = initialState, action) => {
    switch(action.type) {
        case REQUEST_MATERIALS:
            return {
                ...state,
                loading: true,
            }
        case SUCCESS_MATERIALS:
            return {
                ...state,
                materials: action.payload,
                loading: false,
            }
        case ERROR_MATERIALS:
            return {
                ...state,
                error: true,
                loading: false
            }
        default:
            return state;
    }
}

export default rampsReducer;