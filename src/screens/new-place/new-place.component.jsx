import React, { useState } from 'react';
import {
  Platform,
  ScrollView,
  Text,
  TextInput, 
  View,
  Button,
} from 'react-native';

import { addPlace } from '../../store/place/place.actions';
import { useDispatch } from 'react-redux';

import Color from '../../utils/Color';
import ImageSelector from '../../components/image-selector/image-selector.component';
import LocationPicker from '../../components/location-picker/location.picker.component';
import styles from './new-place.styles';

const {
  primary,
} = Color
const {
  form,
  label,
  textInput,
} = styles;

const NewPlaceScreen = ({ navigation }) => {
  const [selectedImage, setSelectedImage] = useState();
  const [titleValue, setTitleValue] = useState('');
  const dispatch = useDispatch();

  const imageTakenHandler = uri => setSelectedImage(uri);
  const savePlace = () => {
    dispatch(addPlace(titleValue, selectedImage));
    navigation.goBack();
  }
  const titleChangeHandler = text => setTitleValue(text);
  
  return (
    <ScrollView>
      <View style={ form }>
        <Text style={ label }>
          New List Screen
        </Text>
        <TextInput 
          onChangeText={ titleChangeHandler }
          style={ textInput }
          value={ titleValue }
        />
        <ImageSelector onImageTaken={ imageTakenHandler } />
        <LocationPicker />
        <Button 
          color={ primary }
          onPress={ () => savePlace() }
          title="Save Place"
        />
      </View>
    </ScrollView>
  )
}

NewPlaceScreen.navigationOptions = {
  headerTitle: 'Add Place',
}

export default NewPlaceScreen;