import { createSlice } from '@reduxjs/toolkit'

export const mainSlice = createSlice({
  name: 'main',
  initialState: {
    url: "https://www.youtube.com/embed/32oT-CWJOC0"
  },
  reducers: {
    updateURL: state => {
      state.url = "";
    },
  }
})

export const mainActions = mainSlice.actions;
export const mainReducer = mainSlice.reducer;