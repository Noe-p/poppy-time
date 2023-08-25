import { H1, Layout } from '@/components';
import { useTranslation } from 'next-i18next';
import tw from 'tailwind-styled-components';

export function ConcertPage(): React.JSX.Element {
  const { t } = useTranslation();

  return (
    <Layout>
      <Main>
        <H1>{t('concert.name')}</H1>
      </Main>
    </Layout>
  );
}

const Main = tw.div`
  
`;
