import { createSlice } from '@reduxjs/toolkit';

const layoutReducer = createSlice({
  name: 'layout',
  initialState: {
    isAdmin: true,
  },
  reducers: {
    setIsAdmin: (state, action) => {
      state.isAdmin = action.payload;
    },
  },
});
const { reducer, actions } = layoutReducer;
export const { setIsAdmin } = actions;
export default reducer;
