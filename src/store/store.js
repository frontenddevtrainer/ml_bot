import { configureStore } from "@reduxjs/toolkit";
import applicationSlice from "./slices/application.slice";

const store = configureStore({
  reducer: {
    application: applicationSlice.reducer,
  },
});

export default store;
