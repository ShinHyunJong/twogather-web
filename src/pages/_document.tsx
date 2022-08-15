/* eslint-disable class-methods-use-this */
/* eslint-disable @next/next/no-sync-scripts */
import type { DocumentContext } from 'next/document';
import Document, { Head, Html, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

import { AppConfig } from '@/utils/AppConfig';

// NextScript가 _app.tsx를 송출한다.
// Need to create a custom _document because i18n support is
class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;
    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });
      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      // <Html lang={AppConfig.locale} className="scroll-auto">
      <Html lang={AppConfig.locale} data-theme="light">
        <Head>
          <meta name="viewport" content="width=1024" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
