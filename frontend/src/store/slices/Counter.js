import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: { value: 0 },
  reducers: {
    increaseCounter(state, action) {
      state.value += 1;
    },
    decreaseCounter(state, action) {
      state.value -= 1;
    },
    removeCounter(state, action) {
      return { value: 0 };
    },
  },
});

export default counterSlice.reducer;

export const { increaseCounter, decreaseCounter, removeCounter } =
  counterSlice.actions;
