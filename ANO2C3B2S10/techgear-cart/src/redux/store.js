import { createStore } from 'redux';
import cartReducer from './cartReducer';

// Crie a Store e associe o reducer
const store = createStore(cartReducer);

export default store;