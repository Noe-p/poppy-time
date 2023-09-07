import { Grid2, GridCol1, H2, H3, Layout, P18 } from '@/components';
import tw from 'tailwind-styled-components';
import ReactPlayer from 'react-player/youtube'
import { concertsData } from '@/data';
import { useState } from 'react';
import { useWindowSize } from '@/hooks/useWindowSize';

export function ConcertPage(): React.JSX.Element {
  const [videoHover, setVideoHover] = useState<string>()
  const { width } = useWindowSize();

  return (
    <Layout>
      <Main>
        {concertsData.map((concert, i) => (
          <ConcertSection key={concert.id}>
            <ConcertTitle className={`${i % 2 === 1 ? 'text-primary' : 'text-secondary'}`}>{concert.title}</ConcertTitle>
            {concert.description && <ConcertDescription>{concert.description}</ConcertDescription>}
            <Grid2>
              {concert.videos?.map((video) => (
                <GridCol1 onMouseEnter={() => setVideoHover(video.url)} onMouseLeave={() => setVideoHover(undefined)} key={video.url}>
                  {video.title && <H3 className={'text-center mb-2'}>{video.title}</H3>}
                  <ReactPlayer width={width < 700 ? 300 : 640} height={width < 700 ? 200 : 360} controls={false} playsinline={false} playing={videoHover === video.url} url={video.url} />
                </GridCol1>
              ))}
            </Grid2>
            <Grid2 className='mt-5'>
              {concert.images?.map((image) => (
                <GridCol1 key={image.url}>
                  <ConcertImage src={image.url} alt={image.url} />
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
 
`;
const ConcertSection = tw.div`
  mx-auto
  justify-center
  flex
  flex-col
  items-center
  w-full
  mb-10
`;

const ConcertTitle = tw(H2)`
  text-center
  md:w-2/3
`;

const ConcertDescription = tw(P18)`
  text-center
  my-5
  md:w-2/3
`;

const ConcertImage = tw.img`
  w-full
  h-full
  object-cover
  object-center
  rounded-lg
  max-h-150
`;

