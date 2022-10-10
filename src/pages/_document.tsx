import { Html, Head, Main, NextScript } from 'next/document';
import { getCssText } from '../styles';

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&family=Roboto:wght@400;700&display=swap" rel="stylesheet" />

        <style id="stitches" dangerouslySetInnerHTML={{ __html: getCssText() }} />  {/* To ensure that the css will be loaded on server side already */}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}