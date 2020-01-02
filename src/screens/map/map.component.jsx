import React, { useState} from 'react';
import MapView, { Marker } from 'react-native-maps';

import styles from './map.styles';

const {
  mapStyle
} = styles;

const MapScreen = ({}) => {
  const [selectedLocation, setSelectedLocation] = useState();
  let markedCoordinates;

  const mapRegion = {
    latitude: 37.78,
    latitudeDelta: 0.0922,
    longitude: -122.43,
    longitudeDelta: 0.0421,
  };

  const selectedLocationHandler = event => {
    setSelectedLocation({
      lat: event.nativeEvent.coordinate.latitude,
      lng: event.nativeEvent.coordinate.longitude,
    })
  }

  if (selectedLocation) {
    markerCoordinates = {
      latitude: selectedLocation.lat,
      longitude: selectedLocation.lng,
    }
  }

  return  (
    <MapView 
      onPress={ selectedLocationHandler }
      region={ mapRegion } 
      style={ mapStyle } 
    >
      {
        markerCoordinates &&
        <Marker 
          coordinate={ markerCoordinates }
          title="Picked Location"
        />
      }
    </MapView>
  )
}

export default MapScreen;