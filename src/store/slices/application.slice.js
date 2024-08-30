import { createSlice } from "@reduxjs/toolkit";

const applicationSlice = createSlice({
  name: "application",
  initialState: { counter: 0 },
  reducers: {
    increase: (state) => {
      state.counter = state.counter + 1;
    },
    decrease: (state) => {
      state.counter = state.counter - 1;
    },
  },
});

const { increase, decrease } = applicationSlice.actions

export {
    increase,
    decrease
}

export default applicationSlice