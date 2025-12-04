import styled from "styled-components";
import { motion } from "framer-motion";

export const Footer = styled.footer`
  width: 100%;
  background: var(--bg-color);
  padding: 4rem 0;
  text-align: center;
  border-top: 1px solid var(--glass-border);
  position: relative;
`;

export const FooterInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
`;

export const FooterName = styled.h2`
  color: var(--text-color);
  font-size: 2.4rem;
  font-weight: 700;
  background: linear-gradient(
    to right,
    var(--primary-color),
    var(--secondary-color)
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const FooterP = styled.p`
  color: var(--text-secondary);
  font-size: 1.4rem;
`;

export const FooterSpan = styled.span`
  color: var(--primary-color);
  font-weight: 600;
`;

export const LinksFooter = styled.div`
  display: flex;
  gap: 2rem;
  margin-top: 1rem;
`;

export const Link = styled(motion.a)`
  font-size: 2.4rem;
  color: var(--text-secondary);
  transition: color 0.3s ease;
  cursor: pointer;

  &:hover {
    color: var(--primary-color);
  }
`;
