import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

export const FixedContainer = styled.div`
  width: 100%;
  height: 14rem;
  background: #d4d5da;
  position: fixed;
  bottom: 0;
  padding: 2rem 10rem;
  animation: 0.2s ${fadeIn} ease-out;
  @media screen and (max-width: 968px) {
    height: 30rem;
  }
`;

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 7rem;
  gap: 2rem;
  a {
    text-decoration: none;
  }
  .description,
  strong {
    width: 140rem;
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    line-height: 2rem;
    color: var(--gray);
    font-size: 1.2rem;
  }
  strong {
    color: var(--green);
  }
  .btnContainer {
    width: 13rem;
    display: flex;
    justify-content: center;
    align-items: center;
    :hover {
      filter: brightness(0.9);
    }
  }
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    padding: 0;
    .description {
      max-width: 30rem;
      font-size: 1.2rem;
    }
  }
`;
