import { Footer, NavBar } from '@/container/components';
import React, { ReactNode } from 'react';
import tw from 'tailwind-styled-components';

interface LayoutProps {
  children?: ReactNode;
  className?: string;
  isNavClose?: boolean;
}

export function Layout(props: LayoutProps): React.JSX.Element {
  const { children, className, isNavClose } = props;

  return (
    <Main className={className}>
      <NavBar isClose={isNavClose} />
      <Page>{children}</Page>
      <Footer />
    </Main>
  );
}

const Main = tw.div`
  bg-black
`;

const Page = tw.div`
  flex
  flex-col
  items-center
  justify-center
  z-0
  min-h-screen
  px-5 md:px-10
`;
