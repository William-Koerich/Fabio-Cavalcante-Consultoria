import styled from "styled-components";

export const Container = styled.div<{
  $bgColor?: string;
  $borderColor?: string;
  $paddingTop?: string;
  $paddingBottom?: string;
  $paddingRight?: string;
  $paddingLeft?: string;
}>`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding-top: ${({$paddingTop}) => $paddingTop ?? '0'};
  padding-bottom: ${({$paddingBottom}) => $paddingBottom ?? '0'};
  padding-right: ${({$paddingRight}) => $paddingRight ?? '0'};
  padding-left: ${({$paddingLeft}) => $paddingLeft ?? '0'};
  background-color: ${({ $bgColor }) => $bgColor ?? ""};
  /* border: 1px solid ${({ $borderColor }) => $borderColor ?? "#f1f5f7"}; */
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
