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
}

export function Card({
  imgSrc,
  title,
  bgColor,
  borderColor,
  description,
  href,
  type,
}: IProps) {
  return (
    <S.Container bgColor={bgColor} borderColor={borderColor}>
      <div className="profile-container">
        <Image src={imgSrc} alt={title} width={270} height={250} />
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
