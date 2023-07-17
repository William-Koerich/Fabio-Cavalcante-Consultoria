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
      <S.Logo>
        <Logo />
      </S.Logo>
      <S.MenuButton onClick={toggleMenu}>
        <MenuIcon />
      </S.MenuButton>
      <S.MenuOptions $isOpen={isMenuOpen} onClick={toggleMenu}>
        <Link className="menu-item" href="/">
          Home
        </Link>
        <Link className="menu-item" href="/">
          Serviços
        </Link>
        <Link className="menu-item" href="/">
          Clientes
        </Link>
        <Link className="menu-item" href="/">
          Sobre
        </Link>
        <Link className="menu-item" href="/blog">
          Notícias
        </Link>
        <Link className="menu-item" href="/">
          Contato
        </Link>
      </S.MenuOptions>
    </S.HeaderContainer>
  );
}
