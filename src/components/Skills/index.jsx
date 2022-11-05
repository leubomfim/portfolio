import * as S from './styles';

import html_logo from '../../images/html-logo.png';
import css_logo from '../../images/css.png';
import javascript_logo from '../../images/javacript-logo.png';
import react_logo from '../../images/react-logo.png';
import styled_logo from '../../images/styled-components-logo.png';

export const Skills = () => {
  return (
    <>
      <S.SectionName>Habilidades</S.SectionName>
      <S.SkillsWrapper>
        <S.Skill html={true}>
          <S.LanguageLogo src={html_logo} alt="HTML5 logo" />
          <S.MySkillInformation>
            <S.LanguageName>HTML5</S.LanguageName>
            <S.Description>
              Tenho 10 meses de experiência com essa linguagem.
            </S.Description>
          </S.MySkillInformation>
        </S.Skill>

        <S.Skill css3={true}>
          <S.LanguageLogo src={css_logo} alt="CSS3 logo" />
          <S.MySkillInformation>
            <S.LanguageName>CSS3</S.LanguageName>
            <S.Description>
              Tenho 10 meses de experiência com essa linguagem.
            </S.Description>
          </S.MySkillInformation>
        </S.Skill>

        <S.Skill javascript={true}>
          <S.LanguageLogo src={javascript_logo} alt="Javascript logo" />
          <S.MySkillInformation>
            <S.LanguageName>Javascript</S.LanguageName>
            <S.Description>
              Tenho 7 meses de experiência com essa linguagem.
            </S.Description>
          </S.MySkillInformation>
        </S.Skill>

        <S.Skill react={true}>
          <S.LanguageLogo src={react_logo} alt="ReactJs logo" />
          <S.MySkillInformation>
            <S.LanguageName>ReactJs</S.LanguageName>
            <S.Description>
              Tenho 3 meses de experiência com esse framework.
            </S.Description>
          </S.MySkillInformation>
        </S.Skill>

        <S.Skill styledComponents={true}>
          <S.LanguageLogo src={styled_logo} alt="Styled-components logo" />
          <S.MySkillInformation>
            <S.LanguageName>Styled-Components</S.LanguageName>
            <S.Description>
              Tenho 1 meses de experiência com essa biblioteca.
            </S.Description>
          </S.MySkillInformation>
        </S.Skill>
      </S.SkillsWrapper>
    </>
  );
};
