import React from 'react';
import {
  FlatList,
  Platform,
  Text,
  View,
} from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { useSelector } from 'react-redux';

import CustomHeaderButton from '../../components/custom-header-button/custom-header-button.components';
import PlaceItem from '../../components/place-item/place-item.component';

const PlaceListScreen = ({}) => {
  const places = useSelector(state => state.place.place);
  
  return (
    <FlatList 
      data={ places }
      keyExtractor={ item => item.id }
      renderItem={ item =>
        <PlaceItem 
          address={ null }
          image={ null }
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