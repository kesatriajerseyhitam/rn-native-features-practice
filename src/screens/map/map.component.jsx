import React, { useCallback, useState, useEffect } from 'react';
import {
  Text,
  TouchableOpacity,
} from 'react-native';
import MapView, { Marker } from 'react-native-maps';

import styles from './map.styles';

const {
  headerButton,
  headerButtonText,
  mapStyle,
} = styles;

const MapScreen = ({ navigation }) => {
  const [selectedLocation, setSelectedLocation] = useState();
  const initialLocation = navigation.getParam('initialLocation');
  const mapRegion = {
    latitude: initialLocation ? initialLocation.lat : 37.78,
    latitudeDelta: 0.0922,
    longitude: initialLocation ? initialLocation.lng : -122.43,
    longitudeDelta: 0.0421,
  };
  const readonly = navigation.getParam('readonly');
  let markerCoordinates;

  useEffect(() => {
    navigation.setParams({ saveLocation: savePickedLocationHandler })
  }, [savePickedLocationHandler]);

  const savePickedLocationHandler = useCallback(() => {
    if (!selectedLocation) return;
    navigation.navigate('NewPlace', { pickedLocation: selectedLocation });
  }, [selectedLocation]);

  const selectedLocationHandler = event => {
    if (readonly) return;
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

MapScreen.navigationOptions = ({ navigation }) => {
  const saveFn = navigation.getParam('saveLocation');
  const readonly = navigation.getParam('readonly');
  if (readonly) return {};
  return {
    headerRight: (
      <TouchableOpacity
        onPress={ saveFn }
        style={ headerButton }
      >
        <Text style={ headerButtonText }> Save </Text>
      </TouchableOpacity>
    )
  }
}

export default MapScreen;