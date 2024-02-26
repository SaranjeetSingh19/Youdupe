import { createSlice } from "@reduxjs/toolkit";

const searchApiSlice = createSlice({
  name: "search",
  initialState: {},
  reducers: {
    cacheResults: (state, action) => {
      state = Object.assign(state, action.payload)
    },
  },
});

export const { cacheResults } = searchApiSlice.actions;
export default searchApiSlice.reducer;
