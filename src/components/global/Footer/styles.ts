import styled from "styled-components";

export const FooterContainer = styled.footer`
  width: 100%;
  background-color: var(--navy-blue);
  padding: 2rem;
  display: flex;
  flex-direction: column;
  @media (min-width: 1024px) {
    display: flex;
    justify-content: space-evenly;
    flex-direction: row;
    align-items: center;
    .credits {
      display: none;
    }
  }
`;

export const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 0.8rem;
  margin-top: 1rem;
  .container-credits {
    span {
      display: none;
    }
  }
  @media (min-width: 1024px) {
    .container-credits {
      span {
        display: flex;
        margin-top: 1rem;
      }
    }
  }
`;

export const SocialLink = styled.a`
  margin: 0 8px;
  text-decoration: none;
  font-size: 1.6rem;
  color: var(--white);
  font-family: Roboto;
  font-weight: bold;
  cursor: pointer;
`;

export const Credits = styled.span`
  display: block;
  text-align: center;
  color: var(--gray-paragraph);
  a {
    color: var(--gold);
  }
  @media (min-width: 1024px) {
    display: flex;
    align-items: center;
  }
`;

export const NewsletterForm = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 0.8rem;
  flex-direction: column;
  margin-top: 1rem;
  @media (min-width: 1024px) {
    flex-direction: row;
  }
`;

export const NewsletterInput = styled.input`
  width: 29.4rem;
  height: 5.25rem;
  border-radius: 2px;
  border: 1px solid var(--light-gray);
  padding: 0.8rem;
  @media (min-width: 1024px) {
    width: 36rem;
    margin-right: 1rem;
  }
`;

export const ButtonContainer = styled.div`
  width: 29.4rem;
  @media (min-width: 1024px) {
    width: 10rem;
  }
`;
