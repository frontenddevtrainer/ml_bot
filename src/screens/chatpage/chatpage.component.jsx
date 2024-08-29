import { useState } from "react";
import { useParams } from "react-router-dom";

const ChatPage = () => {
  const params = useParams();
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Hello! How can I help you?",
      sender: "bot",
    },
  ]);

  const [input, setInput] = useState("");

  const handleSend = () => {
    if (input.trim()) {
      setMessages([
        ...messages,
        {
          id: Date.now(),
          text: input,
          sender: "user",
        },
      ]);
      setInput("")
    }
  };

  return (
    <div className="flex flex-col h-full">
      <div className="flex-1 bg-gray-200 rounded-lg p-4">
        {messages.map((message) => {
          return (
            <div
              key={message.id}
              className={`mb-4 p-4 max-w-xs rounded-md ${
                message.sender === "bot"
                  ? "mr-auto bg-gray-300"
                  : "ml-auto bg-blue-500 text-white"
              }`}
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
          onClick={handleSend}
          className="ml-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-800"
        >
          Send
        </button>
      </div>
    </div>
  );
};
export default ChatPage;
