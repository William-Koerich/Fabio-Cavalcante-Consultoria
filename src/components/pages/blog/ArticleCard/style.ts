import styled from "styled-components";

export const Article = styled.article`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 2rem;
`;

export const ArticleImage = styled.div`
  position: relative;
  width: 100%;
  height: 26.8rem;
  margin-bottom: 1rem;
`;

export const ArticleDate = styled.p`
  margin-top: 0.8rem;
  font-size: 1rem;
  color: var(--gold);
  font-weight: bold;
  display: flex;
  justify-content: flex-start;
  margin-bottom: 0.8rem;
  font-family: "Roboto", sans-serif;
`;

export const ArticleTitle = styled.h2`
  font-family: "Roboto", sans-serif;
  font-size: 2.5rem;
  color: var(--navy-blue);
`;

export const ArticleDescription = styled.p`
  margin-top: 0.8rem;
  color: var(--gray-paragraph);
  margin-bottom: 2rem;
  font-size: 1rem;
`;
