import { useSelector } from "react-redux";
import { ThemeOptions, useTheme } from "../../hooks/useTheme";

const Header = () => {
  const { theme, change } = useTheme()

  // state = store
  const messages = useSelector((state) => {
    const { chat } = state;
    const { messages } = chat.messages;
    return messages;
  });

  const changeTheme = () => {
    change(
      theme === ThemeOptions.LIGHT ? ThemeOptions.DARK : ThemeOptions.LIGHT
    );
  };

  return (
    <header
      className={`flex justify-between items-cente p-4 rounded-md shadow-md mb-8 ${
        theme === ThemeOptions.LIGHT ? "bg-white" : "bg-slate-700"
      }`}
    >
      <div className="flex items-center">
        <h1 className="text-xl font-semibold">ChatBot</h1>
      </div>
      <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-800">
        +
      </button>
      <button onClick={changeTheme}>Change Theme</button>
      Total messages: {messages ? messages.length : 0}
    </header>
  );
};

export default Header;
