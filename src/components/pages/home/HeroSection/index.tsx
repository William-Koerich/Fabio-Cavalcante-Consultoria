import * as S from "./styles";
import { Button } from "@/components/ui/Button";

export function HeroSection() {
  return (
    <S.Container>
      <S.LeftContainer>
        <div className="colored-line"></div>
        <div className="hero-column">
          <h6 className="sub-heading">lEgalized since 2002</h6>
          <h1 className="heading">
            Peoples do not win peoples Fights - <br />
            <strong>Layers Do</strong>
          </h1>
          <p className="paragraph">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique. Duis cursus, mi quis
            viverra ornare. Cras eu consequat est.
          </p>
          <S.ButtonContainer>
            <Button borderColor="var(--gold)">Contato</Button>
            <Button bgColor="transparent" textColor="var(--navy-blue)">
              Quem somos
            </Button>
          </S.ButtonContainer>
        </div>

        <S.FactsContainer>
          <S.FactsItem>
            <p className="text">456K</p>
            <h6 className="heading">CASE WINS</h6>
          </S.FactsItem>
          <S.FactsItem>
            <p className="text">253K</p>
            <h6 className="heading">CASE WINS</h6>
          </S.FactsItem>
          <S.FactsItem>
            <p className="text">368K</p>
            <h6 className="heading">CASE WINS</h6>
          </S.FactsItem>
        </S.FactsContainer>
      </S.LeftContainer>
      <S.RightContainer></S.RightContainer>
    </S.Container>
  );
}
