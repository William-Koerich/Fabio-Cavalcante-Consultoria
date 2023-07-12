import Image from "next/image";
import * as S from "./style";

import Link from "next/link";

interface IProps {
  imgSrc: string;
  title: string;
  description: string;
  href: string;
  borderColor?: string;
  bgColor?: string;
}

export function Card({
  imgSrc,
  title,
  bgColor,
  borderColor,
  description,
  href,
}: IProps) {
  return (
    <S.Container bgColor={bgColor} borderColor={borderColor}>
      <div className="profile-container">
        <Image src={imgSrc} alt={title} />
        <h4 className="heading">{title}</h4>
      </div>
      <p className="paragraph">{description} </p>
      <Link className="link" href={href ?? "/"}>
        Read More {">"}
      </Link>
    </S.Container>
  );
}
