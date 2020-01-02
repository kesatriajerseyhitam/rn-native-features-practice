import React from 'react';
import {
  Image,
  ScrollView,
  Text,
  View,
} from 'react-native'
import { useSelector } from 'react-redux';

import MapPreview from '../../components/map-preview/map-preview.component';
import styles from './place-detail.styles';

const {
  addressStyle,
  addressContainer,
  locationContainer,
  mapPreviewStyle,
  imageStyle,
} = styles;

const PlaceDetailScreen = ({ navigation }) => {
  const placeId = navigation.getParam('placeId');
  const selectedPlace = useSelector(state => state.place.place.find(place => place.id === placeId))
  const selectedLocation = { lat: selectedPlace.lat, lng: selectedPlace.lng }
  
  const showMapHandler = () => {
    navigation.navigate('Map', {
      initialLocation: selectedLocation,
      readonly: true,
    });
  };

  return (
    <ScrollView contentContainerStyle={{ alignItems: 'center' }}>
      <Image 
        source={{ uri: selectedPlace.imageUri }}
        style={ imageStyle }
      />
      <View style={ locationContainer }>
        <View style={ addressContainer }>
          <Text style={ addressStyle }>{ selectedPlace.address }</Text>  
        </View>
        <MapPreview
          location={ selectedLocation }
          onPress={ showMapHandler }
          style={ mapPreviewStyle }
        />
      </View>
    </ScrollView>
  )
}

PlaceDetailScreen.navigationOptions = ({ navigation }) => {
  return {
    headerTitle: navigation.getParam('placeTitle')
  }
}

export default PlaceDetailScreen