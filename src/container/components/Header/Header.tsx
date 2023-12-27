import { FlexRow, H1 } from '@/components';
import { useTranslation } from 'next-i18next';
import React, { useEffect, useState } from 'react';
import tw from 'tailwind-styled-components';

interface HeaderProps {
  className?: string;
}

export function Header(props: HeaderProps): React.JSX.Element {
  const { className } = props;
  const { t } = useTranslation();
  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsAnimated(true);
    }, 100);
  }, []);

  return (
    <Main className={className}>
      <Filter />
      {/* <ImageBackground>
        <Image
          src='/images/header.webP'
          alt='header'
          className='border-none'
        />
      </ImageBackground> */}
      <VideoBackground autoPlay loop muted playsInline>
        <source src="/videos/header.mp4" type="video/mp4" />
      </VideoBackground>
      <FlexRow className="flex-col md:flex-row">
        <Title $isAnimated={isAnimated}>{t('home.title')}</Title>
      </FlexRow>
    </Main>
  );
}

const Main = tw.div`
  flex
  flex-col
  items-center
  justify-center
  h-screen
  w-screen
  z-0
`;
const Filter = tw.div`
  absolute
  top-0
  left-0
  bottom-0
  right-0
  w-full
  h-full
  bg-black
  opacity-50
  z-10
`;

const VideoBackground = tw.video`
  absolute
  top-0
  left-0
  right-0
  bottom-0
  w-full
  h-full
  z-0
`;

const Title = tw(H1)<{ $isAnimated: boolean }>`
  text-white
  text-8xl
  font-bold
  text-center
  transform
  transition-all
  duration-1000
  delay-100
  ease-in-out
  ${(props) => (props.$isAnimated ? 'translate-y-0' : '-translate-y-50')}
  ${(props) => (props.$isAnimated ? 'opacity-100' : 'opacity-0')}
  line-height-1
  z-20
  mx-1
`;
