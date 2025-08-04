import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html {
    height: 100vh;
  }
  body {
    margin: 0 auto;
    padding: 0;
    box-sizing: border-box;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: ${({ theme }) => theme.colors.text};
    background-image: ${({ theme }) => theme.colors.backgroundImage};
    background-position: top;
    background-size: cover;
    background-repeat: repeat-y;
    transition: "background-color 0.3s ease, color 0.3s ease, border 0.3s ease",
  }

  h1, h2, h3, h4, h5, h6 {
      color: ${({ theme }) => theme.colors.text};
  }
`;
