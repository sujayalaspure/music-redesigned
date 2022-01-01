import { configureStore } from "@reduxjs/toolkit";
import { musicApi } from "../services/musicApi";
import { radioApi } from "../services/radioApi";

export default configureStore({
  reducer: {
    [musicApi.reducerPath]: musicApi.reducer,
    [radioApi.reducerPath]: radioApi.reducer,
  },
});
