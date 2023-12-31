import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (min-width: 1200px) {
    width: 1240px;
    height: 77rem;
  }
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: var(--navy-blue);
  width: 35.8rem;
  height: 43.1rem;

  @media screen and (min-width: 1200px) {
    width: 98.4rem;
  }
`;

export const Title = styled.span`
  font-family: Roboto;
  font-size: 3rem;
  color: var(--white);
  margin-bottom: 1.6rem;
`;

export const Input = styled.input`
  width: 90%;
  height: 6.4rem;
  border-radius: 2px;
  border: 1px solid var(--light-gray);
  padding: 0.8rem;
  margin-bottom: 1.6rem;
`;

export const ButtonContainer = styled.div`
  width: 90%;
`;
