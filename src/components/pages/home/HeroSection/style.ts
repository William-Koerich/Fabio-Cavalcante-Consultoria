import styled from "styled-components";

export const MainContainer = styled.section`
  width: 100%;
  height: 100%;
  background: linear-gradient(
      0deg,
      rgba(241, 245, 247, 0.72) 0%,
      rgba(241, 245, 247, 0.72) 100%
    ),
    url("<path-to-image>"), lightgray 0px -15.172px / 100% 116.053% no-repeat;
  @media screen and (max-width: 968px) {
    height: 100vh;
  }
`;

export const Container = styled.div`
  max-width: 1240px;
  height: 80rem;
  position: relative;
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin: 0 auto;
  @media screen and (max-width: 968px) {
    width: 100%;
    height: 100%;
    justify-content: start;
  }
`;

export const LeftContainer = styled.div`
  display: flex;
  left: 0;
  margin-right: 80rem;
  flex-direction: column;
  padding: 3rem 0;
  gap: 2.5rem;
  .colored-line {
    width: 3rem;
    height: 0.25rem;
    background: #d3ba4a;
    margin: 2rem 0 2rem 0;
  }
  .container {
    width: 40rem;
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
      .paragraph {
        font-size: 1.6rem;
        color: var(--gray-paragraph);
        font-weight: 400;
        font-family: "Roboto", sans-serif;
        margin: 1rem 0 1rem 0;
      }
      @media screen and (min-width: 968px) {
        .heading {
          width: 40rem;
        }
      }
    }
  }
  @media screen and (max-width: 968px) {
    width: 100%;
    display: flex;
    padding: 2rem;
    margin: 0;
    .container {
      width: 100%;
    }
  }
`;
export const RightContainer = styled.div`
  width: 49.2rem;
  height: 100%;
  position: absolute;
  right: 0;
  margin-right: -8rem;
  background-color: var(--navy-blue);
  @media screen and (max-width: 968px) {
    display: none;
  }

  @media screen and (max-width: 1280px) {
    margin-right: -2rem;
    width: 43rem;
  }
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

export const FactsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 0.5rem;
`;

export const FactsItem = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;

  .text {
    font-size: 3.1rem;
    font-weight: 700;
    font-family: "Roboto", sans-serif;
    color: var(--navy-blue);
  }

  .heading {
    font-size: 1.2rem;
    font-weight: 700;
    font-family: "Roboto", sans-serif;
    color: var(--gold);
  }
`;
