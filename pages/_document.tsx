import Document, { Html, Head, Main, NextScript } from 'next/document';
export default class CustomDocument extends Document {
  render() {
    // console.log("Ping from _doc.tsx, this msg only seen on server-side...")
    return (
      <Html>
        <Head>
          <meta property="custom" content="yolo" />
        </Head>
        <body>
          <Main />
        </body>
        <NextScript />
      </Html>
    )
  }
}