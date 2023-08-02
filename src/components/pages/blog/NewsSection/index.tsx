import * as S from "./style";
import Image from "next/image";

export function NewsSection() {
  return (
    <S.Container>
      <S.HeadingContainer>
        <div className="left-container">
          <h6 className="sub-heading">NEWS</h6>
          <h1 className="heading">
            We learned many years ago that the rich may
            have money, but the <strong>poor have time</strong>
          </h1>
        </div>
        <p className="paragraph">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          varius enim in eros elementum tristique. Duis cursus, mi quis viverra
          ornare. Cras eu consequat est.
        </p>
      </S.HeadingContainer>
      <S.NewsContainer>
          <S.NewsItemContainer>
            <S.NewsImage>
              <Image src="/images/news1.png" alt="News" fill={true} />
            </S.NewsImage>
            <S.NewsDate>July 3, 2020</S.NewsDate>
            <S.NewsTitle>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </S.NewsTitle>
            <S.NewsDescription>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque rutrum porta cursus. Nunc sit amet ornare quam...
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque rutrum porta cursus. Nunc sit amet ornare quam...
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque rutrum porta cursus. Nunc sit amet ornare quam...
            </S.NewsDescription>
          </S.NewsItemContainer>

          <S.NewsItemContainer>
            <S.NewsImage>
              <Image src="/images/news2.png" alt="News" fill={true} />
            </S.NewsImage>
            <S.NewsDate>July 3, 2020</S.NewsDate>
            <S.NewsTitle>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </S.NewsTitle>
            <S.NewsDescription>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque rutrum porta cursus. Nunc sit amet ornare quam...
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque rutrum porta cursus. Nunc sit amet ornare quam...
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque rutrum porta cursus. Nunc sit amet ornare quam...
            </S.NewsDescription>
          </S.NewsItemContainer>

          <S.NewsItemContainer>
            <S.NewsImage>
              <Image src="/images/news3.png" alt="News" fill={true} />
            </S.NewsImage>
            <S.NewsDate>July 3, 2020</S.NewsDate>
            <S.NewsTitle>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </S.NewsTitle>
            <S.NewsDescription>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque rutrum porta cursus. Nunc sit amet ornare quam...
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque rutrum porta cursus. Nunc sit amet ornare quam...
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque rutrum porta cursus. Nunc sit amet ornare quam...
            </S.NewsDescription>
          </S.NewsItemContainer>

          <S.NewsItemContainer>
            <S.NewsImage>
              <Image src="/images/news4.png" alt="News" fill={true} />
            </S.NewsImage>
            <S.NewsDate>July 3, 2020</S.NewsDate>
            <S.NewsTitle>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </S.NewsTitle>
            <S.NewsDescription>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque rutrum porta cursus. Nunc sit amet ornare quam...
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque rutrum porta cursus. Nunc sit amet ornare quam...
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque rutrum porta cursus. Nunc sit amet ornare quam...
            </S.NewsDescription>
          </S.NewsItemContainer>
        </S.NewsContainer>
    </S.Container>
  );
}
