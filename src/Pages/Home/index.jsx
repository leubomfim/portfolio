import * as S from './styles';
import { Skills } from '../../components/Skills';
import { Projects } from '../../components/Projects';
import { AboutMe } from '../../components/AboutMe';
import {} from './';
import { GlobalStyles } from './global-styles';
import { usePortContext } from '../../contexts/context';
import ScrollReveal from 'scrollreveal';
import { useEffect } from 'react';
import gif from '../../images/bg.gif';

export const Home = () => {
  const { menu } = usePortContext();

  useEffect(() => {
    ScrollReveal({
      duration: 1500,
      reset: true,
      easing: 'ease',
    });

    ScrollReveal().reveal('.area-1', { origin: 'left' });
    ScrollReveal().reveal('.area-2', { origin: 'right' });
    ScrollReveal().reveal('.area-3', { origin: 'left' });
    ScrollReveal().reveal('.area-4', { origin: 'right' });
  }, []);

  return (
    <>
      <S.Section style={{ position: 'relative' }} id="home">
        <S.Bg>
          <img src={gif} alt="Universe with stars background" />
        </S.Bg>
        <S.Container className="area-1">
          <S.DisplayProfile>
            <S.SectionProfileWrapper>
              <S.HeadingTwo>Olá, meu nome é</S.HeadingTwo>
              <S.SpanName>Leonardo Bomfim </S.SpanName>
              <S.HeadingTwo>Desenvolvedor Front-end.</S.HeadingTwo>
              <S.LinksArea>
                <S.Link
                  linkedin={false}
                  href="https://github.com/leubomfim"
                  target="_blank"
                >
                  GitHub
                </S.Link>
                <S.Link
                  href="https://www.linkedin.com/in/leonardo-bomfim-9a8a0723b/"
                  linkedin={true}
                  target="_blank"
                >
                  Linkedin
                </S.Link>
              </S.LinksArea>
            </S.SectionProfileWrapper>
          </S.DisplayProfile>
        </S.Container>
      </S.Section>
      <S.Section id="about_me">
        <S.Container className="area-2">
          <AboutMe />
        </S.Container>
      </S.Section>
      <S.SkillsSection id="skills">
        <S.Container className="area-3">
          <Skills />
        </S.Container>
      </S.SkillsSection>

      <S.ProjectsSection
        style={{ height: 'auto', marginBottom: '100px' }}
        id="projects"
      >
        <S.Container className="area-4" style={{ maxWidth: '90%' }}>
          <Projects />
        </S.Container>
      </S.ProjectsSection>
      <GlobalStyles menu={menu} />
    </>
  );
};
