import {Marker} from 'react-leaflet';
import {IconLocation} from '../IconLocation';

const MapList = ({ramps}) => {
    const coordinates = ramps.features.map((ramp) => {
        return ramp.geometry.coordinates[0].map((item, index) => {
            return item[index].reverse();
        });
    });

    const markers = coordinates.map((item) => {
        return <Marker position={item[0]} icon={IconLocation}/>
    })

    return markers;
}

export default MapList;