import { H1, Layout, P18, Image } from '@/components';
import { useTranslation } from 'next-i18next';
import tw from 'tailwind-styled-components';

export function NewsPage(): React.JSX.Element {
  const { t } = useTranslation();

  return (
    <Layout>
      <Main>
        <H1 className='w-full my-10 md:my-20 md:text-center'>{t('news.title')}</H1>
        <Text>{t('news.p1')}</Text>
        <Image src='/images/news/news-2.png' alt='img 1' />
        <Text className='mt-20'>{t('news.p2')}</Text>
        <Image src='/images/news/news-1.JPG' alt='img 2' />
        <Video className='mt-10' src='/videos/news/news-1.mp4' controls />
      </Main>
    </Layout>
  );
}

const Main = tw.div`
  pt-20
  flex
  flex-col
  items-center
  justify-center
  md:w-3/4
`;

const Text = tw(P18)`
  mb-8
  w-full
  md:text-center
`

const Video = tw.video`
  object-cover
  object-center
  h-150
  w-full
  border
  border-white
  rounded-lg
`;
