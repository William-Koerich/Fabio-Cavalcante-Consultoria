import * as S from "./style";
import Image from "next/image";
import Link from "next/link";

interface IProps {
  date?: string;
  title?: string;
  imgPath?: string;
  description?: string;
  slug?: string;
}

export function ArticleCard({
  date,
  title,
  imgPath,
  description,
  slug,
}: IProps) {
  return (
    <S.Article>
      <S.ArticleImage>
        <Image src="/images/news1.png" fill={true} alt="News" />
      </S.ArticleImage>
      <S.ArticleDate>July 3, 2020</S.ArticleDate>
      <Link href={`/articles/${slug}`}>
        <S.ArticleTitle>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </S.ArticleTitle>
      </Link>
      <S.ArticleDescription>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
        rutrum porta cursus. Nunc sit amet ornare quam... Lorem ipsum dolor sit
        amet, consectetur adipiscing elit. Pellentesque rutrum porta cursus.
        Nunc sit amet ornare quam... Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Pellentesque rutrum porta cursus. Nunc sit amet ornare
        quam...
      </S.ArticleDescription>
    </S.Article>
  );
}
