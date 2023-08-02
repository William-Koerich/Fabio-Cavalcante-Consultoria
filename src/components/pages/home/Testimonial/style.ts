import styled from "styled-components";

export const TestimonialContainer = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 16px;
  width: 30rem;
  padding: 4rem 2rem;
  background-color: var(--background);
`;

export const TestimonialImage = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
`;

export const TestimonialContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

export const TestimonialInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

export const TestimonialRole = styled.p`
  font-weight: bold;
  color: var(--gold);
  font-size: 16px;
`;

export const TestimonialName = styled.p`
  font-size: 18px;
  font-weight: bold;
  color: var(--navy-blue);
`;

export const TestimonialText = styled.p`
  border-left: 2px solid var(--gold);
  color: var(--gray-paragraph);
  padding-left: 1rem;
  margin-top: 1rem;
  font-size: 12px;
`;
