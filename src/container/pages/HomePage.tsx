import { H2, Layout, MediasSwiper } from '@/components';
import { Header } from '@/container/components';
import { useState } from 'react';
import tw from 'tailwind-styled-components';
export function HomePage(): React.JSX.Element {
  const [isMediaSwiperOpen, setIsMediaSwiperOpen] = useState(false);
  const [isNavClose, setIsNavClose] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  const medias = [
    { id: 1, url: '/images/header.jpg' },
    {
      id: 2,
      url: 'https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg',
    },
  ];

  return (
    <Layout isNavClose={isNavClose}>
      <Header />
      <Main>
        <Title>{'Exemple Media Swiper'}</Title>
        <ImagesContainer>
          {medias.map((media, index) => (
            <ImageStyled
              key={media.id}
              onClick={() => {
                setIsMediaSwiperOpen(true);
                setIsNavClose(true);
                setCurrentImage(index);
              }}
              src={media.url}
              alt='media'
            />
          ))}
        </ImagesContainer>
      </Main>
      <MediasSwiper
        isOpen={isMediaSwiperOpen}
        setIsOpen={() => {
          setIsMediaSwiperOpen(false);
          setIsNavClose(false);
        }}
        currentImage={currentImage}
        medias={medias.map((media) => media.url)}
      />
    </Layout>
  );
}

const Main = tw.div`
  flex
  flex-col
  items-center
  justify-center
  h-full
  w-full
  mt-20
`;

const Title = tw(H2)`
  text-center
`;

const ImagesContainer = tw.div`
  flex
  flex-row
  items-center
  justify-center
  flew-wrap
  my-10
`;

const ImageStyled = tw.img`
  cursor-pointer
  m-4
  w-54
  h-40
  object-cover
`;
