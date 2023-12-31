import * as S from "./style";
import Link from "next/link";
import { Card } from "@/components/ui/Card";

export function ServiceSection() {
  return (
    <S.Container id="services">
      <S.TextContainer>
        <div className="left-container">
          <h6 className="sub-heading">PRATICE AREAS</h6>
          <h1 className="heading">
            Laws made by <strong>common consent</strong> must not be trampled on
            by individuals
          </h1>
        </div>
        <div className="right-container">
          <p className="paragraph">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            varius enim in eros elementum tristique. Duis cursus, mi quis
            viverra ornare. Cras eu consequat est.
          </p>
          <Link className="link" href={"/"}>
            Show all Pratice Areas
          </Link>
        </div>
      </S.TextContainer>
      <S.CardContainer>
        <S.ImageContainer>
          <Card
            imgSrc="/images/Insurance.png"
            type="service"
            title="Insurance"
            widthImage={280}
            heightImage={250}
          />
        </S.ImageContainer>
        <S.ImageContainer>
          <Card
            imgSrc="/images/Immigration.png"
            type="service"
            title="Immigration"
            widthImage={280}
            heightImage={250}
          />
        </S.ImageContainer>
        <S.ImageContainer>
          <Card
            imgSrc="/images/Real State.png"
            type="service"
            title="Real State"
            widthImage={280}
            heightImage={250}
          />
        </S.ImageContainer>
        <S.ImageContainer>
          <Card
            imgSrc="/images/Education.png"
            type="service"
            title="Education"
            widthImage={280}
            heightImage={250}
          />
        </S.ImageContainer>
        <S.ImageContainer>
          <Card
            imgSrc="/images/Bankrupcy.png"
            type="service"
            title="Bankrupcy"
            widthImage={280}
            heightImage={250}
          />
        </S.ImageContainer>
        <S.ImageContainer>
          <Card 
            imgSrc="/images/Patent.png" 
            type="service" 
            title="Patent" 
            widthImage={280}
            heightImage={250}
          />
        </S.ImageContainer>
        <S.ImageContainer>
          <Card 
            imgSrc="/images/DWI-DUI.png" 
            type="service" 
            title="DWI/DUI" 
            widthImage={280}
            heightImage={250}
          />
        </S.ImageContainer>
        <S.ImageContainer>
          <Card
            imgSrc="/images/Healthcare.png"
            type="service"
            title="HealthCare"
            widthImage={280}
            heightImage={250}
          />
        </S.ImageContainer>
      </S.CardContainer>
    </S.Container>
  );
}
