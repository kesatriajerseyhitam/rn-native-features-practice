import React, { useState } from 'react';
import {
  AcitivityIndicator,
  Alert,
  Button,
  Text,
  View,
  ActivityIndicator,
} from 'react-native';

import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';
import Color from '../../utils/Color';
import styles from './location-picker.styles';

const { primary } = Color;
const {
  locationPicker,
  mapPreview
} = styles;

const LocationPicker = ({}) => {
  const [isFetching, setIsFetching] = useState(false)
  const [pickedLocation, setPickedLocation] = useState();

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
      })
    } catch (err) {
      Alert.alert(
        `Could not fetch location`,
        `Please try again later or pick a location on the map`,
        [{ text: `okay` }]
      )
    }
    setIsFetching(false);
  }

  return (
    <View style={ locationPicker }>
      <View style={ mapPreview }>
        {
          isFetching ?
          <ActivityIndicator size="large" color={ primary } /> :
          pickedLocation ? 
          <Text>
            Latitude: { pickedLocation.lat }, Longitude: { pickedLocation.lng }
          </Text> :
          <Text>No Location chosen yet!</Text>
        }
      </View>
      <Button 
        color={ primary }
        onPress={ getLocationHandler }
        title="Get User Location"
      />
    </View>
  )
}

export default LocationPicker;