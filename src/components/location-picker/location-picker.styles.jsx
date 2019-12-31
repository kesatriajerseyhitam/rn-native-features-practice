import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  locationPicker: {
    marginBottom: 15
  },
  mapPreview: {
    alignItems: 'center',
    borderColor: '#ccc',
    borderWidth: 1,
    height: 150,
    justifyContent: 'center',
    marginBottom: 10,
    width: '100%',
  }
});

export default styles;