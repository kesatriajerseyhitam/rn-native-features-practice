import { combineReducers } from 'redux';

import placeReducer from './place/place.reducers';

const rootReducer = combineReducers({
  place: placeReducer,
});

export default rootReducer;
