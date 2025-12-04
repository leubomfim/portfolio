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

export const Projects = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 3rem;
  padding: 2rem;
`;

export const ProjectCardAndImage = styled(motion.div)`
  background: var(--glass-bg);
  backdrop-filter: blur(10px);
  border: 1px solid var(--glass-border);
  border-radius: 20px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: all 0.3s ease;
  height: 100%;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 40px -10px rgba(0, 0, 0, 0.5);
    border-color: var(--primary-color);
  }
`;

export const ImageContainer = styled.div`
  width: 100%;
  height: 200px;
  overflow: hidden;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      to bottom,
      transparent 0%,
      rgba(10, 10, 10, 0.8) 100%
    );
  }
`;

export const ProjectImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;

  ${ProjectCardAndImage}:hover & {
    transform: scale(1.1);
  }
`;

export const ProjectCard = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 1.5rem;
`;

export const ProjectName = styled.h3`
  color: var(--text-color);
  font-size: 2rem;
  font-weight: 700;
`;

export const Description = styled.p`
  color: var(--text-secondary);
  font-size: 1.4rem;
  line-height: 1.6;
  flex: 1;
`;

export const TechnologiesUsed = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
  margin-top: auto;
`;

export const TechTag = styled.span`
  background: rgba(99, 102, 241, 0.1);
  color: var(--primary-color);
  padding: 0.4rem 1rem;
  border-radius: 50px;
  font-size: 1.2rem;
  font-weight: 600;
  border: 1px solid rgba(99, 102, 241, 0.2);
`;

export const Links = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-top: 1rem;
`;

export const Link = styled.a`
  flex: 1;
  padding: 1rem;
  text-align: center;
  border-radius: 8px;
  font-weight: 600;
  font-size: 1.4rem;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;

  ${({ primary }) =>
    primary
      ? `
    background: var(--primary-color);
    color: white;
    
    &:hover {
      background: #5558e6;
    }
  `
      : `
    background: rgba(255, 255, 255, 0.05);
    color: var(--text-color);
    border: 1px solid var(--glass-border);

    &:hover {
      background: rgba(255, 255, 255, 0.1);
      border-color: var(--text-secondary);
    }
  `}
`;
