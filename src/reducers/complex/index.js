import { combineReducers } from 'redux';

import object1Reducer from './object1';
import object2Reducer from './object2';
import array1Reducer from './array';

const reducers = {
  object1: object1Reducer,
  object2: object2Reducer,
  array1: array1Reducer,
};

const internalReducers = combineReducers(reducers);

const rootReducer = (state, action) => {
  //...
  return internalReducers(state, action);
};

export default rootReducer;
