import { StyleSheet } from 'react-native';
import Color from '../../utils/Color';

const { primary } = Color;

const styles = StyleSheet.create({
  addressContainer: {
    padding: 20
  },
  addressStyle: {
    color: primary,
    textAlign: 'center',
  },
  imageStyle: {
    backgroundColor: '#ccc',
    height: '35%',
    minHeight: 300,
    width: '100%',
  },
  locationContainer: {
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 10,
    elevation: 5,
    justifyContent: 'center',
    marginVertical: 20,
    maxWidth: 350,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.26,
    shadowRadius: 8,
    width: '90%',
  },
  mapPreviewStyle: {
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    height: 300,
    maxWidth: 350,
    width: '100%',
  }
});

export default styles;