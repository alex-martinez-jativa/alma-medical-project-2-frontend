import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getRampsAction, rampsByMaterialAction} from '../../redux/actions/rampsActions';
import {getMaterialsAction} from '../../redux/actions/materialsActions';
import Material from '../Material';
import './style.sass';

const SideBar = () => {
    const dispatch = useDispatch();
    const {materials, error} = useSelector(state => state.materials);

    const handleFilterByMaterial = (materialValue) => {
        dispatch(rampsByMaterialAction(materialValue));
    }

    const handleRetrieveAllMaterials = (materialValue) => {
        dispatch(getMaterialsAction(materialValue))
    }

    const handleGetAllRamps = () => {
        dispatch(getRampsAction())
    }

    useEffect(() => {
        handleRetrieveAllMaterials(); 
    },[])

    useEffect(() => {
        handleGetAllRamps()
    },[])

    return (
        <aside className="sidebar">
            <ul>
            <h2 className="sidebar__title">Australia's boat ramps</h2>
                {materials && materials.map((material) => {
                    return (
                        <Material 
                            name={material.name} 
                            count={material.count} 
                            onFilterByMaterial={handleFilterByMaterial}
                        />
                    )
                })}
                <button className="sidebar__reset" type="button" onClick={handleGetAllRamps}>Reset</button>
            </ul>
        </aside>
    );
}

export default SideBar;