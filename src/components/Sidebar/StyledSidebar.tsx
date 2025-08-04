import styled from "styled-components";

export const BurgerIcon = styled.button`
  font-size: 2rem;
  background: none;
  border: none;
  display: none;
  cursor: pointer;


  @media (max-width: 768px) {
    display: block;
    margin-right: auto;
  }
`;

export const StyledSidebar = styled.div`
  inset: 0;
  background: rgba(0, 0, 0, 0.6);
  inset: 0;
  position: fixed;
  z-index: 9999;
  background: rgba(0, 0, 0, 0.6);
`;

export const SidebarMenu = styled.div`
  background: white;
  width: 80%;
  max-width: 300px;
  height: 100%;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9;
  overflow-y: auto;
  box-shadow: 2px 0 10px rgba(0, 0, 0, 0.2);

  button {
    align-self: flex-end;
    font-size: 1.5rem;
    background: none;
    border: none;
    cursor: pointer;
  }
`;
