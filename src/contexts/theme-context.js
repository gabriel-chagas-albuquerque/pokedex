import { createContext, useState } from "react";

export const themes = {
  light: {
    color: "#000000",
    background: "#eeeeee",
  },
  dark: {
    color: "#fff",
    background: "#333333",
  },
};

export const ThemeContext = createContext();

export const ThemeProvider = (props) => {
  const [theme, setTheme] = useState(themes.light);
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
};
