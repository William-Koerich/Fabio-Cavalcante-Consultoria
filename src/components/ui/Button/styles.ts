import styled from "styled-components";

export const Button = styled.button<{
  $bgColor?: string;
  $fontWeight?: string;
  $textColor?: string;
}>`
  width: 100%;
  height: 5.25rem;
  display: "flex";
  justify-content: center;
  background: ${({ $bgColor }) => ($bgColor ? $bgColor : "var(--gold)")};
  font-family: "Roboto", sans-serif;
  color: ${({ $textColor }) => ($textColor ? $textColor : "var(--white)")};
  font-size: 16px;
  font-weight: ${({ $fontWeight }) => ($fontWeight ? $fontWeight : "700")};
  align-items: center;
  cursor: pointer;
`;
