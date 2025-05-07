import { configureStore } from '@reduxjs/toolkit';
import contactReducer from './contactSlice';
import loaderReducer from './loaderSlice';

const store = configureStore({
  reducer: {
    contacts: contactReducer,
    loader: loaderReducer
  },
});

export default store;