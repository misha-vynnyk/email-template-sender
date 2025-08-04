import styled from "styled-components";

export const ModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.4);
  -webkit-backdrop-filter: blur(5px);
  backdrop-filter: blur(5px);
  z-index: 1000;
`;

export const ModalWrapper = styled.div`
  border-radius: 1em;
  max-width: 500px;
  position: relative;
  width: 50%;
  margin: 0 auto;

  @media (prefers-color-scheme: dark) {
    background: #1e1e1e;
    color: white;
  }
`;

export const ModalContent = styled.div`
  margin-top: 1rem;
`;

export const CloseButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  height: 30px;
  width: 30px;
  font-size: 1.5rem;
  border-radius: 50%;
  position: absolute;
  right: 2.5rem;
  top: 3.5rem;
  color: #fa6464;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    background-color: rgba(173, 173, 173, 0.3);
    transition: all 0.3s;
    color: #ff0000;
    -webkit-box-shadow: 8px 8px 24px 0px rgba(66, 68, 90, 0.5);
    -moz-box-shadow: 8px 8px 24px 0px rgba(66, 68, 90, 0.5);
    box-shadow: 8px 8px 24px 0px rgba(66, 68, 90, 0.5);
  }
`;
