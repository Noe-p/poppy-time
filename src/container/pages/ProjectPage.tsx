import { H1, H3, Layout, P18, Video } from '@/components';
import { useTranslation } from 'next-i18next';
import tw from 'tailwind-styled-components';

export function ProjectPage(): React.JSX.Element {
  const { t } = useTranslation();

  return (
    <Layout>
      <Main>
        <Title>{t('project.name')}</Title>
        <Text>{t('project.p1')}</Text>
        <H3 className='mt-5 mb-3 text-center'>{'Take Off'}</H3>
        <Video src='https://youtu.be/xMGcagCeWRo'/>
        <H3 className='mt-5 mb-3 text-center'>{'Out Of Breath'}</H3>
        <Video src='https://youtu.be/qfTGhuxwFDQ'/>
        <Text className='mt-20'>{t('project.p2')}</Text>
        <Text>{t('project.p3')}</Text>
        <Text>{t('project.p4')}</Text>
      </Main>
    </Layout>
  );
}

const Main = tw.div`
  pt-25
  md:w-3/4
`;

const Title = tw(H1)`
  md:text-center
  my-5 md:my-10
`;

const Text = tw(P18)`
  md:text-center
  my-5
  w-full
`;
