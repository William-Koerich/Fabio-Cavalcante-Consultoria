import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 2rem;
  padding: 2rem;
  @media screen and (max-width: 768px) {
    gap: 0;
  }
  @media screen and (min-width: 1240px) {
    max-width: 1240px;
    margin: 0;
    flex-wrap: nowrap;
    padding: 0;
    position: absolute;
    top: 75rem;
  }
`;
