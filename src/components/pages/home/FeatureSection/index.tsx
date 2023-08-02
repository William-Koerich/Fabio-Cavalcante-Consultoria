import { Card } from "@/components/ui/Card";
import * as S from "./style";

import featureIcon from "/public/images/feature-icon.svg";
import downIcon from "/public/images/down-icon.svg";
import medalIcon from "/public/images/medal-icon.svg";

export function FeatureSection() {
  return (
    <S.Container>
      <Card
        type="professional-services"
        key={"ProfessionalServices"}
        title="Professional Services"
        description="
          Lorem ipsum dolor sit amet,
          consectetur adipiscing elit.
          Suspendisse varius enim in eros elementum sapien accumsan tristique.
          Suspendisse varius enim in eros elementum sapien accumsan.
        "
        href="/"
        imgSrc={featureIcon}
        widthImage={96}
        heightImage={96}
        bgColor="var(--background)"
        paddingTop="4rem"
        paddingBottom="4rem"
        paddingLeft="2rem"
        paddingRight="2rem"

      />
      <Card
        type="professional-services"
        key={"Top Legal Experts"}
        title="Top Legal Experts"
        description="
          Lorem ipsum dolor sit amet,
          consectetur adipiscing elit.
          Suspendisse varius enim in eros elementum sapien accumsan tristique.
          Suspendisse varius enim in eros elementum sapien accumsan.
        "
        href="/"
        imgSrc={downIcon}
        bgColor="var(--white)"
        widthImage={96}
        heightImage={96}
        paddingTop="4rem"
        paddingBottom="4rem"
        paddingLeft="2rem"
        paddingRight="2rem"
      />
      <Card
        type="professional-services"
        key={"Competitive pricing"}
        title="Competitive pricing"
        description="
          Lorem ipsum dolor sit amet,
          consectetur adipiscing elit.
          Suspendisse varius enim in eros elementum sapien accumsan tristique.
          Suspendisse varius enim in eros elementum sapien accumsan.
        "
        href="/"
        imgSrc={medalIcon}
        widthImage={96}
        heightImage={96}
        bgColor="var(--background)"
        paddingTop="4rem"
        paddingBottom="4rem"
        paddingLeft="2rem"
        paddingRight="2rem"
      />
    </S.Container>
  );
}
