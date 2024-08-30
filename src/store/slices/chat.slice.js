import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const getChatMessages = createAsyncThunk("chat/getmessages", async (id) => {
  try {
    const response = await axios.get(`http://localhost:3000/chats/${id}`);
    return response.data;
  } catch (error) {
    return [];
  }
});

const sendChatMessage = createAsyncThunk(
  "chat/sendmessages",
  async (payload) => {
    const { id, message } = payload;
    try {
      const response = await axios.post(`http://localhost:3000/chats/${id}`, {
        message,
      });
      return response.data;
    } catch (error) {
      return {};
    }
  }
);

const chatSlice = createSlice({
  name: "chat",
  initialState: {
    messages: {},
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getChatMessages.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(getChatMessages.fulfilled, (state, action) => {
      state.loading = false;
      state.messages = action.payload;
    });

    builder.addCase(getChatMessages.rejected, (state, action) => {
      state.loading = false;
      state.messages = action.payload;
      state.error = "API error";
    });

    builder.addCase(sendChatMessage.pending, (state, action) => {
      state.loading = true;
      state.messages.messages.push({ id: Date.now(), text: action.meta.arg.message });
    });

    builder.addCase(sendChatMessage.fulfilled, (state, action) => {
      state.loading = false;
      console.log(state.messages.messages.at(-1).error = true);
    });

    builder.addCase(sendChatMessage.rejected, (state, action) => {
      state.loading = false;
      
    });
  },
});

const { actions, reducer } = chatSlice;
const {} = actions;
export { reducer, getChatMessages, sendChatMessage };
export default chatSlice;
