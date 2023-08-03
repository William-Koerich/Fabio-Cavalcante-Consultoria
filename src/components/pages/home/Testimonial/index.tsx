import * as S from "./style";
import { Button } from "@/components/ui/Button";

export function Testimonial() {
  return (
    <S.Container>
      <div className="main">
        <S.LeftContainer></S.LeftContainer>
        <S.RightContainer>
          <div className="container">
            <div className="hero-column">
              <h6 className="sub-heading">ABOUT US</h6>
              <h1 className="heading">
                Liberty consists in the <strong>power of doing</strong> that
                which is permitted by the law
              </h1>
              <p className="paragraph">
                Integer volutpat suscipit sapien, a iaculis leo lobortis sed.
                Morbi eu porttitor dolor. Praesent mattis lectus convallis
                sapien accumsan finibus. Proin dapibus mi dolor, at congue lacus
                maximus eget. Praesent scelerisque diam est.
              </p>
              <p className="small-paragraph">
                Sed vel erat et enim vestibulum <br />
                Aliquam at tortor eu dui <br />
                dignissim Ut dignissim magna vel sagittis
              </p>
              <S.ButtonContainer>
                <Button borderColor="var(--gold)">Get free quote</Button>
                <Button bgColor="transparent" textColor="var(--navy-blue)">
                  Read more
                </Button>
              </S.ButtonContainer>
            </div>
          </div>
        </S.RightContainer>
      </div>
      <S.TestimonialCards>
        <S.TestimonialContainer>
          <S.TestimonialImage
            src="/images/testemonial1.png"
            alt="Testimonial"
          />
          <S.TestimonialContent>
            <S.TestimonialInfo>
              <S.TestimonialRole>Manager</S.TestimonialRole>
              <S.TestimonialName>Lawrence Brown</S.TestimonialName>
            </S.TestimonialInfo>
            <S.TestimonialText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum sapien accumsan. Quisque
              in rhoncus ex, vel pharetra lectus.
            </S.TestimonialText>
          </S.TestimonialContent>
        </S.TestimonialContainer>

        <S.TestimonialContainer $bgColor="var(--white)">
          <S.TestimonialImage
            src="/images/testemonial1.png"
            alt="Testimonial"
          />
          <S.TestimonialContent>
            <S.TestimonialInfo>
              <S.TestimonialRole>Manager</S.TestimonialRole>
              <S.TestimonialName>Lawrence Brown</S.TestimonialName>
            </S.TestimonialInfo>
            <S.TestimonialText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum sapien accumsan. Quisque
              in rhoncus ex, vel pharetra lectus.
            </S.TestimonialText>
          </S.TestimonialContent>
        </S.TestimonialContainer>

        <S.TestimonialContainer>
          <S.TestimonialImage
            src="/images/testemonial1.png"
            alt="Testimonial"
          />
          <S.TestimonialContent>
            <S.TestimonialInfo>
              <S.TestimonialRole>Manager</S.TestimonialRole>
              <S.TestimonialName>Lawrence Brown</S.TestimonialName>
            </S.TestimonialInfo>
            <S.TestimonialText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum sapien accumsan. Quisque
              in rhoncus ex, vel pharetra lectus.
            </S.TestimonialText>
          </S.TestimonialContent>
        </S.TestimonialContainer>
      </S.TestimonialCards>
    </S.Container>
  );
}
