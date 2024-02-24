import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import youtubeVidSlice from "./youtubeVidSlice";


const store = configureStore({
  reducer: {
    app: appSlice,
    yVids: youtubeVidSlice,
  },
});

export default store;

