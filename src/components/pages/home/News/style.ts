import styled from 'styled-components';

export const Container = styled.div`
  background-color: var(--white);
  /* display: none; */

  @media (min-width: 1024px) {
      display: flex;
      width: 100%;
      background-color: var(--gold);
  }
`;

export const NewsItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 1.6rem;
  width: 35.8rem;
  justify-content: flex-start;
  align-items: flex-start;
  flex-wrap: wrap;

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
    margin-top: 0.8rem;
    margin-bottom: 0.8rem;
    font-size: 1.6rem;
    color: var(--gray-paragraph);
    font-weight: 400;
    font-family: "Roboto", sans-serif;
  }
  
  .link {
    margin-bottom: 3rem;
  }

`;

export const NewsImage = styled.div`
  position: relative;
  width: 100%;
  height: 26.8rem;
`;


export const NewsDate = styled.p`
  margin-top: 0.8rem;
  font-size: 1rem;
  color: var(--gold);
  font-weight: bold;
  display: flex;
  justify-content: flex-start;
  margin-bottom: 0.8rem;
  font-family: "Roboto", sans-serif;
`;

export const NewsTitle = styled.h2`
  font-family: "Roboto", sans-serif;
  font-size: 2.5rem;
  color: var(--navy-blue);
`;

export const NewsDescription = styled.p`
  margin-top: 0.8rem;
  color: var(--gray-paragraph);
  margin-bottom: 2rem;
  font-size: 1rem;
`;
