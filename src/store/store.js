import { configureStore } from "@reduxjs/toolkit";
import applicationSlice from "./slices/application.slice";
import { reducer as ChatReducer } from "./slices/chat.slice";
const store = configureStore({
  reducer: {
    application: applicationSlice.reducer,
    chat: ChatReducer,
  },
});

export default store;
