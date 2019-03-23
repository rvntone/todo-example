import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import test from './middlewares/test';
import test2 from './middlewares/test2';
import rootReducer from './reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middlewares = [test, test2, thunk];

const store = createStore(
  rootReducer,
  undefined,
  composeEnhancers(applyMiddleware(...middlewares)),
);
export default store;
