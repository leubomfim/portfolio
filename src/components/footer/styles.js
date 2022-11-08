import styled, { css } from 'styled-components';

export const Footer = styled.footer`
  width: 100%;
  background-color: #222;
  padding: 30px 0;
  text-align: center;
`;

export const FooterInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const FooterName = styled.h2`
    color: white;
`;

export const FooterP = styled.p`
    color: white;
    font-size: 18px;
    margin-top: 20px;
`;

export const FooterSpan = styled.span`
    font-weight: 600;
`;

export const LinksFooter = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 20px;
`;

export const Link = styled.a`
  font-size: 45px;
  ${({ linkedin }) => css`
    ${linkedin && 'color: #0A66C2;'}
    ${!linkedin && 'color: white;'}
  `}
`;
