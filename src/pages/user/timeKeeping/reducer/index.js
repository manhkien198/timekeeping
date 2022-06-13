import { createSlice } from '@reduxjs/toolkit';
export const TimeKeepingUser = createSlice({
  name: 'Time_keeping_user',
  initialState: {
    reloadTable: false,
  },
  reducers: {
    setReloadTalbe: (state, action) => {
      state.reloadTable = !state.reloadTable;
    },
  },
});

export const {
  setReloadTalbe
} = TimeKeepingUser.actions;

export default TimeKeepingUser.reducer;
