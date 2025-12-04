import * as S from './styles';

import html_logo from '../../images/html-logo.png';
import css_logo from '../../images/css.png';
import javascript_logo from '../../images/javacript-logo.png';
import react_logo from '../../images/react-logo.png';
import styled_logo from '../../images/styled-components-logo.png';
import git_logo from '../../images/git-logo.png';

export const Skills = () => {
  const skills = [
    { name: 'HTML5', logo: html_logo },
    { name: 'CSS3', logo: css_logo },
    { name: 'Javascript', logo: javascript_logo },
    { name: 'ReactJs', logo: react_logo },
    { name: 'Styled-components', logo: styled_logo },
    { name: 'Git', logo: git_logo },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <>
      <S.SectionName
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Habilidades
      </S.SectionName>
      <S.SkillsWrapper
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {skills.map((skill, index) => (
          <S.Skill key={index} variants={itemVariants}>
            <S.LanguageLogo src={skill.logo} alt={`${skill.name} logo`} />
            <S.LanguageName>{skill.name}</S.LanguageName>
          </S.Skill>
        ))}
      </S.SkillsWrapper>
    </>
  );
};
