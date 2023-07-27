import { Button } from "@/components/ui/Button";
import * as S from "./style";
import Link from "next/link";

import { useEffect, useState } from "react";

import { setCookie, hasCookie } from "cookies-next";

export function CookieConsent() {
  const [showConsent, setShowConsent] = useState(true);

  useEffect(() => {
    setShowConsent(hasCookie("isCookieAccepted"));
  }, []);

  const acceptCookies = () => {
    setCookie("isCookieAccepted", "true", {});
    setShowConsent(true);
  };

  if (showConsent) {
    return null;
  }

  return (
    <S.FixedContainer>
      <S.Container>
        <p className="description">
          O Tribunal de Justiça de Santa Catarina utiliza cookies, armazenados
          apenas em caráter temporário, para geração de informações estátisticas
          de visitação no seu portal instituicional e aperfeiçoamento da
          experiência do usuário na utilização dos serviços online, conforme a
          nossa{" "}
          <Link href="/">
            <strong>
              Política de Privacidade e Proteção de Dados Pessoais
            </strong>{" "}
          </Link>
          para navegação no site PjSC. Ao utilizar nossos serviços, você
          concorda com procedimento.
        </p>
        <div className="btnContainer">
          <Button bgColor="var(--black-green)" onClick={acceptCookies}>
            CIENTE
          </Button>
        </div>
      </S.Container>
    </S.FixedContainer>
  );
}
