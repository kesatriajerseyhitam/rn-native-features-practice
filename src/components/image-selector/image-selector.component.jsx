import React, { useState } from 'react';
import {
  Alert,
  Button, 
  Image,
  Text,
  View, 
} from 'react-native';

import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';

import Color from '../../constants/Color';
import styles from './image-selector.styles';

const {
  primary
} = Color;

const {
  imagePicker,
  imagePreview,
  imageStyle,
} = styles;

const ImageSelector = ({ onImageTaken }) => {
  const [pickedImage, setPickedImage] = useState();

  const askPermission = async () => {
    const result = await Permissions.askAsync(Permissions.CAMERA_ROLL);
    if (result.status !== 'granted') {
      Alert.alert(
        'Insufficient permissions',
        'You need to grant camera access to use this app.',
        [{ text: 'Okay' }]
      );
      return false;
    }
    return true;
  }


  const takeImageHandler = async () => {
    const allowed = await askPermission();
    if (allowed) {
      const image = await ImagePicker.launchCameraAsync({
        allowsEditing: true,
        aspect: [16, 9],
        quality: 0.5
      });

      setPickedImage(image.uri)
      onImageTaken(image.uri)
    }
  }
  
  return (
    <View style={ imagePicker }>
      <View style={ imagePreview }>
      {
        !pickedImage ? 
        <Text>No image picked yet.</Text> :
        <Image
          source={{ uri: pickedImage }}
          style={ imageStyle }
        />
      }
      </View>
      <View style={{ width: '100%' }}>
        <Button 
          color={ primary }
          onPress={ takeImageHandler }
          title="Take Image"
        />
      </View>
    </View>
  )
}

export default ImageSelector;