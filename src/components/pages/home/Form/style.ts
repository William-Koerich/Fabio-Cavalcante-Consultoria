import styled from "styled-components";

export const Container = styled.div`
   width: 100vw;
   display:flex;
   justify-content: center;
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: var(--navy-blue);
  width: 35.8rem;
  height: 43.1rem;
`;

export const Title = styled.span`
  font-family: Roboto;
  font-size: 3rem;
  color: var(--white);
  margin-bottom: 1.6rem;
`;

export const Input = styled.input`
  width: 29.4rem;
  height: 6.4rem;
  border-radius: 2px;
  border: 1px solid var(--light-gray);
  padding: 0.8rem;
  margin-bottom: 1.6rem;
`;

export const ButtonContainer = styled.div`
  width: 29.4rem;
`;
