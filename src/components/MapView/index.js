import {useSelector} from 'react-redux';
import {MapContainer, TileLayer} from 'react-leaflet';
import "leaflet/dist/leaflet.css";
import {INIT_LAT, INIT_LNG} from '../../constants';
import MapList from '../MapList';

const MapView = () => {
    const {ramps, loading, error} = useSelector(state => state.ramps)
    return (
        <MapContainer center={{lat: INIT_LAT, lng: INIT_LNG}} zoom={6} style={{ height: '100vh', width: '100vw' }}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            />
        {!loading && <MapList ramps={ramps}/>}
        </MapContainer>
    );
}

export default MapView;
