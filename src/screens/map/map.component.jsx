import React from 'react';
import MapView from 'react-native-maps';

import styles from './map.styles';

const {
  mapStyle
} = styles;

const MapScreen = ({}) => {
  const mapRegion = {
    latitude: 37.78,
    latitudeDelta: 0.0922,
    longitude: -122.43,
    longitudeDelta: 0.0421,
  };

  return <MapView region={ mapRegion } style={ mapStyle } />
}

export default MapScreen;