import { createSlice } from '@reduxjs/toolkit';

const personalStatisticReducer = createSlice({
  name: 'layout',
  initialState: {
    users: [],
    reasonTypeList: [],
  },
  reducers: {
    setUsers: (state, action) => {
      state.users = action.payload;
    },
    setReasonTypeList: (state, action) => {
      state.reasonTypeList = action.payload;
    },
  },
});
const { reducer, actions } = personalStatisticReducer;
export const { setUsers, setReasonTypeList } = actions;
export default reducer;
