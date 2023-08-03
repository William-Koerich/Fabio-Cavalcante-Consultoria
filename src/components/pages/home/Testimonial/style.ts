import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 1240px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  .main {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  @media screen and (max-width: 968px) {
    .main {
      flex-direction: column;
    }
  }
`;

export const RightContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  padding: 3rem 2rem;
  gap: 2.5rem;
  .container {
    width: 100%;
    .hero-column {
      display: flex;
      justify-content: center;
      flex-direction: column;
      gap: 1rem;
      margin-bottom: 7rem;

      .sub-heading {
        font-size: 1.2rem;
        font-weight: 700;
        font-family: "Roboto", sans-serif;
        color: var(--gold);
      }
      .heading,
      strong {
        width: 30rem;
        font-size: 4rem;
        line-height: 4.5rem;
        font-weight: 700;
        font-family: "Roboto", sans-serif;
        color: var(--navy-blue);
        strong {
          color: var(--gold);
        }
      }
      .paragraph,
      .small-paragraph {
        font-size: 1.6rem;
        color: var(--gray-paragraph);
        font-weight: 400;
        font-family: "Roboto", sans-serif;
        margin: 1rem 0 1rem 0;
      }
      .small-paragraph {
        margin-left: 3rem;
      }
      @media screen and (min-width: 968px) {
        .heading {
          width: 70rem;
        }
      }
    }
  }
  @media screen and (max-width: 968px) {
    width: 100%;
    display: flex;
    padding: 2rem;
    .container {
      width: 100%;
    }
  }
`;
export const LeftContainer = styled.div`
  width: 100%;
  display: flex;
`;

export const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  @media screen and (min-width: 968px) {
    width: 30rem;
    justify-content: start;
    flex-direction: row;
  }
`;

export const TestimonialCards = styled.div`
  max-width: 1140px;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  flex: wrap;
  @media screen and (max-width: 968px) {
    justify-content: center;
    flex-direction: column;
    padding: 2rem;
  }
`;

export const TestimonialContainer = styled.div<{ $bgColor?: string }>`
  width: 100%;
  display: flex;
  align-items: flex-start;
  gap: 16px;
  width: 100%;
  height: 23rem;
  padding: 6rem 2rem;
  margin-bottom: -2rem;
  background-color: ${({ $bgColor }) => $bgColor ?? "var(--background)"};
  @media screen and (max-width: 968px) {
    margin: 0;
    padding: 4rem 2rem;
  }
`;

export const TestimonialImage = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
`;

export const TestimonialContent = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

export const TestimonialInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

export const TestimonialRole = styled.p`
  font-weight: bold;
  color: var(--gold);
  font-size: 16px;
`;

export const TestimonialName = styled.p`
  font-size: 18px;
  font-weight: bold;
  color: var(--navy-blue);
`;

export const TestimonialText = styled.p`
  border-left: 2px solid var(--gold);
  color: var(--gray-paragraph);
  padding-left: 1rem;
  margin-top: 1rem;
  font-size: 12px;
`;
