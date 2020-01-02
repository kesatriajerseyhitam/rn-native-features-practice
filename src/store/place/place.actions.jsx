import placeActionTypes from './place.types';

import * as FileSystem from 'expo-file-system';
import { fetchPlace, insertPlace } from '../../utils/db';
import ENV from '../../../env';

export const addPlace = (title, image, location) => {
  return async dispatch => {
    const fileName = image.split('/').pop();
    const newPath = FileSystem.documentDirectory + fileName;
    
    const response = await fetch(
      `https://maps.googleapis.com/maps/api/geocode/json?latlng=
      ${location.lat},${location.lng}&key=${ENV.googleApiKey}`
    );
    
    if (!response.ok) throw new Error('Something went wrong!');
    const resData = await response.json();
    if (!resData.results) throw new Error(`Somethign went wrong!`);
    const address = resData.results[0].formatted_address;

    try {
      await FileSystem.moveAsync({
        from: image,
        to: newPath,
      });
      const dbResult = await insertPlace(
        title, 
        newPath, 
        address, 
        location.lat, 
        location.lng, 
      );
      dispatch({
        placeData: { 
          address: address,
          coords: { lat: location.lat, lng: location.lng },
          id: dbResult.insertId,
          image: newPath, 
          title: title,
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