import { useEffect, useState, useCallback } from "react";
import { darkGlassmorphicTheme, lightGlassmorphicTheme } from "../styles/theme";
import { ThemeMode } from "../styles/theme.enum";
import type { DefaultTheme } from "styled-components";

const getSystemTheme = (): ThemeMode =>
  window.matchMedia("(prefers-color-scheme: dark)").matches ? ThemeMode.DARK : ThemeMode.LIGHT;

export const usePreferredTheme = (): [DefaultTheme, () => void, ThemeMode] => {
  const [themeMode, setThemeMode] = useState<ThemeMode>(() => {
    const storedRaw = localStorage.getItem("theme");
    if (storedRaw === ThemeMode.DARK || storedRaw === ThemeMode.LIGHT) {
      return storedRaw;
    }
    return getSystemTheme();
  });

  const theme = themeMode === ThemeMode.DARK ? darkGlassmorphicTheme : lightGlassmorphicTheme;

  const toggleTheme = useCallback(() => {
    setThemeMode((prev) => {
      const newMode = prev === ThemeMode.DARK ? ThemeMode.LIGHT : ThemeMode.DARK;
      localStorage.setItem("theme", newMode);
      return newMode;
    });
  }, []);

  useEffect(() => {
    const listener = (e: MediaQueryListEvent) => {
      if (!localStorage.getItem("theme")) {
        setThemeMode(e.matches ? ThemeMode.DARK : ThemeMode.LIGHT);
      }
    };
    const media = window.matchMedia("(prefers-color-scheme: dark)");
    media.addEventListener("change", listener);
    return () => media.removeEventListener("change", listener);
  }, []);

  return [theme, toggleTheme, themeMode];
};
