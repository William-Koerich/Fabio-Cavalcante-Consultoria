import { ReactNode } from "react";
import * as S from "./style";

interface IProps {
  children: ReactNode;
  bgColor?: string;
  fontWeight?: string;
  textColor?: string;
  borderColor?: string;
  borderRadius?: string;
  onClick?: () => void;
}

export function Button({
  children,
  bgColor,
  fontWeight,
  textColor,
  borderColor,
  borderRadius,
  onClick,
}: IProps) {
  return (
    <S.Button
      $bgColor={bgColor}
      $fontWeight={fontWeight}
      $textColor={textColor}
      $borderColor={borderColor}
      $borderRadius={borderRadius}
      onClick={onClick}
    >
      {children}
    </S.Button>
  );
}
