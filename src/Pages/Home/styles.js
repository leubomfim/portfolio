import styled, { css } from 'styled-components';

export const Section = styled.section`
  display: flex;
  height: 100vh;
  display:flex;
  align-items: center;
`;

export const SkillsSection = styled.section`
  display: flex;
  height: 100vh;
  display:flex;
  align-items: center;

  @media screen and (max-width: 425px) {
    margin-top: 280px;
  }
  `;

export const ProjectsSection = styled.section`
  display: flex;
  margin-bottom: 100px;
  display:flex;
  align-items: center;

  @media screen and (max-width: 600px) {
    margin-top: 50px;
  }

  @media screen and (max-width: 425px) {
    margin-top: 320px;
  }
`;

export const Container = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 1024px;


  @media screen and (max-width: 1025px) {
    width: 90%;
  }

  @media screen and (max-width: 900px) {
    width: 85%;
  }
`;

export const DisplayProfile = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;

  @media screen and (max-width: 600px) {
    flex-direction: column;
  }
`;

export const Bg = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: -1000;
  & > img {
    width: 100%;
    height: 100%;
  }
`;

export const SectionProfileWrapper = styled.div`
  display: flex;
  width: auto;
  flex-direction: column;
  gap: 10px;

  @media screen and (max-width: 600px) {
    width: 300px;
  }
`;

export const SectionsTitle = styled.h2`
  color: white;
`;

export const HeadingTwo = styled.h2`
  color: white;
  font-size: 32px;
  font-weight: 400;
  text-align: center;
`;

export const SpanName = styled.span`
  color: white;
  font-size: 38px;
  letter-spacing: 4px;
  text-transform: uppercase;
  position: relative;
  transition: all 300ms ease-in-out;
  z-index: 2;
  width: auto;
  text-align: center;
  cursor: default;

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
  };
`;

export const LinksArea = styled.div`
  display: flex;
  justify-content: center;
  gap: 25px;

  @media screen and (max-width: 600px) {
    justify-content: center;
  }
  `;

export const Link = styled.a`
  ${({ linkedin }) => css`
    ${linkedin ? 'border: 2px solid #0A66C2;' : 'border: 2px solid white;'}
    ${
      linkedin
        ? `&:hover {
    background-color: #518bc45b;
  };`
        : `&:hover {
    border: 2px solid gray;
    background-color: rgba(255, 255, 255, 0.158);
  };`
    }
    display: flex;
    gap: 20px;
    border-radius: 10px;
    padding: 12px 35px;
    color: white;
    background-color: transparent;
    cursor: pointer;
    margin-top: 10px;
    transition: all 300ms ease-in-out;
  `};


`;
