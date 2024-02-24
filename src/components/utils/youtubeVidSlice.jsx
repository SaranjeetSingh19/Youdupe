import { createSlice } from "@reduxjs/toolkit";

const youtubeVidSlice = createSlice({
  name: "yVids",
  initialState: {
    youtubeVideos: null,
  },
  reducers: {
    addYoutubeVideos: (state, action) => {
      state.youtubeVideos = action.payload;
    },
  },
});

export const { addYoutubeVideos } = youtubeVidSlice.actions;
export default youtubeVidSlice.reducer;
