import * as S from "./style";

interface IProps {
  title: string;
}

export function HeroSection({ title }: IProps) {
  return (
    <S.Container>
      <h1 className="heading">{title ?? "unknow"}</h1>
    </S.Container>
  );
}
