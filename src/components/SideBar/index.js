import {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import rampsAction from '../../redux/actions/rampsActions';
import './style.sass';

const SideBar = () => {
    const dispatch = useDispatch();
    const {ramps, loading, error} = useSelector(state => state.ramps);
    const [materials, setMaterials] = useState();

    const retrieveSingleMaterialList = () => {
        let materialList = []
        ramps.features.forEach((ramp) => {
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
        if(ramps.features) {
            const materialList = retrieveSingleMaterialList();
            const materialsObjectList = retrieveMaterialsObjectsList(materialList)

            for(let i = 0; i < materialsObjectList.length; i++) {
                for(let j = 0; j < ramps.features.length; j++) {
                    if(materialsObjectList[i].name === ramps.features[j].properties.material) {
                        materialsObjectList[i].count += 1; 
                    }
                }
            }
            setMaterials(materialsObjectList);
        }
    } 

    useEffect(() => {
        handleRetrieveAllMaterials(); 
    },[loading])

    useEffect(() => {
        dispatch(rampsAction())
    },[dispatch])

    return (
        <aside className="sidebar">
            <h3>sidebar</h3>
            <ul>
                {materials && materials.map((material) => {
                    return (
                        <div>
                            <li>{material.name}</li>
                            <li>{material.count}</li>
                        </div>
                    )
                })}
            </ul>
        </aside>
    );
}

export default SideBar;