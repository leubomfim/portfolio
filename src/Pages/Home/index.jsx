import * as S from "./styles";
import { Skills } from "../../components/Skills";
import { Projects } from "../../components/Projects";
import { AboutMe } from "../../components/AboutMe";
import { GlobalStyles } from "./global-styles";
import { usePortContext } from "../../contexts/context";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export const Home = () => {
  const { menu } = usePortContext();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <>
      <GlobalStyles menu={menu} />
      <S.Section id="home">
        <S.Bg />
        <S.Container>
          <S.DisplayProfile>
            <S.SectionProfileWrapper
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <S.HeadingTwo variants={itemVariants}>
                Olá, meu nome é
              </S.HeadingTwo>
              <S.SpanName variants={itemVariants}>Leonardo Bomfim</S.SpanName>
              <S.RoleText variants={itemVariants}>
                Desenvolvedor Front-end
              </S.RoleText>

              <S.LinksArea variants={itemVariants}>
                <S.Link href="https://github.com/leubomfim" target="_blank">
                  <FaGithub size={20} />
                  GitHub
                </S.Link>
                <S.Link
                  href="https://www.linkedin.com/in/leonardo-bomfim-9a8a0723b/"
                  target="_blank"
                  primary="true"
                >
                  <FaLinkedin size={20} />
                  Linkedin
                </S.Link>
              </S.LinksArea>
            </S.SectionProfileWrapper>
          </S.DisplayProfile>

          <S.ScrollIndicator
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 1 }}
          >
            Scroll Down
          </S.ScrollIndicator>
        </S.Container>
      </S.Section>

      <S.Section
        id="about_me"
        style={{ minHeight: "auto", padding: "10rem 0" }}
      >
        <S.Container>
          <AboutMe />
        </S.Container>
      </S.Section>

      <S.SkillsSection id="skills">
        <S.Container>
          <Skills />
        </S.Container>
      </S.SkillsSection>

      <S.ProjectsSection id="projects">
        <S.Container>
          <Projects />
        </S.Container>
      </S.ProjectsSection>
    </>
  );
};
