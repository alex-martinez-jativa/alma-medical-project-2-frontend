import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import rampsAction from '../../redux/actions/rampsActions';
import './style.sass';

const SideBar = () => {
    const dispatch = useDispatch();
    const {ramps, loading, error} = useSelector(state => state.ramps);

    useEffect(() => {
        dispatch(rampsAction())
    },[dispatch])

    return (
        <aside className="sidebar">
            <h3>sidebar</h3>
        </aside>
    );
}

export default SideBar;