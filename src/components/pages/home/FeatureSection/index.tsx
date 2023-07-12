import { Card } from "@/components/ui/Card";
import * as S from "./style";

import featureIcon from "/public/images/feature-icon.svg";
import downIcon from "/public/images/down-icon.svg";
import medalIcon from "/public/images/medal-icon.svg";

export function FeatureSection() {
  return (
    <S.Container>
      <Card
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
      />
      <Card
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
      />
      <Card
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
      />
    </S.Container>
  );
}
