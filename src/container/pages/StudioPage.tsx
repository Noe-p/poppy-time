import { Grid1, Grid2, GridCol1, H1, H3, Layout, P18, Video, Image } from '@/components';
import { Concert } from '@/types';
import { useTranslation } from 'next-i18next';
import tw from 'tailwind-styled-components';

export function StudioPage(): React.JSX.Element {
  const { t } = useTranslation();

  const studios: Concert[] = [
    {
      id: 'studios-1',
      title: t('studio.studio-1.title'),
      description: t('studio.studio-1.description'),
      videos: [
        {
          title: 'The Orange Streets',
          url: 'https://youtu.be/3g6w2sdBQ2M',
          description:t('studio.studio-1.videos-1.description'),
        },
        {
          title: 'Out Of Breath',
          url: 'https://youtu.be/7BHQFM-4IAU',
          description:t('studio.studio-1.videos-2.description'),
        },
        {
          title: 'Poppax',
          url: 'https://youtu.be/MwESwYxPtmI',
          description:t('studio.studio-1.videos-3.description'),
        },
        {
          title:'Take Off',
          url: ' https://youtu.be/kF5JaanJOOA',
          description:t('studio.studio-1.videos-4.description'),
        },
        {
          title: 'Funkyman',
          url: 'https://youtu.be/oMUL5gOHG2s',
          description:t('studio.studio-1.videos-5.description'),
        },
        {
          title: 'Super Rush',
          url: 'https://youtu.be/AMARJjKBsbo',
          description:t('studio.studio-1.videos-6.description'),
        },
      ],
    },
  ]

  return (
    <Layout>
      <Main>
        {studios.map((concert) => (
          <ConcertSection key={concert.id}>
            <ConcertTitle>{concert.title}</ConcertTitle>
            {concert.description && <ConcertDescription>{concert.description}</ConcertDescription>}
            <Grid1 className='w-full'>
              {concert.videos?.map((video) => (
                <GridCol1 key={video.url}>
                  {video.title && <H3 className={'text-center my-2 md:my-7'}>{video.title}</H3>}
                  <Video src={video.url} />
                  {video.description && <P18 className={'md:text-center my-2 md:my-5'}>{video.description}</P18>}
                </GridCol1>
              ))}
            </Grid1>
            <Grid2 className='mt-5 w-full'>
              {concert.images?.map((image, i) => (
                concert.images && <GridCol1 className={`${concert.images.length % 2 === 1 && i === concert.images.length - 1 && 'col-span-2'}`} key={image.url}>
                  <Image src={image.url} alt={image.url} />
                </GridCol1>
              ))}
            </Grid2>
          </ConcertSection>
        ))
        }
      </Main>
    </Layout>
  );
}


const Main = tw.div`
  pt-25
  md:w-3/4

`;
const ConcertSection = tw.div`
  mx-auto
  justify-center
  flex
  flex-col
  items-center
  w-full
  mb-10 md:mb-20
`;

const ConcertTitle = tw(H1)`
  md:text-center
  my-5 md:my-10
`;

const ConcertDescription = tw(P18)`
  md:text-center
  my-5
  w-full
`;

