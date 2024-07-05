// src/store.js
import { configureStore } from '@reduxjs/toolkit';
import countReducer from './reducer';



const store = configureStore({
    reducer: {
      counter: countReducer,
    },
  });
  
  export default store;
