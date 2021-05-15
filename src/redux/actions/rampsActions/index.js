import {SUCCESS_RAMPS, REQUEST_RAMPS, ERROR_RAMPS, FILTER_BY_MATERIAL} from '../../actionTypes';
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

export const rampsByMaterial = (material) => {
    return {
        type: FILTER_BY_MATERIAL,
        payload: material
    }
} 

const rampsAction = () => {
    return async (dispatch) => {
        try {
            dispatch(rampsRequest());
            const response = await http.get(`${API_URL}/ramps`);
            dispatch(rampsSuccess(response.features));

        }catch(error) {
            dispatch(rampsError())
        }
    }
}

export default rampsAction;