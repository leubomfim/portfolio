import * as S from './styles';
import logo from '../../images/leo_photo.jpeg';
import { Skills } from '../../components/Skills';
import { Projects } from '../../components/Projects';
import { AboutMe } from '../../components/AboutMe';
import {} from './';
import { GlobalStyles } from './global-styles';
import { usePortContext } from '../../contexts/context';

export const Home = () => {
  const { menu } = usePortContext();
  return (
    <>
      <S.Section id="home">
        <S.Container>
          <S.DisplayProfile>
            <S.Photo src={logo} alt="Leonardo profile photo" />
            <S.SectionProfileWrapper>
              <S.HeadingTwo>Olá, eu sou</S.HeadingTwo>
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
        <S.Container>
          <AboutMe />
        </S.Container>
      </S.Section>
      <S.SkillsSection id="skills">
        <S.Container>
          <Skills />
        </S.Container>
      </S.SkillsSection>

      <S.ProjectsSection
        style={{ height: 'auto', marginBottom: '100px' }}
        id="projects"
      >
        <S.Container style={{ maxWidth: '90%' }}>
          <Projects />
        </S.Container>
      </S.ProjectsSection>
      <GlobalStyles menu={menu} />
    </>
  );
};
