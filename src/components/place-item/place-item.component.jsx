import React from 'react';
import { 
  Image, 
  Text, 
  TouchableOpacity,
  View, 
} from 'react-native';

import styles from './place-item.styles';

const {
  addressStyle,
  imageStyle,
  infoContainer,
  placeItem,
  titleStyle,
} = styles;

const PlaceItem = ({ address, image, onSelect, title }) => {
  return (
    <TouchableOpacity 
      onPress={ onSelect } 
      style={ placeItem }
    >
      <Image 
        source={{ uri: image }} 
        style={ imageStyle } 
      />
      <View style={ infoContainer }>
        <Text style={ titleStyle }>
          { title }
        </Text>
        <Text style={ addressStyle }>
          { address }
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default PlaceItem;
