import { configureStore } from '@reduxjs/toolkit';
import layoutReducer from '../layouts/reducer/layoutReducer';
import personalStatisticReducer from '../pages/admin/statistic/personal_statistic/reducer'
import authReducer from '../pages/auth/authReducer/index'
export const store = configureStore({
  reducer: {
    layout: layoutReducer,
    personalStatistic: personalStatisticReducer,
    authReducer: authReducer
  },
});
