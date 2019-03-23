import { combineReducers } from 'redux';

import valueReducer from './value';
import objectReducer from './object';

const reducers = {
  value: valueReducer,
  object: objectReducer,
};

export default combineReducers(reducers);
