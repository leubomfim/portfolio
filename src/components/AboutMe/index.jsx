import * as S from './styles';
import logo from '../../images/leo_photo.jpeg';

export const AboutMe = () => {
  return (
    <>
      <S.SectionName>Sobre mim</S.SectionName>
      <S.AboutWrapper>
        <p>
          Me chamo Leonardo Bomfim, tenho 20 anos. Sou um Desenvolvedor
          Front-end em busca de minha primeira oportunidade na área. Focado em
          fazer projetos e aprimorar meu conhecimentos em softs e hards skills.
        </p>
        <S.Photo src={logo} alt="Leonardo profile photo" />
      </S.AboutWrapper>
    </>
  );
};
