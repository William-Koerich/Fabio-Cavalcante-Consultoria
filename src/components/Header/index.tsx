import { useState } from "react";
import * as S from "./styles";
import { MenuIcon } from "../../../public/assets";
import { Logo } from "../../../public/assets";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <S.HeaderContainer>
      <S.Logo>
        <Logo />
      </S.Logo>
      <S.MenuButton onClick={toggleMenu}>
        <MenuIcon />
      </S.MenuButton>
      <S.MenuOptions $isOpen={isMenuOpen}>
        <S.MenuItem>Home</S.MenuItem>
        <S.MenuItem>Serviços</S.MenuItem>
        <S.MenuItem>Clientes</S.MenuItem>
        <S.MenuItem>Sobre</S.MenuItem>
        <S.MenuItem>Contato</S.MenuItem>
        <S.MenuItem>Notícias</S.MenuItem>
      </S.MenuOptions>
    </S.HeaderContainer>
  );
}
