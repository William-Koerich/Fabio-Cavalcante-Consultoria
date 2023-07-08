import * as S from "./style"
import Image from 'next/image'
import Link from 'next/link'

export function News () {
    return (
        <>
            <S.Container>
                <S.NewsItemContainer>
                    <h6 className="sub-heading">News</h6>
                    <h1 className="heading">
                        We Learned Many Years Ago That The Rich May Have Money, But The <strong>Poor Have Time</strong>
                    </h1>
                    <p className="paragraph">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
                    </p>
                    <Link className="link" href={"/"}>
                        Show All News Posts
                    </Link>
                    <S.NewsImage>
                        <Image src="/images/news1.png" alt="News" layout="fill" objectFit="cover"/>
                    </S.NewsImage>
                    <S.NewsDate>July 3, 2020</S.NewsDate>
                    <S.NewsTitle>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit
                    </S.NewsTitle>
                    <S.NewsDescription>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque rutrum porta cursus. Nunc sit amet ornare quam...
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque rutrum porta cursus. Nunc sit amet ornare quam...
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque rutrum porta cursus. Nunc sit amet ornare quam...
                    </S.NewsDescription>

                    <S.NewsImage>
                        <Image src="/images/news2.png" alt="News" layout="fill" objectFit="cover"/>
                    </S.NewsImage>
                    <S.NewsDate>July 3, 2020</S.NewsDate>
                    <S.NewsTitle>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit
                    </S.NewsTitle>
                    <S.NewsDescription>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque rutrum porta cursus. Nunc sit amet ornare quam...
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque rutrum porta cursus. Nunc sit amet ornare quam...
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque rutrum porta cursus. Nunc sit amet ornare quam...
                    </S.NewsDescription>

                    <S.NewsImage>
                        <Image src="/images/news3.png" alt="News" layout="fill" objectFit="cover"/>
                    </S.NewsImage>
                    <S.NewsDate>July 3, 2020</S.NewsDate>
                    <S.NewsTitle>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit
                    </S.NewsTitle>
                    <S.NewsDescription>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque rutrum porta cursus. Nunc sit amet ornare quam...
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque rutrum porta cursus. Nunc sit amet ornare quam...
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque rutrum porta cursus. Nunc sit amet ornare quam...
                    </S.NewsDescription>

                    <S.NewsImage>
                        <Image src="/images/news4.png" alt="News" layout="fill" objectFit="cover"/>
                    </S.NewsImage>
                    <S.NewsDate>July 3, 2020</S.NewsDate>
                    <S.NewsTitle>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit
                    </S.NewsTitle>
                    <S.NewsDescription>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque rutrum porta cursus. Nunc sit amet ornare quam...
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque rutrum porta cursus. Nunc sit amet ornare quam...
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque rutrum porta cursus. Nunc sit amet ornare quam...
                    </S.NewsDescription>

                </S.NewsItemContainer>
            </S.Container>
        </>
    )
}