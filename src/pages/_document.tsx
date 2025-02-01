import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render(): JSX.Element {
    return (
      <Html lang="ja">
        <Head>
          <meta charSet="utf-8" />
          <meta name="theme-color" content="#2a2a2a" />
          <link rel="manifest" href="/manifest.json" />
          <link
            rel="apple-touch-icon"
            type="image/png"
            href="/icons/apple-touch-icon-180x180.png"
          />
          <link rel="icon" type="image/png" href="/icons/icon-192x192.png" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
