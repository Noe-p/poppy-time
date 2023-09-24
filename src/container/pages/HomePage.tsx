import {
  H1,
  Layout,
  P18,
} from '@/components';
import router from 'next/router';
import { CardProject, Header } from '@/container/components';
import { Trans, useTranslation } from 'next-i18next';
import tw from 'tailwind-styled-components';
import { ROUTES } from '@/routing';


export function HomePage(): React.JSX.Element {
  const { t } = useTranslation();

  return (
    <Layout>
      <Header />
      <Main>
        <div className='my-10'>
          <H1 className='mb-15 w-full md:text-center'> <Trans i18nKey={t('home.sections.title')} /></H1>
          <Text>{t('home.sections.p1')}</Text>
          <Text>{t('home.sections.p2')}</Text>
        </div>
        <CardProject className='mt-10 min-h-150' onClick={() => router.push(ROUTES.concert)} project={
          {
            id: '1',
            name: t('concert.title'),
            description: [t('home.sections.p4')],
            backgroundImage: { url: '/images/home/concert.jpeg' },
          }
        } />
        <CardProject className='mt-10 min-h-150' onClick={() => router.push(ROUTES.studio)} project={
          {
            id: '2',
            name: t('studio.title'),
            description: [t('home.sections.p3')],
            backgroundImage: { url: '/images/home/studio.JPG' },
          }
        } />
        <CardProject className='mt-10 min-h-150' onClick={() => router.push(ROUTES.musician)} project={
          {
            id: '3',
            name: t('musician.title'),
            description: [t('home.sections.p5')],
            backgroundImage: { url: '/images/home/musician.JPG' },
          }
        } />
        <CardProject className='mt-10 min-h-150' onClick={() => router.push(ROUTES.news)} project={
          {
            id: '4',
            name: t('news.title'),
            description: [t('home.sections.p7')],
            backgroundImage: { url: '/images/home/news.JPG' },
          }
        } />
        <CardProject className='mt-10 min-h-150' onClick={() => router.push(ROUTES.project)} project={
          {
            id: '5',
            name: t('project.title'),
            description: [t('home.sections.p8')],
            backgroundImage: { url: '/images/home/project.JPG' },
          }
        } />
      </Main>
    </Layout>
  );
}

const Main = tw.div`
  flex
  flex-col
  items-center
  justify-center
  mt-10
  md:w-3/4
`;

const Text = tw(P18)`
  my-2
  w-full
  md:text-center
`
