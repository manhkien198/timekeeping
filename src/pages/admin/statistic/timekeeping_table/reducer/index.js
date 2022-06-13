import { createSlice } from '@reduxjs/toolkit';
export const TimeKeepingSlide = createSlice({
  name: 'accept request',
  initialState: {
    dataRequest: [],
    reloadTable: false,
    pagination: {},
  },
  reducers: {
    getAll: (state, action) => {
      state.dataRequest = action.payload;
    },
    setReloadTalbe: (state, action) => {
      state.reloadTable = !state.reloadTable;
    },
    setPagnation: (state,action) =>{
      state.totalPage = action.payload
    }
  },
});

// Action creators are generated for each case reducer function
export const {
  getAllRequest,
  setReloadTalbe,
  setPagnation
} = TimeKeepingSlide.actions;

export default TimeKeepingSlide.reducer;
