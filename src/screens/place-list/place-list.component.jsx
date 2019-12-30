import React, { useEffect } from 'react';
import {
  FlatList,
  Platform,
  Text,
  View,
} from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPlaces } from '../../store/place/place.actions';

import CustomHeaderButton from '../../components/custom-header-button/custom-header-button.components';
import PlaceItem from '../../components/place-item/place-item.component';
 
const PlaceListScreen = ({}) => {
  const places = useSelector(state => state.place.place);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPlaces);
  }, [dispatch]);
  
  return (
    <FlatList 
      data={ places }
      keyExtractor={ item => item.id }
      renderItem={ item =>
        <PlaceItem 
          address={ null }
          image={ item.item.imageUri }
          onSelect={() => {
            navigation.navigate('PlaceDetail', {
              placeId: item.item.id,
              placeTitle: item.item.title,
            })
          }}
          title={ item.item.title }
        />
      }
    />
  )
}

PlaceListScreen.navigationOptions = ({ navigation }) => {
  return {
    headerTitle: 'All Places',
    headerRight: <HeaderButtons HeaderButtonComponent={ CustomHeaderButton }>
      <Item 
        iconName={ Platform.OS === 'android' ? 'md-add' : 'ios-add' }
        onPress={ () => navigation.navigate('NewPlace') }
        title="Add Place"
      />
    </HeaderButtons>
  }
}

export default PlaceListScreen;