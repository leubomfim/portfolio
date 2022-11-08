import * as S from './styles';
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineClose } from 'react-icons/ai';
import { usePortContext } from '../../contexts/context';

export const Header = () => {
  const { menu, setMenu, width } = usePortContext();

  return (
    <S.Header>
      <S.Container>
        {width > 660 && (
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
        )}
        {width <= 660 && (
          <S.HeaderWrapper>
            <S.HeaderTitle>{'<LSBS/>'}</S.HeaderTitle>
            <S.MenuIcon menu={menu} onClick={() => setMenu((m) => !m)}>
              {menu ? <AiOutlineClose /> : <GiHamburgerMenu />}
            </S.MenuIcon>
            <S.MenuBackground menu={menu}>
              <S.MenuMobile menu={menu}>
                <S.MenuMobileWrapper>
                  <S.HeaderMenuUl>
                    <S.HeaderMenuList>
                      <a onClick={() => setMenu((m) => !m)} href="#home">
                        Início
                      </a>
                    </S.HeaderMenuList>
                    <S.HeaderMenuList>
                      <a onClick={() => setMenu((m) => !m)} href="#about_me">
                        Sobre mim
                      </a>
                    </S.HeaderMenuList>
                    <S.HeaderMenuList>
                      <a onClick={() => setMenu((m) => !m)} href="#skills">
                        Habilidades
                      </a>
                    </S.HeaderMenuList>
                    <S.HeaderMenuList>
                      <a onClick={() => setMenu((m) => !m)} href="#projects">
                        Projetos
                      </a>
                    </S.HeaderMenuList>
                  </S.HeaderMenuUl>
                </S.MenuMobileWrapper>
              </S.MenuMobile>
            </S.MenuBackground>
          </S.HeaderWrapper>
        )}
      </S.Container>
    </S.Header>
  );
};
