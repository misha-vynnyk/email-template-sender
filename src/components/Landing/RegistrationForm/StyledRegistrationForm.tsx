import styled from "styled-components";
import type { ThemeMode } from "../../../styles/theme.enum";

export const FormWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 3em 1em;
`;

export const StyledForm = styled.form<{ $themeMode: ThemeMode }>`
  display: flex;
  flex-direction: column;
  gap: 1.5em;
  max-width: 500px;
  width: 100%;
  background-color: ${({ $themeMode }) => ($themeMode === 'light' ? "#f9f9f9" : "#1e1e1e")};
  padding: 2em;
  border-radius: 1em;
  box-shadow: 0 0 1.5em rgba(0, 0, 0, 0.1);
`;

export const StyledTitle = styled.h2`
  text-align: center;
  margin-bottom: 1em;
`;

export const StyledLabel = styled.label`
  font-weight: 600;
  font-size: 0.9rem;
`;

export const StyledInput = styled.input`
  padding: 0.8em 1em;
  border: 1px solid #ccc;
  border-radius: 0.5em;
  font-size: 1rem;
  outline: none;

  &:focus {
    border-color: #3b82f6;
    box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.2);
  }
`;

export const StyledButton = styled.button<{ $themeMode: ThemeMode }>`
  padding: 1em;
  font-weight: bold;
  font-size: 1rem;
  border-radius: 0.75em;
  cursor: pointer;
  transition: 0.3s all;
  border: none;

  ${({ $themeMode }) =>
    $themeMode === 'light'
      ? `
    background-color: #3b82f6;
    color: white;

    &:hover {
      background-color: #2563eb;
    }
  `
      : `
    background-color: #60a5fa;
    color: #1e1e1e;

    &:hover {
      background-color: #3b82f6;
      color: white;
    }
  `}
`;

export const ErrorMessage = styled.p`
  color: red;
  margin-top: -1em;
  font-size: 0.9rem;
  text-align: center;
`;
