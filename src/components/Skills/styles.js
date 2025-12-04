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

export const SkillsWrapper = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 3rem;
  width: 100%;
  padding: 2rem;
`;

export const Skill = styled(motion.div)`
  background: var(--glass-bg);
  backdrop-filter: blur(10px);
  border: 1px solid var(--glass-border);
  border-radius: 16px;
  padding: 3rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    background: var(--card-hover);
    transform: translateY(-5px);
    border-color: var(--primary-color);
    box-shadow: 0 10px 30px -10px rgba(99, 102, 241, 0.3);
  }
`;

export const LanguageLogo = styled.img`
  width: 64px;
  height: 64px;
  object-fit: contain;
  filter: drop-shadow(0 0 10px rgba(255, 255, 255, 0.1));
  transition: all 0.3s ease;

  ${Skill}:hover & {
    transform: scale(1.1);
    filter: drop-shadow(0 0 15px rgba(99, 102, 241, 0.4));
  }
`;

export const LanguageName = styled.h3`
  color: var(--text-secondary);
  font-size: 1.6rem;
  font-weight: 500;
  transition: color 0.3s ease;

  ${Skill}:hover & {
    color: var(--text-color);
  }
`;
