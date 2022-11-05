import styled from 'styled-components';

export const Container = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  color: #222;
  background-color: white;
  border-radius: 50%;
  position: fixed;
  bottom: 35px;
  right: 35px;
  z-index: 6;
  font-size: 40px;
  transition: transform 400ms ease;

  &:hover {
    transform: scale(1.2);
  };
`;
