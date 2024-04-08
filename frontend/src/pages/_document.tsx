import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en"> {/* Set the language attribute as needed */}
        <Head>
          {/* Place any custom tags you might need here */}
          {/* Example: <link rel="stylesheet" href="/path/to/your/font.css" /> */}
        </Head>
        <body>
          <Main />
          <NextScript />
          {/* Here, Main and NextScript are Next.js components that output your app's content and Next.js scripts respectively */}
        </body>
      </Html>
    );
  }
}

export default MyDocument;
