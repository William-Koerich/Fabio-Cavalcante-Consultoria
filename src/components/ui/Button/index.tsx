import { ReactNode } from "react";
import * as S from "./styles";

interface IProps {
  children: ReactNode;
  bgColor?: string;
  fontWeight?: string;
  textColor?: string;
  borderColor?: string;
}

export function Button({
  children,
  bgColor,
  fontWeight,
  textColor,
  borderColor,
}: IProps) {
  return (
    <S.Button
      $bgColor={bgColor}
      $fontWeight={fontWeight}
      $textColor={textColor}
      $borderColor={borderColor}
    >
      {children}
    </S.Button>
  );
}
