import styled from 'styled-components';

export const SectionName = styled.h2`
  color: white;
  margin: 0 auto 80px;
  font-size: 32px;
  width: 173px;
  transition: all 300ms ease-in-out;

  &::before {
    content: '';
    background: white;
    position: absolute;
    left: -4px;
    bottom: 0;
    width: 0px;
    height: 100%;
    transition: all 300ms ease-in-out;
    z-index: -1;
  };

  &:hover::before {
    width: 100%;
  };

  &:hover {
    color: rgb(61, 61, 61);
    transform: rotate(5deg) scale(1.05);
  };
`;

export const AboutWrapper = styled.div`
  width: 100%;
  background-color: #222;
  padding: 30px;
  & > p {
    color: white;
    text-align: justify;
    font-size: 20px;
  }
`;
