import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
  background-color: var(--background);
  position: relative;
`;

export const Logo = styled.div`
  font-size: 18px;
  font-weight: bold;
`;

export const MenuButton = styled.button`
  width: 40px;
  height: 40px;
  border: none;
  background-color: var(--gold);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  position: relative;
`;

export const MenuOptions = styled.ul<{ $isOpen: boolean }>`
  display: ${({ $isOpen }) => ($isOpen ? "flex" : "none")};
  position: absolute;
  background-color: var(--background);
  padding: 8px;
  list-style-type: none;
  z-index: 999;
  overflow: hidden;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  transition: transform 300ms;
  transform: translateY(0);
  flex-direction: column;
  align-items: center;
  margin-top: 6rem;
  font-weight: 700;
  font-size: 2.4rem;
  line-height: 3.1rem;
  padding: 2rem;

  .menu-item {
    font-family: "Roboto", sans-serif;
    color: var(--gray);
    text-decoration: none;
    font-size: 1.6rem;
  }
`;
