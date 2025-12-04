import * as S from "./styles";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export const Footer = () => {
  return (
    <S.Footer>
      <S.FooterInfo>
        <S.FooterName>{"<LSBS/>"}</S.FooterName>
        <S.FooterP>
          Desenvolvido por <S.FooterSpan>Leonardo Bomfim</S.FooterSpan>
        </S.FooterP>
        <S.LinksFooter>
          <S.Link
            href="https://github.com/leubomfim"
            target="_blank"
            whileHover={{ scale: 1.2, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaGithub />
          </S.Link>
          <S.Link
            href="https://www.linkedin.com/in/leonardo-bomfim-9a8a0723b/"
            target="_blank"
            whileHover={{ scale: 1.2, rotate: -5 }}
            whileTap={{ scale: 0.9 }}
          >
            <FaLinkedin />
          </S.Link>
        </S.LinksFooter>
      </S.FooterInfo>
    </S.Footer>
  );
};
