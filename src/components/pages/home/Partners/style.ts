import styled from "styled-components";

export const PartnersContainer = styled.div`
  width: 100%;
  max-width: 1240px;
  margin-top: 30rem;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: space-between;
  padding: 0;
  @media screen and (max-width: 968px) {
    margin: 0;
    justify-content: start;
    padding: 1rem;
  }
`;

export const PartnerItem = styled.div`
  margin: 1rem;
`;
