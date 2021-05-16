import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getRampsAction, rampsByMaterialAction} from '../../redux/actions/rampsActions';
import {getMaterialsAction} from '../../redux/actions/materialsActions';
import Material from '../Material';
import ErrorMessage from '../ErrorMessage';
import './style.sass';

const SideBar = () => {
    const dispatch = useDispatch();
    const {materials, error} = useSelector(state => state.materials);
    const {count} = useSelector(state => state.ramps);

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
            <ul className="sidebar__list">
            <h2 className="sidebar__title">Australia's boat ramps</h2>
                <p className="sidebar__count">{`${count} ramps in the viewport`}</p>
                {materials && materials.map((material, index) => {
                    return (
                        <Material 
                            key={index}
                            name={material.name} 
                            count={material.count} 
                            onFilterByMaterial={handleFilterByMaterial}
                        />
                    )
                })}
                <button className="sidebar__reset" type="button" onClick={handleGetAllRamps}>All ramps</button>
            </ul>
            {error && <ErrorMessage errorMessage="Something went wrong" />}
        </aside>
    );
}

export default SideBar;