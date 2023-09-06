import {
  H1,
  Layout,
  P18,
} from '@/components';
import router from 'next/router';
import { Header } from '@/container/components';
import { useTranslation } from 'next-i18next';
import tw from 'tailwind-styled-components';
import { ROUTES } from '@/routing';
export function HomePage(): React.JSX.Element {
  const { t } = useTranslation();

  return (
    <Layout>
      <Header />
      <Main>
        <H1 className='mb-5'>{t('home.sections.title')}</H1>
        <Text>{t('home.sections.p1')}</Text>
        <Text>{t('home.sections.p2')}</Text>
        <Text>
          {t('home.sections.p3')}
          <Anchor onClick={() => router.push(ROUTES.studio)}>{t('studio.name')}</Anchor>
        </Text>
        <Text>
          {t('home.sections.p4')}
          <Anchor onClick={() => router.push(ROUTES.concert)}>{t('concert.name')}</Anchor>
        </Text>
        <Text>
          {t('home.sections.p5')}
          <Anchor onClick={() => router.push(ROUTES.musician)}>{t('musician.name')}</Anchor>
        </Text>
        <Text>
          {t('home.sections.p6')}
          <Anchor onClick={() => router.push(ROUTES.news)}>{t('news.name')}</Anchor>
        </Text>
        <Text>
          {t('home.sections.p7')}
          <Anchor onClick={() => router.push(ROUTES.project)}>{t('project.name')}</Anchor>
        </Text>
        <Text>{t('home.sections.p8')}</Text>
        <Text>{t('home.sections.p9')}</Text>
      </Main>
    </Layout>
  );
}

const Main = tw.div`
  flex
  flex-col
  items-center
  justify-center
  md:w-2/3
  my-20
`;

const Text = tw(P18)`
  text-center
  my-5
  w-full
`

const Anchor = tw.span`
  text-base
  text-primary
  cursor-pointer
  hover:text-secondary
  transition
`