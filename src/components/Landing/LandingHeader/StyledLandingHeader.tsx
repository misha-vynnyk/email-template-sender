import { Link } from "react-router-dom";
import styled from "styled-components";

interface StyledLinkProps {
  $size?: "small" | "medium" | "large";
}

export const Wrapper = styled.div`
  display: flex;
  padding: 0 20px;
  gap: 10px;
`;

export const StyledLandingHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const StyledName = styled.h2`
  font-size: 1.2rem;

  @media (max-width: 450px) {
    display: none;
  }
`;

export const StyledLink = styled(Link)<StyledLinkProps>`
  display: inline-block;
  color: inherit;
  background-color: ${({ theme }) => theme.colors.cardBackgroundBlur};
  border: none;
  padding: 6px 12px;
  font-size: 12px;
  font-weight: 600;
  max-width: 5rem;
  text-transform: uppercase;
  cursor: pointer;
  transform: skew(-21deg);

  span {
    display: inline-block;
    transform: skew(21deg);
  }
  &::before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    right: 100%;
    left: 0;
    background: rgb(20, 20, 20);
    opacity: 0;
    z-index: -1;
    transition: all 0.5s;
  }

  &:hover {
    color: #ffffff;
  }

  &:hover::before {
    left: 0;
    right: 0;
    opacity: 1;
  }
`;
