export const ThemeMode = {
  DARK: "dark",
  LIGHT: "light",
} as const;

export type ThemeMode = (typeof ThemeMode)[keyof typeof ThemeMode];
