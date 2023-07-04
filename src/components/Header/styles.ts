import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
  background-color: var(--background);
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
`;

export const MenuOptions = styled.ul<{ isOpen: boolean }>`
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  position: absolute;
  top: 100%;
  right: 0;
  background-color: pink;
  padding: 8px;
  list-style-type: none;
`;

export const MenuItem = styled.li`
  padding: 8px;
`;