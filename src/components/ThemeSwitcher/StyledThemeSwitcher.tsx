import styled from "styled-components";

export const ThemeWrapper = styled.label`
  display: flex;
  align-items: center;
  -webkit-tap-highlight-color: transparent;
`;

export const ToggleWrap = styled.span`
  position: relative;
  margin: 0 0.75em;
`;

export const Toggle = styled.input`
  position: relative;
  background-color: hsl(48, 90%, 85%);
  border-radius: 25% / 50%;
  box-shadow: 0 0 0 0.125em var(--primaryT);
  padding: 0.25em;
  width: 6em;
  height: 3em;
  appearance: none;
  transition: background-color var(--transDur) ease-in-out, box-shadow 0.15s ease-in-out,
    transform var(--transDur) ease-in-out;

  &:before {
    content: "";
    position: absolute;
    background-color: hsl(48, 90%, 55%);
    border-radius: 50%;
    width: 2.5em;
    height: 2.5em;
    transition: 0.3s;
  }

  &:focus {
    box-shadow: 0 0 0 0.125em var(--primary);
    outline: transparent;
  }

  &:checked {
    background-color: hsl(198, 90%, 15%);
  }

  &:checked:before {
    transform: translateX(3em);
    background-color: hsl(198, 90%, 55%);
  }
`;

export const Fill = styled.span`
  background-color: var(--bg);
  display: block;
  mix-blend-mode: difference;
  position: fixed;
  inset: 0;
  height: 100%;
  transform: translateX(-100%);
  transition: 0.3s;
`;

export const Icon = styled.span`
  z-index: 1;
  position: absolute;
  top: 0.65em;
  left: 0.7em;
  width: 1.5em;
  height: 1.5em;
`;

export const IconPart = styled.span`
  position: absolute;
  top: calc(50% - 0.5em);
  left: calc(50% - 0.5em);
  width: 1em;
  height: 1em;
  border-radius: 50%;
  box-shadow: 0.4em -0.4em 0 0.5em hsl(0, 0%, 100%) inset;
  transform: scale(0.5);
  transition: box-shadow var(--transDur) ease-in-out, opacity var(--transDur) ease-in-out,
    transform var(--transDur) ease-in-out;
`;
