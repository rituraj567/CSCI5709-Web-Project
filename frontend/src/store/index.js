import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./slices/Counter";

const store = configureStore({
  reducer: {
    //example
    counter: counterSlice,
  },
});

export default store;
