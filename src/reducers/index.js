import { combineReducers } from 'redux';

import valueReducer from './value';
import objectReducer from './object';
import complexReducer from './complex';

const reducers = {
  value: valueReducer,
  object: objectReducer,
  complex: complexReducer,
};

const internalReducers = combineReducers(reducers);

const rootReducer = (state, action) => {
  //...
  if (action.type === 'LOG_OUT') {
    return internalReducers(undefined, action);
  }
  //...
  return internalReducers(state, action);
};

export default rootReducer;
