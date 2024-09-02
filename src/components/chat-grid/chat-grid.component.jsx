import { Link } from "react-router-dom";
import { ThemeOptions, useTheme } from "../../hooks/useTheme";

const ChatGrid = () => {
  const { theme } = useTheme();

  const chats = [
    {
      id: 1,
      heading: "how to create react component",
    },
    {
      id: 2,
      heading: "distance to moon",
    },
    {
      id: 3,
      heading: "convert miles to kilometer",
    },
  ];
  return (
    <div
      className={`p-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 ${
        theme === ThemeOptions.LIGHT ? "bg-white" : "bg-slate-400"
      }`}
    >
      {chats.map((chat) => {
        return (
          <div key={chat.id} className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-center text-gray-800">
              <Link to={`/chat/${chat.id}`}>{chat.heading}</Link>
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default ChatGrid;
