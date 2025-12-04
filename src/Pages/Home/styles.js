import styled, { css } from "styled-components";
import { motion } from "framer-motion";

export const Section = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  padding-top: 80px; /* Header height */
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  z-index: 1;
`;

export const Bg = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  background: radial-gradient(
    circle at 50% 50%,
    rgba(99, 102, 241, 0.15) 0%,
    rgba(10, 10, 10, 0) 50%
  );

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%236366f1' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  }
`;

export const DisplayProfile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 2rem;
`;

export const SectionProfileWrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
`;

export const HeadingTwo = styled(motion.h2)`
  color: var(--text-secondary);
  font-size: 2.4rem;
  font-weight: 500;

  @media (min-width: 768px) {
    font-size: 3.2rem;
  }
`;

export const SpanName = styled(motion.h1)`
  font-size: 4.8rem;
  font-weight: 800;
  line-height: 1.1;
  background: linear-gradient(to right, #fff, var(--text-secondary));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 1rem;

  @media (min-width: 768px) {
    font-size: 8rem;
  }
`;

export const RoleText = styled(motion.h3)`
  font-size: 2rem;
  color: var(--primary-color);
  font-weight: 600;
  letter-spacing: 2px;
  text-transform: uppercase;
  margin-bottom: 2rem;

  @media (min-width: 768px) {
    font-size: 2.4rem;
  }
`;

export const LinksArea = styled(motion.div)`
  display: flex;
  gap: 2rem;
  margin-top: 2rem;
`;

export const Link = styled(motion.a)`
  padding: 1.2rem 3rem;
  border-radius: 50px;
  font-size: 1.6rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 1rem;

  ${({ primary }) =>
    primary
      ? css`
          background: var(--primary-color);
          color: white;
          box-shadow: 0 4px 14px 0 rgba(99, 102, 241, 0.39);

          &:hover {
            background: #5558e6;
            transform: translateY(-2px);
            box-shadow: 0 6px 20px rgba(99, 102, 241, 0.23);
          }
        `
      : css`
          background: rgba(255, 255, 255, 0.05);
          color: var(--text-color);
          border: 1px solid var(--glass-border);
          backdrop-filter: blur(10px);

          &:hover {
            background: rgba(255, 255, 255, 0.1);
            transform: translateY(-2px);
            border-color: var(--text-secondary);
          }
        `}
`;

export const SkillsSection = styled.section`
  padding: 10rem 0;
  position: relative;
`;

export const ProjectsSection = styled.section`
  padding: 10rem 0;
  position: relative;
`;

export const ScrollIndicator = styled(motion.div)`
  position: absolute;
  bottom: 4rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  color: var(--text-secondary);
  font-size: 1.4rem;

  &::after {
    content: "";
    width: 1px;
    height: 60px;
    background: linear-gradient(to bottom, var(--primary-color), transparent);
  }
`;
