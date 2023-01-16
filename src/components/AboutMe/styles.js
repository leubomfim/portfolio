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
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 80px;
  text-align: justify;

  & > p {
    color: white;
    font-size: 25px;
    letter-spacing: 3px;
    width: 600px;
    line-height: 1.2;

    @media (max-width: 900px) {
      letter-spacing: none;
      width: auto;
    }
  }

  @media (max-width: 900px) {
    flex-direction: column-reverse;
  }
 `;

export const Photo = styled.img`
  width: 250px;
  border-radius: 3px;
  transition: all 300ms ease-in-out;
  border-radius: 50%;

  &:hover {
    transform: scale(1.1);
  }
`;
