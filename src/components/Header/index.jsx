import * as S from './styles';

export const Header = () => {
  return (
    <S.Header>
      <S.Container>
        <S.HeaderWrapper>
          <S.HeaderTitle>{'<LSBS/>'}</S.HeaderTitle>
          <S.HeaderNav>
            <S.HeaderUl>
              <S.HeaderList>
                <a href="#home">Início</a>
              </S.HeaderList>
              <S.HeaderList>
                <a href="#about_me">Sobre mim</a>
              </S.HeaderList>
              <S.HeaderList>
                <a href="#skills">Habilidades</a>
              </S.HeaderList>
              <S.HeaderList>
                <a href="#projects">Projetos</a>
              </S.HeaderList>
            </S.HeaderUl>
          </S.HeaderNav>
        </S.HeaderWrapper>
      </S.Container>
    </S.Header>
  );
};
