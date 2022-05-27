import { configureStore } from '@reduxjs/toolkit';
import layoutReducer from '../layouts/reducer/layoutReducer';
import personalStatisticReducer from '../pages/admin/statistic/personal_statistic/reducer';
import authReducer from '../pages/auth/authReducer/index';
import RequestSlide from '../pages/admin/accept_request/reducer';
import TimeKeepingSlide from "../pages/admin/statistic/timekeeping_table/reducer";

export const store = configureStore({
  reducer: {
    layout: layoutReducer,
    personalStatistic: personalStatisticReducer,
    requestAdmin: RequestSlide,
    timeKeepingAdmin: TimeKeepingSlide,
    authReducer: authReducer,
  },
});
