import { ReactNode } from "react";
import * as S from "./styles";

interface IProps {
  children: ReactNode;
  bgColor?: string;
  fontWeight?: string;
  textColor?: string;
}

export function Button({ children, bgColor, fontWeight, textColor }: IProps) {
  return (
    <S.Button
      $bgColor={bgColor}
      $fontWeight={fontWeight}
      $textColor={textColor}
    >
      {children}
    </S.Button>
  );
}
