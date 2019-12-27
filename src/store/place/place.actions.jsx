import placeActionTypes from './place.types';

export const addPlace = title => ({
  placeData: { title: title },
  type: placeActionTypes.ADD_PLACE,
});