import * as S from "./style";
import Link from "next/link";
import { Card } from "@/components/ui/Card";

export function ServiceSection() {
  return (
    <>
      <S.Container>
        <h6 className="sub-heading">PRATICE AREAS</h6>
        <h1 className="heading">
          Laws made by <strong>common consent</strong> must not be trampled on by
          individuals
        </h1>
        <p className="paragraph">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          varius enim in eros elementum tristique. Duis cursus, mi quis viverra
          ornare. Cras eu consequat est.
        </p>
        <Link className="link" href={"/"}>
          Show all Pratice Areas
        </Link>
      </S.Container>
      <S.CardContainer>
        <Card imgSrc="/images/Insurance.png" type="service" title="Insurance"/>
        <Card imgSrc="/images/Immigration.png" type="service" title="Immigration"/>
        <Card imgSrc="/images/Real State.png" type="service" title="Real State"/>
        <Card imgSrc="/images/Education.png" type="service" title="Education"/>
        <Card imgSrc="/images/Bankrupcy.png" type="service" title="Bankrupcy"/>
        <Card imgSrc="/images/Patent.png" type="service" title="Patent"/>
        <Card imgSrc="/images/DWI-DUI.png" type="service" title="DWI/DUI"/>
        <Card imgSrc="/images/Healthcare.png" type="service" title="HealthCare"/>
      </S.CardContainer>
    </>

  );
}
