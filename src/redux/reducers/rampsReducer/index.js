import {REQUEST_RAMPS, SUCCESST_RAMPS, ERROR_RAMPS} from '../../actionTypes';

const initialState = {
    ramps: [],
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
        case SUCCESST_RAMPS:
            return {
                ...state,
                ramps: action.payload
            }
        case ERROR_RAMPS:
            return {
                ...state,
                error: true
            }
        default:
            return state;
    }
}

export default rampsReducer;