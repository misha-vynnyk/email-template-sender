export interface Theme {
  colors: {
    background: string;
    text: string;
    primary: string;
    secondary: string;
    border: string;
    cardBackground: string;
    cardBackgroundBlur: string;
    backgroundImage: string;
    success: string;
    error: string;
    focus: string;
    name: string;
  };
  glassmorphism: {
    blur: string;
    borderRadius: string;
  };
  neonGlow: string;
}

const createTheme = (themeConfig: Theme): Theme => themeConfig;

export const darkGlassmorphicTheme = createTheme({
  colors: {
    background: "#393E46",
    backgroundImage: "linear-gradient(to right, #393E46 0%, black 100%)",
    text: "#F8FAFC",
    primary: "#6366F1",
    secondary: "#A3E635",
    border: "rgba(248, 250, 252, 0.1)",
    cardBackground: "rgba(30, 41, 59, 0.6)",
    cardBackgroundBlur: "#1E293B",
    success: "#4ADE80",
    error: "#EF4444",
    focus: "#6366F1",
    name: "dark",
  },
  glassmorphism: {
    blur: "10px",
    borderRadius: "12px",
  },
  neonGlow: "0 0 15px #A3E635, 0 0 30px #A3E635",
});

export const lightGlassmorphicTheme = createTheme({
  colors: {
    background: "#DBE2EF",
    backgroundImage: "linear-gradient(to top, #DBE2EF 0%, #e2ebf0 100%)",
    text: "#0F172A",
    primary: "#6366F1",
    secondary: "#9333EA",
    border: "rgba(15, 23, 42, 0.1)",
    cardBackground: "rgba(255, 255, 255, 0.6)",
    cardBackgroundBlur: "#FFFFFF",
    success: "#16A34A",
    error: "#DC2626",
    focus: "#9333EA",
    name: "light",
  },
  glassmorphism: {
    blur: "10px",
    borderRadius: "12px",
  },
  neonGlow: "0 0 15px #9333EA, 0 0 30px #9333EA",
});
