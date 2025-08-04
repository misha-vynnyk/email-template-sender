import styled from "styled-components";
import { ThemeMode } from "../../styles/theme.enum";

type StyledButtonProps = {
  glowColor?: string;
  $size?: "small" | "medium" | "large";
  $themeMode: ThemeMode;
};

export const StyledButton = styled.button<StyledButtonProps>`
  ${({ $size }) => `
    padding: ${$size === "small" ? "0.5em 1.5em" : $size === "large" ? "1.25em 3.5em" : "1em 3em"};
    font-size: ${$size === "small" ? "12px" : $size === "large" ? "18px" : "15px"};
  `}

  /* Кольори в залежності від теми */
  ${({ $themeMode }) => {
    if ($themeMode === ThemeMode.LIGHT) {
      return `
        --glow-color: #3b82f6; /* блакитний */
        --glow-spread-color: rgba(59, 130, 246, 0.5);
        --enhanced-glow-color: #60a5fa;
        --btn-color: #e0f2fe; /* світло-блакитний фон */
        border: 0.25em solid var(--glow-color);
        color: var(--glow-color);
        background-color: var(--btn-color);
        box-shadow: 0 0 8px 2px var(--glow-color);
        text-shadow: none;
      `;
    } else {
      // Темна тема (default)
      return `
        --glow-color: rgb(176, 252, 255);
        --glow-spread-color: rgba(123, 251, 255, 0.781);
        --enhanced-glow-color: rgb(206, 255, 255);
        --btn-color: rgb(61, 127, 136);
        border: 0.25em solid var(--glow-color);
        color: var(--glow-color);
        background-color: var(--btn-color);
        box-shadow: 0 0 1em 0.25em var(--glow-color), 0 0 4em 1em var(--glow-spread-color),
          inset 0 0 0.75em 0.25em var(--glow-color);
        text-shadow: 0 0 0.5em var(--glow-color);
      `;
    }
  }}

  border-radius: 1em;
  outline: none;
  position: relative;
  cursor: pointer;
  transition: all 0.3s;
  margin-right: 2rem;

  &::after {
    pointer-events: none;
    content: "";
    position: absolute;
    top: 120%;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: var(--glow-spread-color);
    filter: blur(2em);
    opacity: 0.7;
    transform: perspective(1.5em) rotateX(35deg) scale(1, 0.6);

    animation: pulse 2s infinite ease-in-out;

    @keyframes pulse {
      0%,
      100% {
        box-shadow: 0 0 1em 0.25em var(--glow-color), 0 0 4em 1em var(--glow-spread-color),
          inset 0 0 0.75em 0.25em var(--glow-color);
      }
      50% {
        box-shadow: 0 0 1.5em 0.4em var(--glow-color), 0 0 6em 2em var(--glow-spread-color),
          inset 0 0 1em 0.3em var(--glow-color);
      }
    }
  }

  &:hover {
    color: ${({ $themeMode }) => ($themeMode === ThemeMode.LIGHT ? "#e0f2fe" : "var(--btn-color)")};
    background-color: ${({ $themeMode }) =>
      $themeMode === ThemeMode.LIGHT ? "var(--glow-color)" : "var(--glow-color)"};
    box-shadow: 0 0 1em 0.25em var(--glow-color), 0 0 4em 2em var(--glow-spread-color),
      inset 0 0 0.75em 0.25em var(--glow-color);
  }

  transition: transform 0.1s ease-out, all 0.3s;

  min-width: 6.5rem;

  @media (max-width: 425px) {
    margin-right: 1rem;
  }
`;
