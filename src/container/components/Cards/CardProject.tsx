import { ArrowSmallRightIcon } from '@heroicons/react/24/solid';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { H1, P18 } from '../../../components';
import { Image } from '@/types';

interface CardProjectProps {
  className?: string;
  project: Project;
  onClick?: () => void;

}

interface Project {
  id: string;
  name: string;
  description?: string[];
  backgroundImage: Image;
}


export function CardProject(props: CardProjectProps): JSX.Element {
  const { className, project, onClick } = props;
  const [projectHover, setProjectHover] = useState('');
  const [isMobile, setIsMobile] = useState(false);

  function handleResize() {
    if (window.innerWidth < 768) {
      setIsMobile(true);
    } else setIsMobile(false);
  }

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
  }, []);

  return (
    <ProjectContainer
      onMouseEnter={() => setProjectHover(project.id)}
      onMouseLeave={() => setProjectHover('')}
      className={className}
      {...props}
    >
      <div>
        <ProjectTitle>{project.name}</ProjectTitle>
        {project.description && isMobile ? (
          <ProjectDescription className='desc'>
            {project.description?.join(' ').length > 90
              ? project.description?.join(' ').slice(0, 90) + ' « ... »'
              : project.description?.join(' ')}
          </ProjectDescription>
        ) : (
          project.description?.map((desc, index) => (
            <ProjectDescription key={index} className='desc'>
              {desc}
            </ProjectDescription>
          ))
        )}
      </div>
      <ProjectImageBackground
        src={project.backgroundImage.url}
        alt={project.backgroundImage.url}
      />
      {onClick && <SeeMoreContainer $hover={projectHover === project.id || isMobile}>
        <SeeMore>{'Voir le projet'}</SeeMore>
        <ArrowSmallRightIconStyled />
      </SeeMoreContainer>}
    </ProjectContainer>
  );
}

const ProjectContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  border-radius: 10px;
  border: 1px solid white;
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  overflow: hidden;
  z-index: 1;
  padding: 20px;
  padding-bottom: 60px !important;

  img {
    transform: scale(1);
    transition: all 0.3s ease-in-out;
  }

  h1,
  .desc {
    opacity: 0;
    transform: translateY(50px);
    transition: all 0.3s ease-in-out;
    padding: 20px;
  }

  :hover h1,
  :hover .desc {
    opacity: 1;
    transform: translateY(0);
  }

  :hover img {
    transform: scale(1.05);
  }

  :hover::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
  }

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
    padding: 0;
    min-height: 300px;

    h1 {
      font-size: 2rem;
    }

    ::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.2);
    }

    h1,
    .desc {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const ProjectTitle = styled(H1)`
  line-height: 1;
`;

const ProjectDescription = styled(P18)`
  line-height: 1;
  margin: 0 !important;
  padding-bottom: 5px !important;
  padding-top: 5px !important;
  width: 70%;
  line-height: 1.2;
  color: white;

  @media (max-width: 768px) {
    padding-top: 0;
    margin-bottom: 30px;
    width: 90%;
  }
`;

const SeeMoreContainer = styled.div<{ $hover: boolean }>`
  position: absolute;
  bottom: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 15px 25px;
  opacity: ${({ $hover }) => ($hover ? 1 : 0)};
  transition: all 0.3s ease-in-out;

  p {
    font-size: 1.3rem;
    transition: all 0.2s ease-in-out;
    margin-right: ${({ $hover }) => ($hover ? '14px' : '0')};

    @media (max-width: 768px) {
      margin-right: 5px;
    }
  }
`;

const SeeMore = styled(P18)`
  margin-right: 10px;
  color: white;
`;

const ProjectImageBackground = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: -1;
`;

const ArrowSmallRightIconStyled = styled(ArrowSmallRightIcon)`
  color: white;
  width: 30px;
`;
