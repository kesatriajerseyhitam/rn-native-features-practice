import { StyleSheet } from 'react-native';
import Color from '../../utils/Color';

const { primary } = Color;


const styles = StyleSheet.create({
  headerButton: {
    marginHorizontal: 20
  },
  headerButtonText: {
    color: Platform.OS === 'android' ? 'white' : primary,
    fontSize: 16,
  },
    mapStyle: {
    flex: 1
  },
});

export default styles;