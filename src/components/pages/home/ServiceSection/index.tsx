import * as S from "./styles";
import Link from "next/link";

export function ServiceSection() {
  return (
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
  );
}