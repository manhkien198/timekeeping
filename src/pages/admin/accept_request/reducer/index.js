import { createSlice } from '@reduxjs/toolkit';
export const RequestSlide = createSlice({
  name: 'accept request',
  initialState: {
    dataRequest: [],
    reloadTable: false,
    pagination: {},
  },
  reducers: {
    getAllRequest: (state, action) => {
      state.dataRequest = action.payload;
    },
    setReloadTalbe: (state, action) => {
      state.reloadTable = !state.reloadTable;
    },
    setPagnation: (state,action) =>{
      state.pagination = action.payload
    }
  },
});

// Action creators are generated for each case reducer function
export const {
  getAllRequest,
  setReloadTalbe,
  setPagnation
} = RequestSlide.actions;

export default RequestSlide.reducer;
