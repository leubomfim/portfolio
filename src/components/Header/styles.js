import styled, { css } from 'styled-components';

export const Header = styled.header`
  padding: 30px 0;
  background-color: #222;
  border-bottom: 2px solid #272727;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 5;
`;

export const Container = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 1024px;


  @media screen and (max-width: 1025px) {
    width: 90%;
  }

  @media screen and (max-width: 900px) {
    width: 85%;
  }
`;

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const HeaderTitle = styled.h1`
  color: #c4c4c4;
  font-size: 25px;
  font-weight: 400;
  position: relative;
  transition: all 300ms ease-in-out;
  z-index: 2;
  cursor: default;

  &::before {
    content: '';
    background: white;
    position: absolute;
    left: -4px;
    bottom: 0;
    width: 0px;
    height: 100%;
    transition: all 300ms ease-in-out;
    z-index: -1;
  };

  &:hover::before {
    width: 110%;
  };

  &:hover {
    color: rgb(61, 61, 61);
    transform: scale(1.2);
  };
`;

export const HeaderNav = styled.nav`

`;

export const HeaderUl = styled.ul`
  display: flex;
  gap: 20px;
`;

export const HeaderList = styled.li`
  transition: all 300ms ease-in-out;
  &:hover {
    transform: scale(1.2);
  }

  & > a {
    padding: 5px;
    color: #c4c4c4;
    position: relative;
    transition: all 300ms ease-in-out;
    font-size: 20px;
    z-index: 2;
  };

  & > a::before {
    content: '';
    background: white;
    position: absolute;
    left: 0;
    bottom: 0;
    width: 0px;
    height: 100%;
    transition: all 300ms ease-in-out;
    z-index: -1;
  };

  & > a:hover::before {
    width: 100%;
  };

  & > a:hover {
    color: rgb(61, 61, 61);
  };
`;

export const MenuIcon = styled.button`
  background-color: transparent;
  position: absolute;
  top: 30px;
  right: 30px;
  z-index: 500;
  ${({ menu }) => css`
    & > svg {
    ${!menu ? 'color: #c4c4c4;' : 'color: #222;'}
    z-index: 500;
    font-size: 30px;
  }
  `}
`;

export const MenuMobile = styled.div`
  ${({ menu }) => css`
    ${!menu ? 'display: none;' : 'display: flex;'}
    position: absolute;
    width: 75%;
    background-color: white;
    height: 100vh;
    right: 0;
    top: 0;
    z-index: 499;
    justify-content: center;
    align-items: center;
  `}
`;

export const MenuMobileWrapper = styled.div`

`;

export const MenuBackground = styled.div`
  ${({ menu }) => css`
    ${!menu ? 'display: none;' : 'display: block;'}
    position: absolute;
    right: 0;
    top: 0;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.438);
    height: 100vh;
    z-index: 496;
  `}
`;

export const HeaderMenuUl = styled.ul`
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: 80px;
`;

export const HeaderMenuList = styled.li`
  transition: all 300ms ease-in-out;
  &:hover {
    transform: scale(1.2);
  }

  & > a {
    padding: 5px;
    color: #222;
    position: relative;
    transition: all 300ms ease-in-out;
    font-size: 20px;
    z-index: 2;
  };

  & > a::before {
    content: '';
    background: white;
    position: absolute;
    left: 0;
    bottom: 0;
    width: 0px;
    height: 100%;
    transition: all 300ms ease-in-out;
    z-index: -1;
  };

  & > a:hover::before {
    width: 100%;
  };

  & > a:hover {
    color: rgb(61, 61, 61);
  };
`;
