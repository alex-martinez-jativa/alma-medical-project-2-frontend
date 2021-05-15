import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {rampsAction, rampsByMaterialAction, getMaterialsAction} from '../../redux/actions/rampsActions';
import Material from '../Material';
import './style.sass';

const SideBar = () => {
    const dispatch = useDispatch();
    const {materials, error} = useSelector(state => state.ramps);

    const handleFilterByMaterial = (materialValue) => {
        dispatch(rampsByMaterialAction(materialValue));
    }

    const handleRetrieveAllMaterials = (materialValue) => {
        dispatch(getMaterialsAction(materialValue))
    }

    const handleGetAllRamps = () => {
        dispatch(rampsAction())
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