import placeActionTypes from './place.types';
import Place from '../../models/place';

const initialState = {
  place: [],
}

const placeReducer = (state = initialState, action) => {
  switch (action.type) {
    case placeActionTypes.ADD_PLACE:
      const place = new Place(new Date().toString(), action.placeData.title);
      return {
        place: [...state.place, place] 
      }
    default:
      return initialState
  }
}

export default placeReducer;