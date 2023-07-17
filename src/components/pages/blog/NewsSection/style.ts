import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 4rem 2rem;
  flex-direction: column;
  gap: 0.5rem;
  .sub-heading {
    font-size: 0.8rem;
    font-weight: 700;
    font-family: "Roboto", sans-serif;
    color: var(--gold);
  }
  .heading,
  strong {
    width: 30rem;
    font-size: 2.4rem;
    line-height: 3rem;
    font-weight: 700;
    font-family: "Roboto", sans-serif;
    color: var(--navy-blue);
    strong {
      color: var(--gold);
    }
    margin-bottom: 0.5rem;
  }
  .paragraph {
    font-size: 1.6rem;
    color: var(--gray-paragraph);
    font-weight: 400;
    font-family: "Roboto", sans-serif;
  }
`;
