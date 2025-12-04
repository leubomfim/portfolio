import styled from "styled-components";
import { motion } from "framer-motion";

export const SectionName = styled(motion.h2)`
  color: var(--text-color);
  margin: 0 auto 4rem;
  font-size: 3.2rem;
  text-align: center;
  position: relative;
  width: fit-content;

  &::after {
    content: "";
    display: block;
    width: 60%;
    height: 4px;
    background: var(--primary-color);
    margin: 0.5rem auto 0;
    border-radius: 2px;
  }
`;

export const AboutWrapper = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4rem;
  background: var(--glass-bg);
  backdrop-filter: blur(10px);
  border: 1px solid var(--glass-border);
  padding: 4rem;
  border-radius: 20px;
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);

  @media (max-width: 900px) {
    flex-direction: column-reverse;
    padding: 2rem;
  }
`;

export const TextContainer = styled(motion.div)`
  flex: 1;
  max-width: 600px;

  & > p {
    color: var(--text-secondary);
    font-size: 1.8rem;
    line-height: 1.8;
    margin-bottom: 1.5rem;

    strong {
      color: var(--primary-color);
      font-weight: 600;
    }
  }
`;

export const PhotoContainer = styled(motion.div)`
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: -10px;
    left: -10px;
    width: 100%;
    height: 100%;
    border: 2px solid var(--primary-color);
    border-radius: 50%;
    z-index: 0;
  }
`;

export const Photo = styled.img`
  width: 250px;
  height: 250px;
  object-fit: cover;
  border-radius: 50%;
  position: relative;
  z-index: 1;
  border: 4px solid var(--bg-color);
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;
