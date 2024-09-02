import { Link } from "react-router-dom";
import { ThemeOptions, useTheme } from "../../hooks/useTheme";
import classNames from "classnames";
import { useChats } from "../../hooks/useChat";

const ChatGrid = () => {
  const { theme } = useTheme();

  const containerClasses = classNames(
    "p-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4",
    {
      "bg-white": theme === ThemeOptions.LIGHT,
      "bg-slate-400": theme === ThemeOptions.DARK,
    }
  );

  const gridItemClass = classNames(" p-6 rounded-lg shadow-md", {
    "bg-white": theme === ThemeOptions.LIGHT,
    "bg-slate-600": theme === ThemeOptions.DARK,
  });

  const { chats, get } = useChats();
  return (
    <div className={containerClasses}>
      {chats &&
        chats.map((chat) => {
          return (
            <div key={chat.id} className={gridItemClass}>
              <p className="text-center text-gray-800">
                <Link to={`/chat/${chat.id}`}>{chat.heading}</Link>
              </p>
            </div>
          );
        })}

        <button onClick={get}>Refresh</button>
    </div>
  );
};

export default ChatGrid;
