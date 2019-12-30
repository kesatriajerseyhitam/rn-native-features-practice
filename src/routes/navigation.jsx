import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { Platform } from 'react-native';

import MapScreen from '../screens/map/map.component';
import NewPlaceScreen from '../screens/new-place/new-place.component';
import PlaceDetailScreen from '../screens/place-detail/place-detail.component';
import PlaceListScreen from '../screens/place-list/place-list.component';
import Color from '../utils/Color';

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
}, { defaultNavigationOptions: defaultNavigationOptions } );

export default createAppContainer(PlaceNavigator);