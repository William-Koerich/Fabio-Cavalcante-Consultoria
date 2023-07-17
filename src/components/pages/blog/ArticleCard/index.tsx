import * as S from "./style";
import Image from "next/image";

interface IProps {
  date?: string;
  title?: string;
  imgPath?: string;
  description?: string;
}

export function ArticleCard({}: IProps) {
  return (
    <S.Article>
      <S.ArticleImage>
        <Image src="/images/news1.png" layout={"fill"} alt="News" />
      </S.ArticleImage>
      <S.ArticleDate>July 3, 2020</S.ArticleDate>
      <S.ArticleTitle>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit
      </S.ArticleTitle>
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
