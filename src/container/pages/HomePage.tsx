import {
  FlexColJustifyCenter,
  Grid3,
  GridCol1,
  GridCol2,
  Layout,
  P18,
} from '@/components';
import { Header } from '@/container/components';
import { useTranslation } from 'next-i18next';
import tw from 'tailwind-styled-components';
export function HomePage(): React.JSX.Element {
  const { t } = useTranslation();

  return (
    <Layout>
      <Header />
      <Main>
        <Grid3 className='md:gap-10 mb-10'>
          <GridCol1 className='mb-5 md:mb-0'>
            <ImageStyled src='/images/home/home-section1.webP' alt='section1' />
          </GridCol1>
          <GridCol2>
            <FlexColJustifyCenter>
              <P18>{t('home.sections.section1.p1')}</P18>
            </FlexColJustifyCenter>
          </GridCol2>
        </Grid3>
        <Grid3 className='md:gap-10  mb-10'>
          <GridCol2 className='order-2 md:order-1'>
            <FlexColJustifyCenter>
              <P18>{t('home.sections.section2.p1')}</P18>
            </FlexColJustifyCenter>
          </GridCol2>
          <GridCol1 className='mb-5 md:mb-0 order-1'>
            <ImageStyled src='/images/home/home-section2.webP' alt='section2' />
          </GridCol1>
        </Grid3>
        <Grid3 className='md:gap-10 mb-10'>
          <GridCol1 className='mb-5 md:mb-0'>
            <ImageStyled src='/images/home/home-section3.webP' alt='section3' />
          </GridCol1>
          <GridCol2>
            <FlexColJustifyCenter>
              <P18>{t('home.sections.section3.p1')}</P18>
            </FlexColJustifyCenter>
          </GridCol2>
        </Grid3>
        <Grid3 className='md:gap-10  mb-10'>
          <GridCol2 className='order-2 md:order-1'>
            <FlexColJustifyCenter>
              <P18>{t('home.sections.section4.p1')}</P18>
            </FlexColJustifyCenter>
          </GridCol2>
          <GridCol1 className='mb-5 md:mb-0 order-1'>
            <ImageStyled src='/images/home/home-section4.webP' alt='section4' />
          </GridCol1>
        </Grid3>
        <Grid3 className='md:gap-10 mb-10'>
          <GridCol1 className='mb-5 md:mb-0'>
            <ImageStyled src='/images/home/home-section5.webP' alt='section5' />
          </GridCol1>
          <GridCol2>
            <FlexColJustifyCenter>
              <P18>{t('home.sections.section5.p1')}</P18>
            </FlexColJustifyCenter>
          </GridCol2>
        </Grid3>
        <Grid3 className='md:gap-10 mb-10'>
          <GridCol2 className='order-2 md:order-1'>
            <FlexColJustifyCenter>
              <P18>{t('home.sections.section6.p1')}</P18>
            </FlexColJustifyCenter>
          </GridCol2>
          <GridCol1 className='mb-5 md:mb-0 order-1'>
            <ImageStyled src='/images/home/home-section6.webP' alt='section6' />
          </GridCol1>
        </Grid3>
      </Main>
    </Layout>
  );
}

const Main = tw.div`
  flex
  flex-col
  items-center
  justify-center
  md:w-2/3
  my-20
`;

const ImageStyled = tw.img`
  w-full
  max-h-100
  object-cover
  rounded
`;
