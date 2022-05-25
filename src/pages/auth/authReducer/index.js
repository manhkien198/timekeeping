import { createSlice } from '@reduxjs/toolkit';

const authReducer = createSlice({
  name: 'layout',
  initialState: {
    username: '',
  },
  reducers: {
    setUsername: (state, action) => {
      state.users = action.payload;
    },
  },
});
const { reducer, actions } = authReducer;
export const { setUsername } = actions;
export default reducer;
