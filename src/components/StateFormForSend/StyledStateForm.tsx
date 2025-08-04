import styled from "styled-components";

export const StyledStateForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  margin-bottom: 1rem;
  gap: 1rem;
  background: ${({ theme }) => theme.colors.cardBackground};
  padding: 2rem;
  border-radius: 8px;
  max-width: 400px;
  width: 100%;

  box-shadow: 0 40px 80px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(12px);
  transition: all 0.3s ease-in-out;
  label {
    display: flex;
    flex-direction: column;
    font-weight: 500;
    font-size: 14px;
    color: ${({ theme }) => theme.colors.text};
  }

  input {
    margin-top: 0.25rem;
    padding: 0.5rem;
    font-size: 14px;
    border: 1px solid ${({ theme }) => theme.colors.border};
    border-radius: 4px;
    background: ${({ theme }) => theme.colors.cardBackgroundBlur};
    color: ${({ theme }) => theme.colors.text};
  }

  button {
    margin-top: 1rem;
    padding: 0.6rem 1rem;
    background: ${({ theme }) => theme.colors.primary};
    color: white;
    font-weight: bold;
    border: none;
    border-radius: 4px;
    cursor: pointer;

    &:hover {
      opacity: 0.9;
    }
  }
`;
