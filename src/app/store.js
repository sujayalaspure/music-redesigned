import { configureStore } from "@reduxjs/toolkit";
import { musicApi } from "../services/musicApi";
import { radioApi } from "../services/radioApi";
import { radioBrowserApi } from "../services/radioBrowserApi";

export default configureStore({
  reducer: {
    [musicApi.reducerPath]: musicApi.reducer,
    [radioApi.reducerPath]: radioApi.reducer,
    [radioBrowserApi.reducerPath]: radioBrowserApi.reducer,
  },
});
