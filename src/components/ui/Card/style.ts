import styled from "styled-components";

export const Container = styled.div<{
  bgColor?: string;
  borderColor?: string;
}>`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  /* padding: 4rem 2rem; */
  /* background-color: ${({ bgColor }) => bgColor ?? "#f1f5f7"}; */
  /* border: 1px solid ${({ borderColor }) => borderColor ?? "#f1f5f7"}; */
  gap: 2rem;
  .profile-container {
    display: flex;
    justify-content: space-beetween;
    flex-direction: column;
    gap: 1rem;
    .heading {
      font-size: 1.6rem;
      font-weight: 700;
      font-family: "Roboto", sans-serif;
      color: var(--navy-blue);
      strong {
        color: var(--gold);
      }
    }
    span img {
      max-width: 6rem;
    }
  }

  .link {
    font-size: 1.6rem;
    font-weight: 700;
    font-family: "Roboto", sans-serif;
    color: var(--gold);
  }
  .paragraph {
    font-size: 1.6rem;
    color: var(--gray-paragraph);
    font-weight: 400;
    font-family: "Roboto", sans-serif;
  }
`;
