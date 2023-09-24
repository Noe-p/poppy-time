import { Link, P14 } from '@/components/Texts';
import { useTranslation } from 'next-i18next';
import React from 'react';
import { SocialIcon } from 'react-social-icons';
import tw from 'tailwind-styled-components';
import { router } from 'next/router';
interface FooterProps {
  className?: string;
}

export function Footer(props: FooterProps): React.JSX.Element {
  const { className } = props;
  const { t } = useTranslation();

  return (
    <Main className={className}>
      <InfosContainer>
        <LinkStyled href='mailto:poppy.timme@gmail.com' target='_blank'>
          {t('poppy.timme@gmail.com')}
        </LinkStyled>
        <LinkStyled href='tel:0772305954' target='_blank'>
          {t('07 72 30 59 54')}
        </LinkStyled>
        <LinkStyled href='tel:0767414827' target='_blank'>
          {t('07 67 41 48 27')}
        </LinkStyled>
      </InfosContainer>
      <SocialMediasContainer>
        <SocialLogo href="https://www.instagram.com/poppytimme/" target='_blank' network='instagram' />
        <SocialLogo href="https://www.tiktok.com/@poppy_timme " target='_blank' network='tiktok' />
        <SocialLogo href="https://www.youtube.com/@poppytime" target='_blank' network='youtube' />
        <SocialLogo href="https://www.facebook.com/profile.php?id=100090469154443" target='_blank' network='facebook' />
      </SocialMediasContainer>
      <CopyRight>
        {t('generics.designed')}
        <LinkStyled href='https://noe-philippe.com' target='_blank'>
          {'Noé PHILIPPE'}
        </LinkStyled>
      </CopyRight>
      <CopyRight>{t('generics.copyright')}</CopyRight>
    </Main>
  );
}

const Main = tw.div`
  flex
  items-center
  bg-gray-100
  w-full
  flex-col
  py-8
`;

const SocialMediasContainer = tw.div`
  flex
  p-4
  mb-8
`;

const SocialLogo = tw(SocialIcon)`
  w-5
  h-5
  mx-2
  hover:scale-105
  transition
  duration-100
  ease-in-out
  opacity-90
  hover:opacity-100
  cursor-pointer
`;

const CopyRight = tw(P14)`
  text-center
  text-gray-500
  w-3/4
`;

const InfosContainer = tw.div`
  flex
  flex-col
  items-center
  justify-center
  mb-2
`;

const LinkStyled = tw(Link)`
  text-gray-500
  hover:text-primary
  transition
  duration-100
  ease-in-out
`;
