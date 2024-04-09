import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () => 
        originalRenderPage({
          enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />),
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
      <Html lang="en"> {/* Set the language */}
        <Head>
          {/* Custom tags like stylesheets, fonts, PWA manifest, and favicon */}
          <link rel="manifest" href="/manifest.json" />
          <link rel="icon" href="/favicon.ico" />
          <meta name="theme-color" content="#326300" /> {/* Theme color for PWA */}
          {/* Other meta tags */}
          {/* Server-side rendered styles will be injected here */}
        </Head>
        <body>
          <Main /> {/* Main app content */}
          <NextScript /> {/* Scripts required by Next.js */}
        </body>
      </Html>
    );
  }
}

export default MyDocument;
