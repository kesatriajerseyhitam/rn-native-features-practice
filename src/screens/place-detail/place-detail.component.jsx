import React from 'react';
import {
  Text,
} from 'react-native'

const PlaceDetailScreen = ({}) => {
  return <Text>Hallo mate</Text>;
}

PlaceDetailScreen.navigationOptions = ({ navigation }) => {
  return {
    headerTitle: navigation.getParam('placeTitle')
  }
}

export default PlaceDetailScreen