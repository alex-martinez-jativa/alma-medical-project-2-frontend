import {Marker, useMapEvents} from 'react-leaflet';
import L from "leaflet";
import {IconLocation} from '../IconLocation';

const MapList = ({ramps}) => {

    function getRampsInView() {
        const rampsAux = ramps;
        let latLngInView = [];
        let rampsCoordsValues = [];
        let totalLatLangValues = [];
        let totalMarksInViewPort = [];

        map.eachLayer( function(layer) {
            if(layer instanceof L.Marker) {
                if(map.getBounds().contains(layer.getLatLng())) {
                    const item = layer.dragging._marker._latlng
                    latLngInView.push(item);
                }
            }
        });

        rampsAux.forEach((ramp) => {
            const marks = ramp.geometry.coordinates[0][0]
            rampsCoordsValues.push(marks);
        })


        for(let i = 0; i < rampsCoordsValues.length; i++) {
            for(let j = 0; j < rampsCoordsValues[i].length; j++) {
                totalLatLangValues.push(rampsCoordsValues[i][j])
            }
        }

        for(let k = 0; k < totalLatLangValues.length; k++) {
            for(let n = 0; n < latLngInView.length; n++) {
                if(totalLatLangValues[k][0] === latLngInView[n].lng && totalLatLangValues[k][1] === latLngInView[n].lat) {
                    const mark = {
                        lat: totalLatLangValues[k][0],
                        lng: totalLatLangValues[k][1]
                    }
                    totalMarksInViewPort.push(mark)
                }
            }
        }
        return totalMarksInViewPort;
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