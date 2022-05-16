import { configureStore } from '@reduxjs/toolkit';
import layoutReducer from '../layouts/reducer/layoutReducer';
export const store = configureStore({
  reducer: {
    layout: layoutReducer,
  },
});
