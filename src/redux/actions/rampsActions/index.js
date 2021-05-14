import {SUCCESS_RAMPS, REQUEST_RAMPS, ERROR_RAMPS} from '../../actionTypes';
import {http} from '../../../utils/http';
const API_URL = 'http://localhost:3001';

const rampsRequest = () => {
    return {
        type: REQUEST_RAMPS
    }
}

const rampsSuccess = (rampsdata) => {
    return {
        type: SUCCESS_RAMPS,
        payload: rampsdata
    }
}

const rampsError = () => {
    return {
        type: ERROR_RAMPS
    }
}

const rampsAction = () => {
    return async (dispatch) => {
        try {
            dispatch(rampsRequest());
            const response = await http.get(`${API_URL}/ramps`);
            dispatch(rampsSuccess(response));

        }catch(error) {
            dispatch(rampsError())
        }
    }
}

export default rampsAction;