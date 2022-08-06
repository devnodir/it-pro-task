import { configureStore } from "@reduxjs/toolkit";
import task1Slice from "./slices/task1Slice";

const store = configureStore({
     devTools: true,
     reducer: {
          task1: task1Slice.reducer,
     }
});

// types of store reducers
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;