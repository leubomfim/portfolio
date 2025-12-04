import * as S from "./styles";
import photo from "../../images/leo_photo.jpeg";

export const AboutMe = () => {
  return (
    <>
      <S.SectionName
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        Sobre mim
      </S.SectionName>
      <S.AboutWrapper
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <S.TextContainer>
          <p>
            Olá! Sou o <strong>Leonardo</strong>, um desenvolvedor apaixonado
            por criar experiências web incríveis.
          </p>
          <p>
            Com foco em <strong>Front-end</strong>, busco sempre unir design e
            funcionalidade para entregar interfaces modernas e intuitivas.
          </p>
          <p>
            Estou sempre estudando novas tecnologias e aprimorando minhas
            habilidades para resolver problemas complexos com soluções
            elegantes.
          </p>
        </S.TextContainer>

        <S.PhotoContainer
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <S.Photo src={photo} alt="Leonardo Bomfim" />
        </S.PhotoContainer>
      </S.AboutWrapper>
    </>
  );
};
