import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  getChatMessages,
  sendChatMessage,
} from "../../store/slices/chat.slice";

import usePermissions from "../../hooks/usePermissions"

const ChatPage = () => {
  const { id } = useParams();
  // const { loading, messages, error } = useChatMessages(id)
  // const { loading : sendLoading, data, send } = useChatSendMessage(id);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getChatMessages(id));
  }, [id]);

  const { messages, loading } = useSelector((state) => {
    const { chat } = state;
    const { messages } = chat.messages;
    const loading = chat.loading;
    return { messages, loading };
  });

  const [input, setInput] = useState("");

  const handleSend = () => {
    if (input.trim()) {
      dispatch(sendChatMessage({ id, message: input }));
      setInput("");
    }
  };

  const sendChat = usePermissions("sendchat");

  console.log(sendChat);

  return (
    <div className="flex flex-col h-full">
      <div className="flex-1 bg-gray-200 rounded-lg p-4">
        {loading && "Loading..."}
        {messages &&
          messages.map((message) => {
            return (
              <div
                key={message.id}
                className={`mb-4 p-4 max-w-xs rounded-md ${
                  message.sender === "bot"
                    ? "mr-auto bg-gray-300"
                    : "ml-auto bg-blue-500 text-white"
                } ${message.error ? "text-red-700" : ""}`}
              >
                {message.text}
              </div>
            );
          })}
      </div>
      <div className="mt-4 flex items-center p-4 bg-white rounded-md shadow-md">
        <input
          type="text"
          className="flex-1 p-2 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Type your message..."
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
        <button
          disabled={!sendChat}
          onClick={handleSend}
          className={`ml-4  text-white px-4 py-2 rounded-md  ${!sendChat ? "bg-gray-600" : "bg-blue-500 hover:bg-blue-800"}`}
        >
          Send
        </button>
        {/* <button onClick={()=>{
          dispatch(increase())
        }}>Increase Counter</button> */}
      </div>
    </div>
  );
};
export default ChatPage;
