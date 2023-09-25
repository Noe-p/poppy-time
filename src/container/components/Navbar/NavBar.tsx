import { H2, P18 } from '@/components/Texts';
import { ROUTES } from '@/routing';
import { ToggleMenuButton } from '@noe-p/react-buttons-components';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/dist/client/router';
import React, { useEffect, useState } from 'react';
import tw from 'tailwind-styled-components';

interface NavBarProps {
  className?: string;
  isClose?: boolean;
}

export function NavBar(props: NavBarProps): React.JSX.Element {
  const { className, isClose } = props;
  const { t } = useTranslation();
  const [isMobile, setIsMobile] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

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
    <Main className={className} $isClose={isClose}>
      <Content>
        <Left>
          <LogoContainer onClick={() => router.push(ROUTES.home)}>
            <TextNavigation
              $selected={`/${router.pathname.split('/')[1]}` === ROUTES.home}
            >
              {t('home.name')}
            </TextNavigation>
          </LogoContainer>
        </Left>
        {!isMobile ? (
          <Right>
            <RightLink onClick={() => router.push(ROUTES.studio)}>
              <TextNavigation
                $selected={
                  `/${router.pathname.split('/')[1]}` === ROUTES.studio
                }
              >
                {t('studio.name')}
              </TextNavigation>
            </RightLink>
            <RightLink onClick={() => router.push(ROUTES.musician)}>
              <TextNavigation
                $selected={`/${router.pathname.split('/')[1]}` === ROUTES.musician}
              >
                {t('musician.name')}
              </TextNavigation>
            </RightLink>
            <RightLink onClick={() => router.push(ROUTES.concert)}>
              <TextNavigation
                $selected={
                  `/${router.pathname.split('/')[1]}` === ROUTES.concert
                }
              >
                {t('concert.name')}
              </TextNavigation>
            </RightLink>
            <RightLink onClick={() => router.push(ROUTES.news)}>
              <TextNavigation
                $selected={`/${router.pathname.split('/')[1]}` === ROUTES.news}
              >
                {t('news.name')}
              </TextNavigation>
            </RightLink>
            <RightLink onClick={() => router.push(ROUTES.project)}>
              <TextNavigation
                $selected={`/${router.pathname.split('/')[1]}` === ROUTES.project}
              >
                {t('project.name')}
              </TextNavigation>
            </RightLink>
          </Right>
        ) : (
          <Right>
            <ToggleMenuButton
              isMenuOpen={isMenuOpen}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            />
            <Menu $isOpen={isMenuOpen}>
              <MenuLink
                $selected={`/${router.pathname.split('/')[1]}` === ROUTES.home}
                onClick={() => router.push(ROUTES.home)}
              >
                {t('home.name')}
              </MenuLink>
              <MenuLink
                $selected={
                  `/${router.pathname.split('/')[1]}` === ROUTES.studio
                }
                onClick={() => router.push(ROUTES.studio)}
              >
                {t('studio.name')}
              </MenuLink>
              <MenuLink
                $selected={`/${router.pathname.split('/')[1]}` === ROUTES.musician}
                onClick={() => router.push(ROUTES.musician)}
              >
                {t('musician.name')}
              </MenuLink>
              <MenuLink
                $selected={
                  `/${router.pathname.split('/')[1]}` === ROUTES.concert
                }
                onClick={() => router.push(ROUTES.concert)}
              >
                {t('concert.name')}
              </MenuLink>
              <MenuLink
                $selected={`/${router.pathname.split('/')[1]}` === ROUTES.news}
                onClick={() => router.push(ROUTES.news)}
              >
                {t('news.name')}
              </MenuLink>
              <MenuLink
                $selected={`/${router.pathname.split('/')[1]}` === ROUTES.project}
                onClick={() => router.push(ROUTES.project)}
              >
                {t('project.name')}
              </MenuLink>
            </Menu>
          </Right>
        )}
      </Content>
    </Main>
  );
}

const Main = tw.div<{ $isClose?: boolean }>`
  w-full
  justify-center
  flex
  fixed
  shadow
  z-30
  ${(props) => (props.$isClose ? 'h-0' : 'h-18')}
  transition-all
  duration-300
  ${(props) => (props.$isClose ? 'opacity-0' : 'opacity-100')}
  bg-white
`;

const Content = tw.div`
  w-full
  md:w-5/12
  lg:w-9/12
  flex
  flex-row
  justify-between
  items-center

`;

const Left = tw.div`
  pl-5
  pt-5
  pb-3
`;

const Right = tw.div`
  flex
  flex-row
  justify-between
  pr-5
  pt-5
  pb-3
`;

const RightLink = tw.div`
  ml-5
  cursor-pointer
`;

const LogoContainer = tw.div`
  flex
  justify-center
  items-center
  cursor-pointer
`;

const TextNavigation = tw(P18) <{ $selected?: boolean }>`
  uppercase
  ${(props) => (props.$selected ? 'opacity-100' : 'opacity-50')}
  transition-all
  duration-300
  cursor-pointer
  hover:opacity-100
  text-black
  

  ${(props) =>
    props.$selected
      ? 'border-b-2 border-black'
      : 'border-b-2 border-transparent'}
`;

const Menu = tw.div<{ $isOpen: boolean }>`
  ${(props) => (props.$isOpen ? 'h-screen' : 'h-0')}
  w-full
  absolute
  top-full
  left-0
  bg-white
  flex
  flex-col
  items-center
  justify-center
  transition-all
  duration-300
  overflow-hidden
  z-50
`;

const MenuLink = tw(H2) <{ $selected?: boolean }>`
  uppercase
  ${(props) => (props.$selected ? 'text-black' : 'text-gray-400')}
  m-4
  cursor-pointer
  text-center
  -translate-y-10
`;
