import { createContext, useContext, useState } from "react";
import axios from "axios";
import { useEffect } from "react";

const ChatsContext = createContext({ chats: [], get: () => {} });
ChatsContext.displayName = "Chat";
const { Provider } = ChatsContext;

export const ChatProvider = ({ children }) => {
  const [chats, setChats] = useState();

  useEffect(() => {
    get();
  }, []);

  const get = async () => {
    try {
      const response = await axios("http://localhost:3000/chats");
      setChats(response.data);
    } catch (error) {
      setChats([]);
    }
  };

  return <Provider value={{ chats, get }}>{children}</Provider>;
};

export const useChats = () => {
  return useContext(ChatsContext);
};
