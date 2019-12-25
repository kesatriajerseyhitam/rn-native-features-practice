import { StyleSheet } from 'react-native';
import Color from '../../constants/Color';
 
const { primary } = Color;

const styles = StyleSheet.create({
  addressStyle: {
    color: '#666',
    fontSize: 16
  },
  imageStyle: {
    backgroundColor: '#ccc',
    borderColor: primary,
    borderRadius: 35,
    borderWidth: 1,
    height: 70,
    width: 70,
  },
  infoContainer: {
    alignItems: 'flex-start',
    justifyContent: 'center',
    marginLeft: 25,
    width: 250,
  },
  placeItem: {
    alignItems: 'center',
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    flexDirection: 'row',
    paddingHorizontal: 30,
    paddingVertical: 15,
  },
  titleStyle: {
    color: 'black',
    fontSize: 18,
    marginBottom: 5,
  },
});

export default styles;