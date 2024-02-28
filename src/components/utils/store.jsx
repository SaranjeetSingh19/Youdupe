import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import youtubeVidSlice from "./youtubeVidSlice";
import searchApiSlice from "./searchApiSlice";
import liveChatSlice from "./liveChatSlice";


const store = configureStore({
  reducer: {
    app: appSlice,
    yVids: youtubeVidSlice,
    search: searchApiSlice,
    liveChat: liveChatSlice 
  },
});

export default store;

