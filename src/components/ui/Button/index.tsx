import { ReactNode } from "react";
import * as S from "./style";

interface IProps {
  children: ReactNode;
  bgColor?: string;
  fontWeight?: string;
  textColor?: string;
  borderColor?: string;
  borderRadius?: string;
}

export function Button({
  children,
  bgColor,
  fontWeight,
  textColor,
  borderColor,
  borderRadius,
}: IProps) {
  return (
    <S.Button
      $bgColor={bgColor}
      $fontWeight={fontWeight}
      $textColor={textColor}
      $borderColor={borderColor}
      $borderRadius={borderRadius}
    >
      {children}
    </S.Button>
  );
}
