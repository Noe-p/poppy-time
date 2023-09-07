import { Layout, P18 } from '@/components';
import { useTranslation } from 'next-i18next';
import tw from 'tailwind-styled-components';

export function StudioPage(): React.JSX.Element {
  const { t } = useTranslation();

  return (
    <Layout>
      <Main>
        <Text>{t('studio.p1')}</Text>
      </Main>
    </Layout>
  );
}

const Main = tw.div`
  
`;

const Text = tw(P18)`
  text-center
`;
