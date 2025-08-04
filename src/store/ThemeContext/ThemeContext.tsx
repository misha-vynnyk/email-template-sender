import { createContext, useContext } from "react";
import type { DefaultTheme } from "styled-components";
import type { ThemeMode } from "../../styles/theme.enum";

interface ThemeContextType {
  theme: DefaultTheme;
  toggleTheme: () => void;
  themeMode: ThemeMode;
  checked: boolean;
  setChecked: React.Dispatch<React.SetStateAction<boolean>>;
}

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useThemeContext = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useThemeContext must be used within a ThemeProvider");
  }
  return context;
};
