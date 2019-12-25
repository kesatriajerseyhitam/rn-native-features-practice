import { createAppContainer, createStackNavigator } from 'react-navigation';
import { Platform } from 'react-native';

import MapScreen from '../screens/map-screen/map-screen.component';
import NewPlaceScreen from '../screens/new-place/new-place.component';
import PlaceDetailScreen from '../screens/place-detail/place-detail.component';
import PlaceListScreen from '../screens/place-list/place-list.component';
import Color from '../constants/Color';

const { primary } = Color;

const defaultNavigationOptions = {
  headerStyle: {
    backgroundColor: Platform.OS === 'android' ? primary : '',
  },
  headerTintColor: Platform.OS === 'android' ? 'white' : primary, 
}

const PlaceNavigator = createStackNavigator({
  Places: PlaceListScreen,
  PlaceDetail: PlaceDetailScreen,
  NewPlace: NewPlaceScreen,
  Map: MapScreen,
});

export default createAppContainer(PlaceNavigator);