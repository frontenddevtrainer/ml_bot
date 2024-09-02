import { createContext, useContext, useState } from "react";

export const ThemeOptions = {
  LIGHT: "light",
  DARK: "dark",
};

export const ThemeContext = createContext({
  theme: ThemeOptions.LIGHT,
  change: () => {},
});

const { Provider } = ThemeContext;

ThemeContext.displayName = "Theme"

// HOC - Higher Order Component
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(ThemeOptions.LIGHT);

  const change = (theme) => {
    setTheme(theme);
  };

  return <Provider value={{ theme, change }}>{children}</Provider>
};

export const useTheme = () => {
  return useContext(ThemeContext)
};
