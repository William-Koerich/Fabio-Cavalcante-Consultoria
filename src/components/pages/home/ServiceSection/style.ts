import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  @media screen and (min-width: 768px) {
    max-width: 1240px;
  }
`;

export const TextContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 2rem;
  gap: 1.5rem;

  .sub-heading,
  .link {
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
  }

  @media screen and (min-width: 768px) {
    width: 100%;
    max-width: 1240px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 6rem 0 4rem;
    .sub-heading {
      font-size: 0.8rem;
    }
    .heading,
    strong {
      font-size: 1.9rem;
      line-height: 2rem;
    }
    .left-container,
    .right-container {
      height: 9rem;
      display: flex;
      flex-direction: column;
    }
    .left-container {
      gap: 0.5rem;
    }
    .right-container {
      width: 100%;
      line-height: 2.5rem;
      gap: 1.5rem;
    }
  }
`;

export const CardContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 2rem;
  gap: 2rem;
  flex-wrap: wrap;
  @media screen and (min-width: 768px) {
    padding: 2rem 0;
  }
`;

export const ImageContainer = styled.div`
  position: relative;
  height: 26.8rem;
  @media screen and (max-width: 968px) {
    img {
      width: 100%;
    }
  }
`;
