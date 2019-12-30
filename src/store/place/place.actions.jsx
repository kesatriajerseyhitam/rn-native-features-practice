import placeActionTypes from './place.types';

import * as FileSystem from 'expo-file-system';
import { fetchPlace, insertPlace } from '../../utils/db';

export const addPlace = (title, image) => {
  return async dispatch => {
    const fileName = image.split('/').pop();
    const newPath = FileSystem.documentDirectory + fileName;
    
    try {
      await FileSystem.moveAsync({
        from: image,
        to: newPath,
      });
      const dbResult = await insertPlace(title, newPath, `Dummy address`, 115.6, 12.3);
      dispatch({
        placeData: { 
          id: dbResult.insertId,
          image: newPath, 
          title: title 
        },
        type: placeActionTypes.ADD_PLACE,
      })
    } catch (err) {
      console.log(err);
      throw err;
    }
  
  }
};

export const fetchPlaces = () => {
  return async dispatch => {
    try {
      const dbResult = await fetchPlace();
      dispatch({
        places: dbResult.rows._array,
        type: placeActionTypes.FETCH_PLACE,
      })
    } catch (err) {
      throw err;
    }
  }
}