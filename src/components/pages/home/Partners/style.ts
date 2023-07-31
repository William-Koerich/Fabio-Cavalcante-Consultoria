import styled from "styled-components";

export const PartnersContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: space-between;
  @media screen and (min-width: 968px) {
    width: 100%;
    max-width: 1240px;
    margin-top: 30rem;
  }
`;

export const PartnerItem = styled.div`
  margin: 1rem;
`;
