import * as FileSystem from 'expo-file-system';
import placeActionTypes from './place.types';

export const addPlace = (title, image) => {
  return async dispatch => {
    const fileName = image.split('/').pop();
    const newPath = FileSystem.documentDirectory = fileName;
    
    try {
      await FileSystem.moveAsync({
        from: image,
        to: newPath,
      });
    } catch (err) {
      console.log(err);
      throw err;
    }
  
    dispatchEvent({
      placeData: { 
        image: newPath, 
        title: title 
      },
      type: placeActionTypes.ADD_PLACE,
    })
  }
};