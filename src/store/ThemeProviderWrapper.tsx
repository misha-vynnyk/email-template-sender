import { ThemeProvider } from "styled-components";
import { usePreferredTheme } from "../hooks/usePreferredTheme";
import { ThemeContext } from "./ThemeContext/ThemeContext";
import { GlobalStyle } from "../styles/GlobalStyle";
import { useEffect, useState, type ReactNode } from "react";

export const ThemeProviderWrapper = ({ children }: { children: ReactNode }) => {
  const [theme, toggleTheme, themeMode] = usePreferredTheme();
    const [checked, setChecked] = useState<boolean>(true);
    useEffect(() => {
      const stored = localStorage.getItem("theme");

      if (stored === "dark") {
        setChecked(true);
      } else if (stored === "light") {
        setChecked(false);
      } else {
        localStorage.setItem("theme", "dark");
        setChecked(true);
      }
    }, []);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, themeMode, checked, setChecked }}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};
