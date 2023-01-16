import * as S from './styles';
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

export const Projects = () => {
  return (
    <>
      <S.SectionName>Projetos</S.SectionName>
      <S.Projects>
        <S.ProjectCardAndImage>
          <S.ProjectImage src={url_shortener} />
          <S.ProjectCard>
            <S.ProjectName>Url shortener</S.ProjectName>
            <S.Description>
              Projeto realizado consumindo uma API de encutador de links, para
              encurtar links muito grandes.
            </S.Description>
            <S.TechnologiesUsed>
              <S.Span>Técnologias usadas:</S.Span> HTML, CSS e Javascript.
            </S.TechnologiesUsed>
            <S.Links>
              <S.Link
                target="_blank"
                href="https://leubomfim.github.io/url-shortener/"
              >
                Site
              </S.Link>
              <S.Link
                target="_blank"
                href="https://github.com/leubomfim/url-shortener"
              >
                Github
              </S.Link>
            </S.Links>
          </S.ProjectCard>
        </S.ProjectCardAndImage>

        <S.ProjectCardAndImage>
          <S.ProjectImage src={gitFinder} />
          <S.ProjectCard>
            <S.ProjectName>Github finder</S.ProjectName>
            <S.Description>
              Projeto realizado consumindo a API do github, para encontrar
              usúarios e seus repositórios.
            </S.Description>
            <S.TechnologiesUsed>
              <S.Span>Técnologias usadas:</S.Span> HTML, CSS e Javascript.
            </S.TechnologiesUsed>
            <S.Links>
              <S.Link
                target="_blank"
                href="https://github.com/leubomfim/git-finder"
              >
                Site
              </S.Link>
              <S.Link
                target="_blank"
                href="https://leubomfim.github.io/git-finder/"
              >
                Github
              </S.Link>
            </S.Links>
          </S.ProjectCard>
        </S.ProjectCardAndImage>

        <S.ProjectCardAndImage>
          <S.ProjectImage src={gitFinderReact} />
          <S.ProjectCard>
            <S.ProjectName>Github finder - com React</S.ProjectName>
            <S.Description>
              Projeto realizado consumindo a API do github, para encontrar
              usúarios e seus repositórios.
            </S.Description>
            <S.TechnologiesUsed>
              <S.Span>Técnologias usadas:</S.Span> ReactJs e Css modules.
            </S.TechnologiesUsed>
            <S.Links>
              <S.Link
                target="_blank"
                href="https://react-git-finder.vercel.app/"
              >
                Site
              </S.Link>
              <S.Link
                target="_blank"
                href="https://github.com/leubomfim/react-git-finder"
              >
                Github
              </S.Link>
            </S.Links>
          </S.ProjectCard>
        </S.ProjectCardAndImage>

        <S.ProjectCardAndImage>
          <S.ProjectImage src={lasless} />
          <S.ProjectCard>
            <S.ProjectName>laslessVPN</S.ProjectName>
            <S.Description>
              Um site de aonde o usúario pode pegar informações da laslessVPN,
              escolher planos, ver recomendações, etc.
            </S.Description>
            <S.TechnologiesUsed>
              <S.Span>Técnologias usadas:</S.Span> HTML, CSS e Javascript.
            </S.TechnologiesUsed>
            <S.Links>
              <S.Link
                target="_blank"
                href="https://leubomfim.github.io/laslessVPN/"
              >
                Site
              </S.Link>
              <S.Link
                target="_blank"
                href="https://github.com/leubomfim/laslessVPN"
              >
                Github
              </S.Link>
            </S.Links>
          </S.ProjectCard>
        </S.ProjectCardAndImage>

        <S.ProjectCardAndImage>
          <S.ProjectImage src={countries} />
          <S.ProjectCard>
            <S.ProjectName>Rest Countries</S.ProjectName>
            <S.Description>
              Projeto realizado consumindo uma REST API de países, aonde o
              usúario pode obter diversas informações dos países.
            </S.Description>
            <S.TechnologiesUsed>
              <S.Span>Técnologias usadas:</S.Span> HTML, CSS e Javascript.
            </S.TechnologiesUsed>
            <S.Links>
              <S.Link
                target="_blank"
                href="https://rest-countries-xi-three.vercel.app/"
              >
                Site
              </S.Link>
              <S.Link
                target="_blank"
                href="https://github.com/leubomfim/rest-countries"
              >
                Github
              </S.Link>
            </S.Links>
          </S.ProjectCard>
        </S.ProjectCardAndImage>

        <S.ProjectCardAndImage>
          <S.ProjectImage src={react_countries} />
          <S.ProjectCard>
            <S.ProjectName>Rest Countries - com React</S.ProjectName>
            <S.Description>
              Projeto realizado consumindo uma REST API de países, aonde o
              usúario pode obter diversas informações dos países.
            </S.Description>
            <S.TechnologiesUsed>
              <S.Span>Técnologias usadas:</S.Span> ReactJs e Styled-components
              (CSS-in-JS).
            </S.TechnologiesUsed>
            <S.Links>
              <S.Link
                target="_blank"
                href="https://github.com/leubomfim/react-rest-countries"
              >
                Site
              </S.Link>
              <S.Link
                target="_blank"
                href="https://react-rest-countries-six.vercel.app/"
              >
                Github
              </S.Link>
            </S.Links>
          </S.ProjectCard>
        </S.ProjectCardAndImage>

        <S.ProjectCardAndImage>
          <S.ProjectImage src={toDo} />
          <S.ProjectCard>
            <S.ProjectName>To-do</S.ProjectName>
            <S.Description>
              Um aplicativo aonde o usúario possa adicionar sua rotina do
              cotidiniano, excluir e editar.
            </S.Description>
            <S.TechnologiesUsed>
              <S.Span>Técnologias usadas:</S.Span> ReactJs e Styled-components
              (CSS-in-JS).
            </S.TechnologiesUsed>
            <S.Links>
              <S.Link
                target="_blank"
                href="https://todo-react-navy.vercel.app/"
              >
                Site
              </S.Link>
              <S.Link
                target="_blank"
                href="https://github.com/leubomfim/todo-react"
              >
                Github
              </S.Link>
            </S.Links>
          </S.ProjectCard>
        </S.ProjectCardAndImage>

        <S.ProjectCardAndImage>
          <S.ProjectImage src={poke} />
          <S.ProjectCard>
            <S.ProjectName>Pokédex</S.ProjectName>
            <S.Description>
              Projeto realizado consumindo a pokéAPI, para consultar várias
              informações sobre pokémons.
            </S.Description>
            <S.TechnologiesUsed>
              <S.Span>Técnologias usadas:</S.Span> ReactJs e Styled-components
              (CSS-in-JS).
            </S.TechnologiesUsed>
            <S.Links>
              <S.Link
                target="_blank"
                href="https://poke-api-pokedex.vercel.app/"
              >
                Site
              </S.Link>
              <S.Link
                target="_blank"
                href="https://github.com/leubomfim/poke-api-pokedex"
              >
                Github
              </S.Link>
            </S.Links>
          </S.ProjectCard>
        </S.ProjectCardAndImage>

        <S.ProjectCardAndImage>
          <S.ProjectImage src={advice} />
          <S.ProjectCard>
            <S.ProjectName>Advice generator</S.ProjectName>
            <S.Description>
              Projeto feito consumindo uma API de conselhos, para obter dicas
              diversas.
            </S.Description>
            <S.TechnologiesUsed>
              <S.Span>Técnologias usadas:</S.Span> HTML, CSS e Javascript.
            </S.TechnologiesUsed>
            <S.Links>
              <S.Link
                target="_blank"
                href="https://leubomfim.github.io/advice-generator-app//"
              >
                Site
              </S.Link>
              <S.Link
                target="_blank"
                href="https://github.com/leubomfim/advice-generator-app"
              >
                Github
              </S.Link>
            </S.Links>
          </S.ProjectCard>
        </S.ProjectCardAndImage>

        <S.ProjectCardAndImage>
          <S.ProjectImage src={movies} />
          <S.ProjectCard>
            <S.ProjectName>Movies App</S.ProjectName>
            <S.Description>
              Projeto feito consumindo a API da TMDB, para consulta informações
              sobre filmes e séries..
            </S.Description>
            <S.TechnologiesUsed>
              <S.Span>Técnologias usadas:</S.Span> HTML, CSS e Javascript.
            </S.TechnologiesUsed>
            <S.Links>
              <S.Link
                target="_blank"
                href="https://movies-project-taupe.vercel.app/"
              >
                Site
              </S.Link>
              <S.Link
                target="_blank"
                href="https://github.com/leubomfim/movies-project"
              >
                Github
              </S.Link>
            </S.Links>
          </S.ProjectCard>
        </S.ProjectCardAndImage>

        <S.ProjectCardAndImage>
          <S.ProjectImage src={rick} />
          <S.ProjectCard>
            <S.ProjectName>Rick and morty - App</S.ProjectName>
            <S.Description>
              Projeto feito consumindo a API, podendo acessar informações sobre
              episodios, personagens e localizações.
            </S.Description>
            <S.TechnologiesUsed>
              <S.Span>Técnologias usadas:</S.Span> HTML, CSS e Javascript.
            </S.TechnologiesUsed>
            <S.Links>
              <S.Link
                target="_blank"
                href="https://rick-and-morty-api-leubomfim.vercel.app/"
              >
                Site
              </S.Link>
              <S.Link
                target="_blank"
                href="https://github.com/leubomfim/rick-and-morty-api"
              >
                Github
              </S.Link>
            </S.Links>
          </S.ProjectCard>
        </S.ProjectCardAndImage>

        <S.ProjectCardAndImage>
          <S.ProjectImage src={project} />
          <S.ProjectCard>
            <S.ProjectName>Projects App</S.ProjectName>
            <S.Description>
              Um projeto util para o usuário adicionar seus projetos, editar e
              exclui-los, etc.
            </S.Description>
            <S.TechnologiesUsed>
              <S.Span>Técnologias usadas:</S.Span> HTML, CSS e Javascript.
            </S.TechnologiesUsed>
            <S.Links>
              <S.Link
                target="_blank"
                href="https://project-test-topaz.vercel.app/"
              >
                Site
              </S.Link>
              <S.Link
                target="_blank"
                href="https://github.com/leubomfim/project-test"
              >
                Github
              </S.Link>
            </S.Links>
          </S.ProjectCard>
        </S.ProjectCardAndImage>
      </S.Projects>
    </>
  );
};
