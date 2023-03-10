import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head title="DRY.news">
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link rel="shortcut icon" href="/favicon.png" type="image/png" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
