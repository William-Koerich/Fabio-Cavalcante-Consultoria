import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 1240px;
  height: 100%
  display: flex;
  justify-content: start;
  padding: 2rem;
  align-items: center;
  .heading {
    font-size: 3.4rem;
    font-weight: 700;
    font-family: "Roboto", sans-serif;
    color: var(--navy-blue);
  }
`;

export const Section = styled.section`
  width: 100%;
  height: 31.7rem;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(
    0deg,
    rgba(241, 245, 247, 0.72) 0%,
    rgba(241, 245, 247, 0.72) 100%
  ),
  url("<path-to-image>"), lightgray 0px -15.172px / 100% 116.053% no-repeat;
`;
