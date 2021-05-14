import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {MapContainer, TileLayer} from 'react-leaflet';
import "leaflet/dist/leaflet.css";
import {INIT_LAT, INIT_LNG} from '../../constants';
import rampsAction from '../../redux/actions/rampsActions';
import MapList from '../MapList';

const MapView = () => {
    const {ramps, loading, error} = useSelector(state => state.ramps)
    const dispatch = useDispatch()
  
    useEffect(() => {
      dispatch(rampsAction())
    },[])

    return (
        <MapContainer center={{lat: INIT_LAT, lng: INIT_LNG}} zoom={6} style={{ height: '100vh', width: '100wh' }}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            />
        {!loading && <MapList ramps={ramps}/>}
        </MapContainer>
    );
}

export default MapView;