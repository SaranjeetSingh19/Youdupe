import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import youtubeVidSlice from "./youtubeVidSlice";
import searchApiSlice from "./searchApiSlice";


const store = configureStore({
  reducer: {
    app: appSlice,
    yVids: youtubeVidSlice,
    search: searchApiSlice 
  },
});

export default store;

