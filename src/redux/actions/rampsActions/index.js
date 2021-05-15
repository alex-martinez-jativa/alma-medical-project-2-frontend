import {SUCCESS_RAMPS, REQUEST_RAMPS, ERROR_RAMPS, FILTER_BY_MATERIAL, GET_MATERIALS} from '../../actionTypes';
import {http} from '../../../utils/http';
import {logic} from '../../logic';
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

const getMaterials = (materials) => {
    return {
        type: GET_MATERIALS,
        payload: materials
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

export const getMaterialsAction = () => {
    return async (dispatch) => {
        try {
            dispatch(rampsRequest());
            const {features} = await http.get(`${API_URL}/ramps`);
            const singleMaterials = logic.retrieveSingleElements(features);
            const materialsObjectList = logic.setObjectInArray(singleMaterials);
            const materialsCounter = logic.setCounterValue(materialsObjectList, features);
            dispatch(getMaterials(materialsCounter))

        }catch(error) {
            dispatch(rampsError())
        }
    }
}

export const rampsAction = () => {
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
