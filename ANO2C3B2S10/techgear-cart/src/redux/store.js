import { createStore, applyMiddleware } from 'redux';
import cartReducer from './cartReducer';
import { composeWithDevTools } from '@redux-devtools/extension';
import logger from 'redux-logger';

// Crie a Store e associe o reducer com redux-logger e Redux DevTools
const store = createStore(cartReducer, composeWithDevTools(applyMiddleware(logger)));

export default store;