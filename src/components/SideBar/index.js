import {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import rampsAction, {rampsByMaterialAction} from '../../redux/actions/rampsActions';
import './style.sass';

const SideBar = () => {
    const dispatch = useDispatch();
    const {ramps, loading, error} = useSelector(state => state.ramps);
    const [materials, setMaterials] = useState();

    const retrieveSingleMaterialList = () => {
        let materialList = []
        ramps.forEach((ramp) => {
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
    const handleRetrieveAllMaterials = () => {
        if(ramps) {
            const materialList = retrieveSingleMaterialList();
            const materialsObjectList = retrieveMaterialsObjectsList(materialList)

            for(let i = 0; i < materialsObjectList.length; i++) {
                for(let j = 0; j < ramps.length; j++) {
                    if(materialsObjectList[i].name === ramps[j].properties.material) {
                        materialsObjectList[i].count += 1; 
                    }
                }
            }
            setMaterials(materialsObjectList);
        }
    } 

    const handleFilterByMaterial = (materialValue) => {
        dispatch(rampsByMaterialAction(materialValue));
    }

    useEffect(() => {
        handleRetrieveAllMaterials(); 
    },[loading])

    useEffect(() => {
        dispatch(rampsAction())
    },[dispatch])

    return (
        <aside className="sidebar">
            <ul>
                {materials && materials.map((material) => {
                    return (
                        <div className="materials">
                            <li onClick={() => handleFilterByMaterial(material.name)} className="materials__name">{`${material.name}:`}</li>
                            <li className="materials__count">{material.count}</li>
                        </div>
                    )
                })}
            </ul>
        </aside>
    );
}

export default SideBar;