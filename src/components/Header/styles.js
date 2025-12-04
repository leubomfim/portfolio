import styled from "styled-components";
import { motion } from "framer-motion";

export const Header = styled(motion.header)`
  padding: 2rem 0;
  background: rgba(10, 10, 10, 0.8);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid var(--glass-border);
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 100;
  transition: all 0.3s ease;
`;

export const Container = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 1200px;
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const HeaderTitle = styled(motion.h1)`
  color: var(--text-color);
  font-size: 2.4rem;
  font-weight: 700;
  cursor: pointer;
  background: linear-gradient(
    to right,
    var(--primary-color),
    var(--secondary-color)
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  letter-spacing: -0.5px;
`;

export const HeaderNav = styled.nav`
  display: flex;
  align-items: center;
`;

export const HeaderUl = styled.ul`
  display: flex;
  gap: 3rem;
  align-items: center;
`;

export const HeaderList = styled(motion.li)`
  & > a {
    color: var(--text-secondary);
    font-size: 1.6rem;
    font-weight: 500;
    transition: color 0.3s ease;
    position: relative;

    &:hover {
      color: var(--primary-color);
    }

    &::after {
      content: "";
      position: absolute;
      width: 0;
      height: 2px;
      bottom: -4px;
      left: 0;
      background-color: var(--primary-color);
      transition: width 0.3s ease;
    }

    &:hover::after {
      width: 100%;
    }
  }
`;

export const MenuIcon = styled(motion.button)`
  background: transparent;
  border: none;
  cursor: pointer;
  z-index: 101;
  display: flex;
  align-items: center;
  justify-content: center;

  & > svg {
    color: var(--text-color);
    font-size: 2.4rem;
  }
`;

export const MenuMobile = styled(motion.div)`
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  height: 100vh;
  background: var(--bg-color);
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
`;

export const HeaderMenuUl = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4rem;
`;

export const HeaderMenuList = styled(motion.li)`
  & > a {
    color: var(--text-color);
    font-size: 3rem;
    font-weight: 700;
    transition: color 0.3s ease;

    &:hover {
      color: var(--primary-color);
    }
  }
`;
