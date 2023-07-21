import styled from "styled-components";

export const HeaderContainer = styled.header`
  position: relative;
  background-color: var(--background);
  @media screen and (min-width: 968px) {
    padding: 2rem 3rem;
  }
`;

export const MainContainer = styled.div`
  max-width: 1240px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  @media screen and (max-width: 968px) {
    padding: 2rem 2rem;
  }
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
  @media screen and (min-width: 968px) {
    display: none;
  }
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
  transition: transform 300ms;
  transform: translateY(0);
  justify-content: start;
  flex-direction: column;
  align-items: start;
  gap: 1.6rem;
  margin-top: 6rem;
  font-weight: 700;
  font-size: 2.4rem;
  line-height: 3.1rem;
  padding: 2rem;

  .menu-item,
  li {
    font-family: "Roboto", sans-serif;
    color: var(--gray);
    text-decoration: none;
    font-size: 1.6rem;
    cursor: pointer;
    :hover {
      opacity: 0.7;
    }
  }

  @media screen and (min-width: 968px) {
    position: relative;
    width: 100%;
    display: flex;
    justify-content: end;
    flex-direction: row;
    margin: 0;
    padding: 0;
  }
`;
