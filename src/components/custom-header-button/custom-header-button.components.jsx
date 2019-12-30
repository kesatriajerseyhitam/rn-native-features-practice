import React from 'react';
import { HeaderButton } from 'react-navigation-header-buttons';
import { Ionicons } from '@expo/vector-icons';
import { Platform } from 'react-native';

import Color from '../../utils/Color';

const { primary } = Color;

const CustomHeaderButton = props => {
  return (
    <HeaderButton
      IconComponent={ Ionicons }
      color={ Platform.OS === 'android' ? 'white' : primary }
      iconSize={ 23 }
      {...props}
    />
  )
}

export default CustomHeaderButton;

