import '../styles/global.css';

import type { AppProps as NextAppProps } from 'next/app';
import type { ReactNode } from 'react';
import { RecoilRoot } from 'recoil';

import Transition from '@/components/Transition';

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

  return (
    <RecoilRoot>
      <Layout>
        <Transition>
          <Component {...pageProps} />
        </Transition>
      </Layout>
    </RecoilRoot>
  );
};
export default MyApp;
