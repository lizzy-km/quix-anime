import { configureStore } from "@reduxjs/toolkit";
import { AnimeApi } from "./AnimeApi";
import { animateSlice } from "./animateSlice";

export const store = configureStore({
  reducer: {
    // Add the generated reducer as a specific top-level slice
    // [authApi.reducerPath]: authApi.reducer,
    [AnimeApi.reducerPath]: AnimeApi.reducer,

    // authSlice: authSlice,
    animateSlice: animateSlice
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(AnimeApi.middleware),
});
