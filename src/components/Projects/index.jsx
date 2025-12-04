import * as S from './styles';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

import advice from '../../images/advice.png';
import countries from '../../images/countries.png';
import react_countries from '../../images/react-countries.png';
import url_shortener from '../../images/url.png';
import poke from '../../images/poke.png';
import gitFinderReact from '../../images/git.png';
import gitFinder from '../../images/react-git.png';
import toDo from '../../images/to-do.png';
import lasless from '../../images/laslessVPN.png';
import rick from '../../images/rick.png';
import project from '../../images/project.png';
import movies from '../../images/movies.png';
import aprmma from '../../images/aprmma.png';

export const Projects = () => {
  const projects = [
    {
      name: 'Aprovados MMA',
      image: aprmma,
      description:
        'Site oficial do Aprovados MMA, desenvolvido com tecnologias modernas para alta performance.',
      techs: ['Next.js', 'Tailwind CSS'],
      site: 'https://www.aprovadosmma.com/',
      github: null,
    },
    {
      name: 'Url shortener',
      image: url_shortener,
      description:
        'Projeto realizado consumindo uma API de encurtador de links, para encurtar links muito grandes.',
      techs: ['HTML', 'CSS', 'Javascript'],
      site: 'https://leubomfim.github.io/url-shortener/',
      github: 'https://github.com/leubomfim/url-shortener',
    },
    {
      name: 'Github finder',
      image: gitFinder,
      description:
        'Projeto realizado consumindo a API do github, para encontrar usuários e seus repositórios.',
      techs: ['HTML', 'CSS', 'Javascript'],
      site: 'https://leubomfim.github.io/git-finder/',
      github: 'https://github.com/leubomfim/git-finder',
    },
    {
      name: 'Github finder - React',
      image: gitFinderReact,
      description:
        'Versão em React do projeto Github Finder, com funcionalidades aprimoradas.',
      techs: ['ReactJs', 'Css modules'],
      site: 'https://react-git-finder.vercel.app/',
      github: 'https://github.com/leubomfim/react-git-finder',
    },
    {
      name: 'laslessVPN',
      image: lasless,
      description: 'Landing page moderna para um serviço de VPN fictício.',
      techs: ['HTML', 'CSS', 'Javascript'],
      site: 'https://leubomfim.github.io/laslessVPN/',
      github: 'https://github.com/leubomfim/laslessVPN',
    },
    {
      name: 'Rest Countries',
      image: countries,
      description:
        'Aplicação para visualizar informações detalhadas sobre países usando a REST Countries API.',
      techs: ['HTML', 'CSS', 'Javascript'],
      site: 'https://rest-countries-xi-three.vercel.app/',
      github: 'https://github.com/leubomfim/rest-countries',
    },
    {
      name: 'Rest Countries - React',
      image: react_countries,
      description:
        'Versão React do projeto Rest Countries com tema dark/light e filtros.',
      techs: ['ReactJs', 'Styled-components'],
      site: 'https://react-rest-countries-six.vercel.app/',
      github: 'https://github.com/leubomfim/react-rest-countries',
    },
    {
      name: 'To-do App',
      image: toDo,
      description: 'Aplicativo de lista de tarefas com persistência de dados.',
      techs: ['ReactJs', 'Styled-components'],
      site: 'https://todo-react-navy.vercel.app/',
      github: 'https://github.com/leubomfim/todo-react',
    },
    {
      name: 'Pokédex',
      image: poke,
      description: 'Pokédex completa consumindo a PokéAPI.',
      techs: ['ReactJs', 'Styled-components'],
      site: 'https://poke-api-pokedex.vercel.app/',
      github: 'https://github.com/leubomfim/poke-api-pokedex',
    },
    {
      name: 'Advice generator',
      image: advice,
      description: 'Gerador de conselhos aleatórios consumindo API externa.',
      techs: ['HTML', 'CSS', 'Javascript'],
      site: 'https://leubomfim.github.io/advice-generator-app/',
      github: 'https://github.com/leubomfim/advice-generator-app',
    },
    {
      name: 'Movies App',
      image: movies,
      description: 'Catálogo de filmes e séries consumindo a API do TMDB.',
      techs: ['HTML', 'CSS', 'Javascript'],
      site: 'https://movies-project-taupe.vercel.app/',
      github: 'https://github.com/leubomfim/movies-project',
    },
    {
      name: 'Rick and Morty App',
      image: rick,
      description: 'Wiki interativa do universo Rick and Morty.',
      techs: ['HTML', 'CSS', 'Javascript'],
      site: 'https://rick-and-morty-api-leubomfim.vercel.app/',
      github: 'https://github.com/leubomfim/rick-and-morty-api',
    },
    {
      name: 'Projects Manager',
      image: project,
      description: 'Sistema para gerenciamento de projetos pessoais.',
      techs: ['HTML', 'CSS', 'Javascript'],
      site: 'https://project-test-topaz.vercel.app/',
      github: 'https://github.com/leubomfim/project-test',
    },
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

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
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
        Projetos
      </S.SectionName>
      <S.Projects
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
      >
        {projects.map((project, index) => (
          <S.ProjectCardAndImage key={index} variants={cardVariants}>
            <S.ImageContainer>
              <S.ProjectImage src={project.image} alt={project.name} />
            </S.ImageContainer>
            <S.ProjectCard>
              <S.ProjectName>{project.name}</S.ProjectName>
              <S.Description>{project.description}</S.Description>

              <S.TechnologiesUsed>
                {project.techs.map((tech, i) => (
                  <S.TechTag key={i}>{tech}</S.TechTag>
                ))}
              </S.TechnologiesUsed>

              <S.Links>
                <S.Link href={project.site} target="_blank" primary="true">
                  <FaExternalLinkAlt size={14} /> Site
                </S.Link>
                {project.github && (
                  <S.Link href={project.github} target="_blank">
                    <FaGithub size={16} /> Github
                  </S.Link>
                )}
              </S.Links>
            </S.ProjectCard>
          </S.ProjectCardAndImage>
        ))}
      </S.Projects>
    </>
  );
};
