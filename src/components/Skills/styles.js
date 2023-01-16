import styled from 'styled-components';

export const SectionName = styled.h2`
  color: white;
  margin: 0 auto 80px;
  font-size: 32px;
  width: 188px;
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

export const SkillsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px 70px ;
`;

export const Skill = styled.div`
  transition: all 300ms ease;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border-radius: 5px;
  gap: 40px;
  align-items: center;
`;

export const LanguageLogo = styled.img`
  width: 148px;
  height: 148px;
  @media screen and (max-width: 400px) {
    margin: 0 auto;
  }
`;

export const LanguageName = styled.h3`
  color: #c4c4c4;
  font-size: 25px;
`;
