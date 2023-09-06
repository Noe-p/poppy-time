import { SeoHead } from '@/container/components';
import { MusicianPage } from '@/container/pages';
import { PageBaseProps } from '@/types';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import React from 'react';

export default function IndexPage(): React.JSX.Element {
  return (
    <>
      <SeoHead />
      <MusicianPage />
    </>
  );
}

export async function getStaticProps({
  locale,
}: {
  locale: string;
}): Promise<PageBaseProps> {
  return {
    props: {
      ...(await serverSideTranslations(locale)),
    },
  };
}
