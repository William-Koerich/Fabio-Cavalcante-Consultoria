import Image from "next/image";
import * as S from "./style";

import Link from "next/link";

interface IProps {
  imgSrc: string;
  title: string;
  description?: string;
  href?: string;
  borderColor?: string;
  bgColor?: string;
  type: string;
  widthImage: number;
  heightImage: number;
  paddingTop?: string;
  paddingBottom?: string;
  paddingLeft?: string;
  paddingRight?: string;
}

export function Card({
  imgSrc,
  title,
  bgColor,
  borderColor,
  description,
  href,
  type,
  widthImage,
  heightImage,
  paddingTop,
  paddingBottom,
  paddingLeft,
  paddingRight,
}: IProps) {
  return (
    <S.Container 
      $bgColor={bgColor}
      $borderColor={borderColor} 
      $paddingBottom={paddingBottom} 
      $paddingLeft={paddingLeft} 
      $paddingRight={paddingRight} 
      $paddingTop={paddingTop}
    >
      <div className="profile-container">
        <Image src={imgSrc} alt={title} width={widthImage} height={heightImage} />
        <h4 className="heading">{title}</h4>
      </div>
      <p className="paragraph">{description} </p>

      {type === "service" ? (
        ""
      ) : (
        <Link className="link" href={href ?? "/"}>
          Read More {">"}
        </Link>
      )}
    </S.Container>
  );
}
