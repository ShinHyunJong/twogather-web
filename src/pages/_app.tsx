import '../styles/global.css';

import type { AppProps as NextAppProps } from 'next/app';
import { GoogleAnalytics, usePageViews } from 'nextjs-google-analytics';
import type { ReactNode } from 'react';
import { RecoilRoot } from 'recoil';

import Audio from '@/components/Audio';
import Transition from '@/components/Transition';
import { Meta } from '@/layouts/Meta';
import { AppConfig } from '@/utils/AppConfig';

type AppProps<P = any> = {
  Component: P;
  pageProps: P;
} & Omit<NextAppProps<P>, 'pageProps'>;

function EmptyLayout({ children }: { children: ReactNode }) {
  return (
    <div
      id="app"
      className="fixed right-0 bottom-0 flex items-center justify-center"
    >
      {children}
    </div>
  );
}

const MyApp = ({ Component, pageProps }: AppProps) => {
  const Layout = Component.Layout || EmptyLayout;
  usePageViews();

  return (
    <>
      <GoogleAnalytics />
      <Meta
        title={AppConfig.title}
        description={AppConfig.description}
        canonical="https://league.pulit.co.kr"
      ></Meta>
      <RecoilRoot>
        <Layout>
          <Transition>
            <Component {...pageProps} />
          </Transition>
        </Layout>
        <Audio></Audio>
      </RecoilRoot>
    </>
  );
};
export default MyApp;
