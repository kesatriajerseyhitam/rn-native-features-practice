import React from 'react';
import {
  Image,
  TouchableOpacity,
  View,
} from 'react-native';

import ENV from '../../../env';
import styles from './map-preview.styles';

const {
  googleApiKey
} = ENV;
const {
  mapImage,
  mapPreview,
} = styles;

const MapPreview = ({ children, location, onPress, otherStyle }) => {
  let imagePreviewUrl;

  if (location) {
    imagePreviewUrl = `https://maps.googleapis.com/maps/api/staticmap?center=${
      location.lat
    },${
      location.lng
    }&zoom=14&size=400x200&maptype=roadmap&markers=color:red%7Clabel:A%7C${
      location.lat
    },${location.lng}&key=${googleApiKey}`;
  }

  return (
    <TouchableOpacity
      onPress={ onPress }
      style={{ ...mapPreview, ...otherStyle }}
    >
      {
        location ?
        <Image style={ mapImage } source={{ uri: imagePreviewUrl }} /> :
        children
      }
    </TouchableOpacity>
  )
}

export default MapPreview;