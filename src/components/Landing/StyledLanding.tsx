import styled from "styled-components";

export const StyledLandingPage = styled.div`
  margin: 3rem auto;
  background-color: ${({ theme }) => theme.colors.cardBackgroundBlur};
  max-width: 600px;
  border-radius: 16px;
`;

export const StyledMainImg = styled.img`
  width: 100%;
  max-height: 300px;
`;

export const StyledMainDescription = styled.p`
  text-align: center;
  font-size: 1.2rem;
  margin: 2rem 3rem;
`;

export const StyledMainTitle = styled.h2`
  text-align: center;
  padding-bottom: 1.5rem;
`;
