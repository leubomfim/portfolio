import * as S from "./styles";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { usePortContext } from "../../contexts/context";
import { AnimatePresence } from "framer-motion";

export const Header = () => {
  const { menu, setMenu, width } = usePortContext();

  const menuVariants = {
    hidden: { opacity: 0, x: "100%" },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.4, ease: "easeInOut" },
    },
    exit: {
      opacity: 0,
      x: "100%",
      transition: { duration: 0.4, ease: "easeInOut" },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <S.Header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <S.Container>
        <S.HeaderWrapper>
          <S.HeaderTitle
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {"<LSBS/>"}
          </S.HeaderTitle>

          {width > 768 ? (
            <S.HeaderNav>
              <S.HeaderUl>
                {["Início", "Sobre mim", "Habilidades", "Projetos"].map(
                  (item, index) => {
                    const href =
                      item === "Início"
                        ? "#home"
                        : item === "Sobre mim"
                        ? "#about_me"
                        : item === "Habilidades"
                        ? "#skills"
                        : "#projects";
                    return (
                      <S.HeaderList
                        key={index}
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 + index * 0.1 }}
                      >
                        <a href={href}>{item}</a>
                      </S.HeaderList>
                    );
                  }
                )}
              </S.HeaderUl>
            </S.HeaderNav>
          ) : (
            <S.MenuIcon
              menu={menu}
              onClick={() => setMenu((m) => !m)}
              whileTap={{ scale: 0.9 }}
            >
              {menu ? <AiOutlineClose /> : <GiHamburgerMenu />}
            </S.MenuIcon>
          )}
        </S.HeaderWrapper>
      </S.Container>

      <AnimatePresence>
        {menu && width <= 768 && (
          <S.MenuMobile
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <S.HeaderMenuUl>
              {["Início", "Sobre mim", "Habilidades", "Projetos"].map(
                (item, index) => {
                  const href =
                    item === "Início"
                      ? "#home"
                      : item === "Sobre mim"
                      ? "#about_me"
                      : item === "Habilidades"
                      ? "#skills"
                      : "#projects";
                  return (
                    <S.HeaderMenuList
                      key={index}
                      variants={itemVariants}
                      initial="hidden"
                      animate="visible"
                      transition={{ delay: 0.3 + index * 0.1 }}
                    >
                      <a onClick={() => setMenu(false)} href={href}>
                        {item}
                      </a>
                    </S.HeaderMenuList>
                  );
                }
              )}
            </S.HeaderMenuUl>
          </S.MenuMobile>
        )}
      </AnimatePresence>
    </S.Header>
  );
};
