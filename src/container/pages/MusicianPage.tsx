import { Grid3, GridCol1, GridCol2, H1, Layout, Video } from '@/components';
import { Musician } from '@/types';
import { useTranslation } from 'next-i18next';
import tw from 'tailwind-styled-components';
import { CardProject } from '../components';
import { useWindowSize } from 'usehooks-ts';

export function MusicianPage(): React.JSX.Element {
  const { t } = useTranslation();
  const { width } = useWindowSize();

  const musicians: Musician[] = [
    {
      id: '1',
      name: 'Manon',
      description: [t('musician.manon.description'), t('musician.manon.instrument'), t('musician.manon.age')],
      image: { url: '/images/interviews/manon.JPG' },
      video: { url: 'https://youtu.be/Sp39ExuVfvc' },
    },
    {
      id: '2',
      name: 'Robin',
      description: [t('musician.robin.description'), t('musician.robin.instrument'), t('musician.robin.age')],
      image: { url: '/images/interviews/robin.JPG' },
      video: { url: 'https://youtu.be/Pwt0mEBi7CU' },
    },
    {
      id: '3',
      name: 'Louis',
      description: [t('musician.louis.description'), t('musician.louis.instrument'), t('musician.louis.age')],
      image: { url: '/images/interviews/louis.JPG' },
      video: { url: 'https://youtu.be/54thtfKe5YU' },
    },
    {
      id: '4',
      name: 'Finlay',
      description: [t('musician.finlay.description'), t('musician.finlay.instrument'), t('musician.finlay.age')],
      image: { url: '/images/interviews/finlay.JPG' },
      video: { url: 'https://youtu.be/jkMHzBt5Gmo' },
    },
    {
      id: '5',
      name: 'Alexis',
      description: [t('musician.alexis.description'), t('musician.alexis.instrument'), t('musician.alexis.age')],
      image: { url: '/images/interviews/alexis.JPG' },
      video: { url: 'https://youtu.be/ZvyfJetIO7Y' },
    },
  ];

  return (
    <Layout>
      <Main>
        <H1 className='w-full my-10 md:my-20 md:text-center'> {t('musician.title')}</H1>
        {musicians.map((musician, i) => (
          <Grid3 key={musician.id} className='mt-10 items-center'>
            <GridCol1 className={`${i % 2 === 1 && width > 730 ? 'order-2' : 'order-1'} h-full`}>
              <CardProject
                className='h-full'
                project={{
                  id: musician.id,
                  name: musician.name,
                  description: musician.description,
                  backgroundImage: musician.image,
                }}
              />
            </GridCol1>
            <GridCol2 className={`${i % 2 === 1 && width > 730 ? 'order-1' : 'order-2'} `}>
              <Video src={musician.video.url} />
            </GridCol2>
          </Grid3>
        ))}
      </Main>
    </Layout>
  );
}

const Main = tw.div`
 pt-20
`;

