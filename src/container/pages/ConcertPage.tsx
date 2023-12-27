import { Grid2, GridCol1, H1, Image, Layout, P18, Video } from '@/components';
import tw from 'tailwind-styled-components';
import { Concert } from '@/types';
import { useTranslation } from 'next-i18next';

export function ConcertPage(): React.JSX.Element {
  const { t } = useTranslation();

  const concerts: Concert[] = [
    {
      id: 'concert-3',
      title: 'Run Ar Puns (Châteaulin)',
      description:
        'Le 25 novembre 2023, Nous nous sommes produit au Run Ar Puns à Châteaulin, en première partie de The Strangers.',
      videos: [
        {
          url: 'https://www.youtube.com/watch?v=jHlqmmS0_Gc',
        },
      ],
      images: [
        { url: '/images/concerts/concert-3/image-1.webP' },
        { url: '/images/concerts/concert-3/image-2.webP' },
        { url: '/images/concerts/concert-3/image-3.webP' },
        { url: '/images/concerts/concert-3/image-4.webP' },
        { url: '/images/concerts/concert-3/image-5.webP' },
        { url: '/images/concerts/concert-3/image-6.webP' },
        { url: '/images/concerts/concert-3/image-7.webP' },
        { url: '/images/concerts/concert-3/image-8.webP' },
      ],
    },
    {
      id: 'concert-1',
      title: t('concert.concert-1.title'),
      description: t('concert.concert-1.description'),
      videos: [
        {
          url: 'https://www.youtube.com/watch?v=O9EsO33RZ1M&ab_channel=Poppytime',
        },
        {
          url: 'https://www.youtube.com/watch?v=8wEDuNeVny4&ab_channel=Poppytime',
        },
        {
          url: ' https://www.youtube.com/watch?v=NSnERqZt3Uo&ab_channel=Poppytime ',
        },
        {
          url: 'https://youtu.be/j4uxfF5DTr4',
        },
      ],
      images: [
        {
          url: '/images/concerts/concert-1/image-1.jpeg',
        },
      ],
    },
    {
      id: 'concert-2',
      title: t('concert.concert-2.title'),
      description: t('concert.concert-2.description'),
      images: [
        {
          url: '/images/concerts/concert-2/image-1.jpg',
        },
        {
          url: '/images/concerts/concert-2/image-2.jpg',
        },
        {
          url: '/images/concerts/concert-2/image-3.jpg',
        },
        {
          url: '/images/concerts/concert-2/image-4.jpg',
        },
        {
          url: '/images/concerts/concert-2/image-5.jpg',
        },
        {
          url: '/images/concerts/concert-2/image-6.jpg',
        },
        {
          url: '/images/concerts/concert-2/image-7.jpg',
        },
      ],
    },
  ];

  return (
    <Layout>
      <Main>
        {concerts.map((concert) => (
          <ConcertSection key={concert.id}>
            <ConcertTitle>{concert.title}</ConcertTitle>
            {concert.description && (
              <ConcertDescription>{concert.description}</ConcertDescription>
            )}
            <Grid2 className="w-full">
              {concert.videos?.map(
                (video, i) =>
                  concert.videos && (
                    <GridCol1
                      className={`${
                        concert.videos.length % 2 === 1 &&
                        i === concert.videos.length - 1 &&
                        'col-span-2'
                      }`}
                      key={video.url}
                    >
                      <Video src={video.url} />
                    </GridCol1>
                  )
              )}
            </Grid2>
            <Grid2 className="w-full mt-5">
              {concert.images?.map(
                (image, i) =>
                  concert.images && (
                    <GridCol1
                      className={`${
                        concert.images.length % 2 === 1 &&
                        i === concert.images.length - 1 &&
                        'col-span-2'
                      }`}
                      key={image.url}
                    >
                      <Image src={image.url} alt={image.url} />
                    </GridCol1>
                  )
              )}
            </Grid2>
          </ConcertSection>
        ))}
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
