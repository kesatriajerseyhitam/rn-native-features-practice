import React, { 
  useEffect,
  useState,
} from 'react';
import {
  ActivityIndicator,
  Alert,
  Button,
  Text,
  View,
} from 'react-native';

import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';
import Color from '../../utils/Color';
import styles from './location-picker.styles';
import MapPreview from '../map-preview/map-preview.component';

const { primary } = Color;
const {
  actions,
  locationPicker,
  mapPreviewStyle,
} = styles;

const LocationPicker = ({ navigation, onLocationPicked }) => {
  const [isFetching, setIsFetching] = useState(false)
  const [pickedLocation, setPickedLocation] = useState();
  const mapPickedLocation = navigation.getParam('pickedLocation');

  useEffect(() => {
    if (mapPickedLocation) {
      setPickedLocation(mapPickedLocation);
      onLocationPicked(mapPickedLocation);
    }
  }, [mapPickedLocation, onLocationPicked]);

  const verifyPermissions = async () => {
    const result = await Permissions.askAsync(Permissions.LOCATION);
    if (result.status !== 'granted') {
      Alert.alert(
        `Insufficient permissions`,
        `You need to grant location permissions to use this app.`,
        [{ text: `Okay`}]
      )
      return false;
    }
    return true;
  };

  const getLocationHandler = async () => {
    const allowed = await verifyPermissions();
    if (!allowed) return;

    try {
      setIsFetching(true);
      const location = await Location.getCurrentPositionAsync({
        timeout: 5000
      });
      setPickedLocation({
        lat: location.coords.latitude,
        lng: location.coords.longitude,
      });
      onLocationPicked({
        lat: location.coords.latitude,
        lng: location.coords.longitude,
      });
    } catch (err) {
      Alert.alert(
        `Could not fetch location`,
        `Please try again later or pick a location on the map`,
        [{ text: `okay` }]
      )
    }
    setIsFetching(false);
  }

  const pickOnMapHandler = () => navigation.navigate('Map');

  return (
    <View style={ locationPicker }>
      <MapPreview 
        location={ pickedLocation }
        onPress={ pickOnMapHandler }
        style={ mapPreviewStyle } 
      >
        {
          isFetching ?
          <ActivityIndicator size="large" color={ primary } /> :
          <Text>No Location chosen yet!</Text>
        }
      </MapPreview>
      <View style={ actions }>
        <Button 
          color={ primary }
          onPress={ getLocationHandler }
          title="Get User Location"
        />
        <Button 
          color={ primary }
          onPress={ pickOnMapHandler }
          title="Pick On Map"
        />
      </View>
    </View>
  )
}

export default LocationPicker;