import styled from 'styled-components';

export const SectionName = styled.h2`
  color: white;
  margin: 0 auto 80px;
  font-size: 32px;
  width: 136px;
  transition: all 300ms ease-in-out;

  &::before {
    content: '';
    background: white;
    position: absolute;
    left: -4px;
    bottom: 0;
    width: 0px;
    height: 100%;
    transition: all 300ms ease-in-out;
    z-index: -1;
  };

  &:hover::before {
    width: 100%;
  };

  &:hover {
    color: rgb(61, 61, 61);
    transform: rotate(5deg) scale(1.05);
  };
`;

export const Projects = styled.div`
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(auto-fill, minmax(300px, 500px));
  gap: 50px;
`;

export const ProjectCardAndImage = styled.div`
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  transition: transform 400ms ease;

  &:hover {
    transform: scale(1.18);
  };
  `;

export const ProjectImage = styled.img`
  width: 100%;
  height: 300px;

  @media screen and (max-width: 600px) {
    height: 200px;
  }
`;

export const ProjectCard = styled.div`
  padding: 10px;
  background-color: #222;
  border-left: 1px solid #c4c4c4;
  height: auto;
`;

export const ProjectName = styled.h3`
  color: #c4c4c4;
  margin-top: 10px;
`;

export const Links = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;
`;

export const Link = styled.a`
  color: #c4c4c4;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #c4c4c4;
  transition: all 400ms ease;
  margin-top: 20px;

  &:hover {
    background-color: rgba(255, 255, 255, 0.158);
  }
`;

export const Description = styled.p`
  color: #c4c4c4;
  margin-top: 15px;
`;

export const Span = styled.span`
  font-weight: 600;
`;

export const TechnologiesUsed = styled.p`
  color: #c4c4c4;
  margin-top: 15px;
`;
