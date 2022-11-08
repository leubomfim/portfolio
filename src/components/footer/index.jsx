import * as S from './styles';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';

export const Footer = () => {
  return (
    <S.Footer>
      <S.FooterInfo>
        <S.FooterName>Feito por Leonardo Bomfim</S.FooterName>
        <S.FooterP>
          <S.FooterSpan>Contato:</S.FooterSpan> leosoares.me@gmail.com
        </S.FooterP>
        <S.LinksFooter>
          <S.Link
            href="https://github.com/leubomfim"
            linkedin={false}
            target="_blank"
          >
            <AiFillGithub />
          </S.Link>
          <S.Link
            linkedin={true}
            href="https://www.linkedin.com/in/leonardo-bomfim-9a8a0723b/"
            target="_blank"
          >
            <AiFillLinkedin />
          </S.Link>
        </S.LinksFooter>
      </S.FooterInfo>
    </S.Footer>
  );
};
