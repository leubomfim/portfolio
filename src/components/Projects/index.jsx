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
              Projeto realizado consumindo uma API de conselhos, aonde o usuario
              possa ter dicas diversas.
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
              Projeto realizado consumindo uma API de conselhos, aonde o usuario
              possa ter dicas diversas.
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
            <S.ProjectName>Github finder com React</S.ProjectName>
            <S.Description>
              Projeto realizado consumindo uma API de conselhos, aonde o usuario
              possa ter dicas diversas.
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
              Projeto realizado consumindo uma API de conselhos, aonde o usuario
              possa ter dicas diversas.
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
              Projeto realizado consumindo uma API de conselhos, aonde o usuario
              possa ter dicas diversas.
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
            <S.ProjectName>Rest Countries com React</S.ProjectName>
            <S.Description>
              Projeto realizado consumindo uma API de conselhos, aonde o usuario
              possa ter dicas diversas.
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
              Projeto realizado consumindo uma API de conselhos, aonde o usuario
              possa ter dicas diversas.
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
              Projeto realizado consumindo uma API de conselhos, aonde o usuario
              possa ter dicas diversas.
            </S.Description>
            <S.TechnologiesUsed>
              <S.Span>Técnologias usadas:</S.Span> HTML, CSS e Javascript.
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
              Projeto realizado consumindo uma API de conselhos, aonde o usuario
              possa ter dicas diversas.
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
      </S.Projects>
    </>
  );
};
