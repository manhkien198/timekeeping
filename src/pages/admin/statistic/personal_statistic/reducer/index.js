import { createSlice } from '@reduxjs/toolkit';

const personalStatisticReducer = createSlice({
  name: 'layout',
  initialState: {
    users: [],
  },
  reducers: {
    setUsers: (state, action) => {
      state.users = action.payload;
    },
  },
});
const { reducer, actions } = personalStatisticReducer;
export const { setUsers } = actions;
export default reducer;
