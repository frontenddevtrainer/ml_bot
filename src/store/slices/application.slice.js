import { createSlice } from "@reduxjs/toolkit";

const applicationSlice = createSlice({
  name: "application",
  initialState: { counter: 0 },
  reducers: {
    increase: (state) => {
      state.counter = state.counter + 1;
    },
    decrease: () => {
      state.counter = state.counter - 1;
    },
  },
});

export default applicationSlice