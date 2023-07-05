import * as S from "./styles";

interface IProps {
  name: string;
  bgColor?: string;
  fontWeight?: string;
  textColor?: string;
}

export function Button({ name, bgColor, fontWeight, textColor }: IProps) {
  return (
    <S.Button
      $bgColor={bgColor}
      $fontWeight={fontWeight}
      $textColor={textColor}
    >
      {name}
    </S.Button>
  );
}
