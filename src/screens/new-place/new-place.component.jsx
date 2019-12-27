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

import Color from '../../constants/Color';
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
  const [titleValue, setTitleValue] = useState('');
  const dispatch = useDispatch();

  const savePlace = () => {
    dispatch(addPlace(titleValue));
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