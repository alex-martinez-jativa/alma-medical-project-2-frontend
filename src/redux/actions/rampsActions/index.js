import {SUCCESS_RAMPS, REQUEST_RAMPS, ERROR_RAMPS, FILTER_BY_MATERIAL, GET_MATERIALS} from '../../actionTypes';
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
            const singleMaterials = retrieveSingleMaterialList(features);
            const materialsObjectList = retrieveMaterialsObjectsList(singleMaterials);
            for(let i = 0; i < materialsObjectList.length; i++) {
                for(let j = 0; j < features.length; j++) {
                    if(materialsObjectList[i].name === features[j].properties.material) {
                        materialsObjectList[i].count += 1; 
                    }
                }
            }
            dispatch(getMaterials(materialsObjectList))

        }catch(error) {
            dispatch(rampsError())
        }
    }
}

const rampsAction = () => {
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

export default rampsAction;


const retrieveSingleMaterialList = (features) => {
    let materialList = []
    features.forEach((ramp) => {
        if(!materialList.includes(ramp.properties.material)) {
            materialList.push(ramp.properties.material)
        }
    })
    return materialList  
}

const retrieveMaterialsObjectsList = (listEelement) => {
    if(listEelement) {
        let newMaterialList = [];          
        listEelement.forEach((item) => {
            const element = {
                name: item,
                count: 0
            }
            newMaterialList.push(element);
        })
        return newMaterialList;
    }
}