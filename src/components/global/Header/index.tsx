import { useState } from "react";
import * as S from "./styles";
import { MenuIcon } from "@/assets";
import { Logo } from "@/assets";

import Link from "next/link";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <S.HeaderContainer>
      <S.MainContainer>
        <S.Logo>
          <Logo />
        </S.Logo>
        <S.MenuButton onClick={toggleMenu}>
          <MenuIcon />
        </S.MenuButton>
        <S.MenuOptions $isOpen={isMenuOpen} onClick={toggleMenu}>
          <Link className="menu-item" href="/">
            <li>Home</li>
          </Link>
          <Link className="menu-item" href="/#services">
            <li>Serviços</li>
          </Link>
          <Link className="menu-item" href="/#partners">
            <li>Clientes</li>
          </Link>
          <Link className="menu-item" href="/">
            <li>Sobre</li>
          </Link>
          <Link className="menu-item" href="/blog">
            <li>Notícias</li>
          </Link>
          <Link className="menu-item" href="/#contact">
            <li>Contato</li>
          </Link>
        </S.MenuOptions>
      </S.MainContainer>
    </S.HeaderContainer>
  );
}
