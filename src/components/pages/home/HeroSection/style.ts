import styled from "styled-components";

export const Container = styled.main`
  width: 100%;
  height: 100%;
`;

export const LeftContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 2rem;
  gap: 2.5rem;
  .colored-line {
    width: 3rem;
    height: 0.25rem;
    background: #d3ba4a;
    margin: 2rem 0 2rem 0;
  }
  .hero-column {
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 1rem;
    margin-bottom: 2rem;

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
  }
`;
export const RightContainer = styled.div`
  width: 100%;
  display: flex;
  background: var(--blue);
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const FactsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 1rem;
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
