import { configureStore } from '@reduxjs/toolkit';
import layoutReducer from '../layouts/reducer/layoutReducer';
import  RequestSlide  from "../pages/admin/accept_request/reducer";
export const store = configureStore({
  reducer: {
    layout: layoutReducer,
    requestAdmin: RequestSlide
  },
});
