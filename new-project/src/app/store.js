import { configureStore } from "@reduxjs/toolkit";
import countersReducer from "../features/counters/counterSlice";

export const store = configureStore({
  reducer: {
    counters: countersReducer,
  },
});
