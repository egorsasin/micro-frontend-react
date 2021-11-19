import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';
import counterReducer from './counter/counterReducer';

const store = createStore(
  counterReducer,
  composeWithDevTools(applyMiddleware(logger))
);

export default store;
