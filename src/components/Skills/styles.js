import styled, { css } from 'styled-components';

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
  gap: 20px;
`;

export const Skill = styled.div`
  transition: all 300ms ease;
  ${({ html, css3, javascript, react, styledComponents }) => css`
    ${
      html &&
      `border: 1px solid #DD512A;
      &:hover {
        background-color: #da745839;
    };`
    }
    ${
      css3 &&
      `border: 1px solid #0D73B7;
        &:hover {
          background-color: #2c83bd39;
    };`
    }
    ${
      javascript &&
      `border: 1px solid #F8DC3E;
        &:hover {
        background-color: #f5df6239;
    };`
    }
    ${
      react &&
      `border: 1px solid #61DBFB;
        &:hover {
          background-color: #7ce1fa39;
    };`
    }
    ${
      styledComponents &&
      `border: 1px solid #F19BDC;
            &:hover {
          background-color: #f3aae139;
    };`
    }
  `};
  display: flex;
  padding: 20px;
  border-radius: 5px;
  gap: 40px;
  width: 90%;
  max-width: 500px;
`;

export const MySkillInformation = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const LanguageLogo = styled.img`
  width: 100px;
`;

export const LanguageName = styled.h3`
  color: white;
`;

export const Description = styled.p`
  color: white;
`;
