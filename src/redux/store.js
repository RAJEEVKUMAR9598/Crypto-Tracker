import { configureStore } from '@reduxjs/toolkit';
import cryptoReducer from './cryptoSlice';
import converterReducer from './converterSlice';

export const store = configureStore({
  reducer: {
    crypto: cryptoReducer,
    converter: converterReducer,
  },
});
