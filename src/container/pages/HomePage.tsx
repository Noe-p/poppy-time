import { H2, Layout } from '@/components';
import { Header } from '@/container/components';
import tw from 'tailwind-styled-components';
export function HomePage(): React.JSX.Element {
  return (
    <Layout>
      <Header />
      <Main>
        <Title>{'Exemple Media Swiper'}</Title>
      </Main>
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
