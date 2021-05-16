import {Marker, useMapEvents} from 'react-leaflet';
import L from "leaflet";
import {IconLocation} from '../IconLocation';

const MapList = ({ramps}) => {

    function getRampsInView() {
        var rampsInView = [];
        map.eachLayer( function(layer) {
          if(layer instanceof L.Marker) {
            if(map.getBounds().contains(layer.getLatLng())) {
                rampsInView.push(layer.dragging._marker._latlng);
            }
          }
        });
        return rampsInView;
      }

    const map = useMapEvents({
        zoom: () => {
            getRampsInView()
        }
      });

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