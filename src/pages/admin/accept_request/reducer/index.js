import { createSlice } from '@reduxjs/toolkit';
export const RequestSlide = createSlice({
  name: 'accept request',
  initialState: {
    dataRequest: [],
    reloadTable: false,

  },
  reducers: {
    getAllRequest: (state, action) => {
      state.dataPosition = action.payload;
    },
    setReloadTalbe: (state, action) => {
      state.reloadTable = !state.reloadTable;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  getAllRequest,
  setReloadTalbe
} = RequestSlide.actions;

export default RequestSlide.reducer;
