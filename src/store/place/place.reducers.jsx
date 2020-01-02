import placeActionTypes from './place.types';
import Place from '../../models/place';

const initialState = {
  place: [],
}

const placeReducer = (state = initialState, action) => {
  switch (action.type) {
    case placeActionTypes.ADD_PLACE:
      const place = new Place(
        action.placeData.id.toString(), 
        action.placeData.title,
        action.placeData.image,
        action.placeData.address,
        action.placeData.coords.lat,
        action.placeData.coords.lng,
      );
      return {
        place: [...state.place, place] 
      }
    case placeActionTypes.FETCH_PLACE:
      return {
        places: action.places.map(place => new Place(
          place.id.toString(), 
          place.title, 
          place.imageUri,
          place.address,
          place.lat,
          place.lng,
        ))
      }
    default:
      return initialState
  }
}

export default placeReducer;