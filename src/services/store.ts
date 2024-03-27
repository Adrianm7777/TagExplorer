import { configureStore } from "@reduxjs/toolkit";
import { tagApi } from "./slices/tags/tags";

export const store = configureStore({
  reducer: {
    [tagApi.reducerPath]: tagApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(tagApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = ReturnType<typeof store.dispatch>;
export default store;
