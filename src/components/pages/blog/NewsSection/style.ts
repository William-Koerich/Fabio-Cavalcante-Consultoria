import styled from "styled-components";

// export const Container = styled.section`
//   width: 100%;
//   display: flex;
//   justify-content: center;
//   padding: 4rem 2rem;
//   flex-direction: column;
//   gap: 0.5rem;
//   .sub-heading {
//     font-size: 0.8rem;
//     font-weight: 700;
//     font-family: "Roboto", sans-serif;
//     color: var(--gold);
//   }
//   .heading,
//   strong {
//     width: 30rem;
//     font-size: 2.4rem;
//     line-height: 3rem;
//     font-weight: 700;
//     font-family: "Roboto", sans-serif;
//     color: var(--navy-blue);
//     strong {
//       color: var(--gold);
//     }
//     margin-bottom: 0.5rem;
//   }
//   .paragraph {
//     font-size: 1.6rem;
//     color: var(--gray-paragraph);
//     font-weight: 400;
//     font-family: "Roboto", sans-serif;
//   }
// `;

export const MainContainer = styled.div`
  background-color: var(--white);
  width: 100%;
`;

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 2rem;
  gap: 3rem;
  @media screen and (min-width: 1200px) {
    max-width: 1240px;
    margin: 0 auto;
    padding: 8rem 0;
    gap: 7rem;
  }
`;

export const HeadingContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 3rem;
  .sub-heading,
  .link {
    font-size: 1.2rem;
    font-weight: 700;
    font-family: "Roboto", sans-serif;
    color: var(--gold);
  }

  .heading,
  strong {
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

  .left-container {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .link {
    margin-bottom: 3rem;
  }
  @media screen and (min-width: 968px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    gap: 2.5rem;
    .right-container,
    .left-container {
      width: 100%;
    }
    .heading {
      width: 100%;
    }
  }
`;

export const NewsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  @media screen and (min-width: 1200px) {
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: row;
    padding: 0;
  }
`;

export const NewsItemContainer = styled.div`
  width: 100%;
  height: 44rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 1.6rem;
  @media screen and (min-width: 1200px) {
    display: flex;
    justify-content: center;
    flex-direction: column;
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
