import {SUCCESS_RAMPS, REQUEST_RAMPS, ERROR_RAMPS, FILTER_BY_MATERIAL, COUNT_RAMPS} from '../../actionTypes';
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

const rampsByMaterial = (material) => {
    return {
        type: FILTER_BY_MATERIAL,
        payload: material
    }
}

const countRamps = (count) => {
    return {
        type: COUNT_RAMPS,
        payload: count
    }
}

export const rampsByMaterialAction = (material) => {
    return async (dispatch) => {
        try {
            dispatch(rampsRequest());
            const {features} = await http.get(`${API_URL}/ramps`);
            const filterByMaterial = features.filter((items) => {
                return items.properties.material === material;
            })
            dispatch(rampsByMaterial(filterByMaterial))

        }catch(error) {
            dispatch(rampsError())
        }
    }
}

export const getRampsAction = () => {
    return async (dispatch) => {
        try {
            dispatch(rampsRequest());
            const {features} = await http.get(`${API_URL}/ramps`);
            dispatch(rampsSuccess(features));

        }catch(error) {
            dispatch(rampsError())
        }
    }
}

export const countRampsAction = (count) => {
    return (dispatch) => {
        dispatch(countRamps(count))
    }
}
