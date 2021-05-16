import {SUCCESS_MATERIALS, REQUEST_MATERIALS, ERROR_MATERIALS} from '../../actionTypes';
import {http} from '../../../utils/http';
import {logic} from '../../logic';
import {API_URL} from '../../../constants';

const materialsRequest = () => {
    return {
        type: REQUEST_MATERIALS
    }
}

const materialsSuccess = (materials) => {
    return {
        type: SUCCESS_MATERIALS,
        payload: materials
    }
}

const materialsError = () => {
    return {
        type: ERROR_MATERIALS
    }
}

export const getMaterialsAction = () => {
    return async (dispatch) => {
        try {
            dispatch(materialsRequest());
            const {features} = await http.get(`${API_URL}/ramps`);
            const singleMaterials = logic.retrieveSingleElements(features);
            const materialsObjectList = logic.setObjectInArray(singleMaterials);
            const materialsCounter = logic.setCounterValue(materialsObjectList, features);
            dispatch(materialsSuccess(materialsCounter))

        }catch(error) {
            dispatch(materialsError())
        }
    }
}
