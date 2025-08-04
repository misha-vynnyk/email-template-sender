import styled from "styled-components";
import type { ThemeMode } from "../../styles/theme.enum";

type StyledHeaderProps = {
  $themeMode: ThemeMode;
};

export const StyledHeader = styled.header<StyledHeaderProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 1rem auto;
  max-width: 80%;
  height: 4rem;
  padding: 0 1.5rem;
  border-radius: 2rem;

  @media screen and (max-width: 700px) {
  }

  ${({ $themeMode }) => {
    const isDark = $themeMode === "dark";
    return `
      background: ${isDark ? "rgba(255, 255, 255, 0.05)" : "rgba(255, 255, 255, 0.6)"};
      box-shadow: ${isDark ? "0 4px 20px rgba(0, 0, 0, 0.3)" : "0 4px 20px rgba(0, 0, 0, 0.1)"};
      border: 1px solid ${isDark ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.1)"};
    `;
  }}

  backdrop-filter: blur(20px);
  transition: all 0.3s ease;

  .three-body {
    --uib-size: 12px;
    --uib-speed: 0.8s;
    --uib-color: #5d3fd3;
    position: relative;
    display: inline-block;
    height: var(--uib-size);
    width: var(--uib-size);
    animation: spin78236 calc(var(--uib-speed) * 2.5) infinite linear;
  }

  .three-body__dot {
    position: absolute;
    height: 100%;
    width: 30%;
  }

  .three-body__dot:after {
    content: "";
    position: absolute;
    height: 0%;
    width: 100%;
    padding-bottom: 100%;
    background-color: var(--uib-color);
    border-radius: 50%;
  }

  .three-body__dot:nth-child(1) {
    bottom: 5%;
    left: 0;
    transform: rotate(60deg);
    transform-origin: 50% 85%;
  }

  .three-body__dot:nth-child(1)::after {
    bottom: 0;
    left: 0;
    animation: wobble1 var(--uib-speed) infinite ease-in-out;
    animation-delay: calc(var(--uib-speed) * -0.3);
  }

  .three-body__dot:nth-child(2) {
    bottom: 5%;
    right: 0;
    transform: rotate(-60deg);
    transform-origin: 50% 85%;
  }

  .three-body__dot:nth-child(2)::after {
    bottom: 0;
    left: 0;
    animation: wobble1 var(--uib-speed) infinite calc(var(--uib-speed) * -0.15) ease-in-out;
  }

  .three-body__dot:nth-child(3) {
    bottom: -5%;
    left: 0;
    transform: translateX(116.666%);
  }

  .three-body__dot:nth-child(3)::after {
    top: 0;
    left: 0;
    animation: wobble2 var(--uib-speed) infinite ease-in-out;
  }

  @keyframes spin78236 {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes wobble1 {
    0%,
    100% {
      transform: translateY(0%) scale(1);
      opacity: 1;
    }

    50% {
      transform: translateY(-66%) scale(0.65);
      opacity: 0.8;
    }
  }

  @keyframes wobble2 {
    0%,
    100% {
      transform: translateY(0%) scale(1);
      opacity: 1;
    }

    50% {
      transform: translateY(66%) scale(0.65);
      opacity: 0.8;
    }
  }
`;

export const StyledCheckboxWrapper = styled.div<StyledHeaderProps>`
  ${({ $themeMode }) => {
    const isDark = $themeMode === "dark";
    return `
      --bg: ${isDark ? "rgba(255, 255, 255, 0.05)" : "rgba(255, 255, 255, 0.6)"};
      box-shadow: ${isDark ? "0 4px 20px rgba(0, 0, 0, 0.3)" : "0 4px 20px rgba(0, 0, 0, 0.1)"};
      border: 1px solid ${isDark ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.1)"};
      --text: ${isDark ? "#e5e5e5" : "#000000"};
    `;
  }}

  display: flex;
  position: relative;
  background: var(--bg);
  border-radius: 1rem;
  backdrop-filter: blur(12px);
  box-shadow: inset 1px 1px 4px rgba(255, 255, 255, 0.2), inset -1px -1px 6px rgba(0, 0, 0, 0.3),
    0 4px 12px rgba(0, 0, 0, 0.15);
  overflow: hidden;
  width: fit-content;

  input {
    display: none;
  }

  label {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 60px;
    font-size: 14px;
    padding: 0.6rem 1rem;
    cursor: pointer;
    font-weight: 600;
    letter-spacing: 0.3px;
    color: var(--text);
    position: relative;
    z-index: 2;
    transition: color 0.3s ease-in-out;
  }

  label:hover {
    color: ${({ $themeMode }) => ($themeMode === "dark" ? "#ffffff" : "#131212f6")};
  }

  input:checked + label {
    color: ${({ $themeMode }) => ($themeMode === "dark" ? "#ffffff" : "#303030f6")};
  }

  .glass-glider {
    position: absolute;
    top: 0;
    bottom: 0;
    width: calc(100% / 3);
    border-radius: 1rem;
    z-index: 1;
    transition: transform 0.5s cubic-bezier(0.37, 1.95, 0.66, 0.56), background 0.4s ease-in-out,
      box-shadow 0.4s ease-in-out;
  }

  /* Silver */
  #glass-silver:checked ~ .glass-glider {
    transform: translateX(0%);
    background: linear-gradient(135deg, #c0c0c055, #e0e0e0);
    box-shadow: 0 0 18px rgba(192, 192, 192, 0.5), 0 0 10px rgba(255, 255, 255, 0.4) inset;
  }

  /* Gold */
  #glass-gold:checked ~ .glass-glider {
    transform: translateX(100%);
    background: linear-gradient(135deg, #ffd70055, #ffcc00);
    box-shadow: 0 0 18px rgba(255, 215, 0, 0.5), 0 0 10px rgba(255, 235, 150, 0.4) inset;
  }

  /* Platinum */
  #glass-platinum:checked ~ .glass-glider {
    transform: translateX(200%);
    background: linear-gradient(135deg, #d0e7ff55, #a0d8ff);
    box-shadow: 0 0 18px rgba(160, 216, 255, 0.5), 0 0 10px rgba(200, 240, 255, 0.4) inset;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;
