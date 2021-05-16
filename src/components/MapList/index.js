import {useEffect} from 'react';
import {Marker, useMapEvents} from 'react-leaflet';
import L from "leaflet";
import {IconLocation} from '../IconLocation';
import {useDispatch} from 'react-redux';
import {countRampsAction} from '../../redux/actions/rampsActions';

const MapList = ({ramps}) => {

    const dispatch = useDispatch();

    const getRampsInView = () => {
        let latLngInView = [];

        map.eachLayer( function(layer) {
            if(layer instanceof L.Marker) {
                if(map.getBounds().contains(layer.getLatLng())) {
                    const item = layer.dragging._marker._latlng
                    latLngInView.push(item);
                }
            }
        });

        dispatch(countRampsAction(latLngInView.length))
      }

    const map = useMapEvents({
        zoom: () => {
            getRampsInView()
        }
    });

    useEffect(() => {
        getRampsInView()
    },[])

    const coordinates = ramps.map((ramp) => {
        return ramp.geometry.coordinates[0].map((item, index) => {
            return item[index];
        });
    });
 
    const markers = coordinates.map((item, index) => {
        return <Marker key={index} position={[item[0][1], item[0][0]]} icon={IconLocation}/>
    })
    return markers;
}

export default MapList;