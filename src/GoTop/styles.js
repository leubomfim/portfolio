import styled, { css } from "styled-components";

export const Container = styled.a`
  ${({ menu }) => css`
    ${!menu
      ? `color: #222;
      background-color: white;`
      : `color: white;
    background-color: #222;
    `}
  `}
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  position: fixed;
  bottom: 35px;
  right: 35px;
  z-index: 6;
  font-size: 40px;
  transition: transform 400ms ease;

  &:hover {
    transform: scale(1.2);
  }
`;
