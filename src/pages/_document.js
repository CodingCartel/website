import React from 'react'
import { Html, Head, Main, NextScript } from 'next/document'

const Document = () => {
  return (
    <Html>
      <Head>
        <title>Coding cartel</title>
        <link
          href="/fonts/silkamono-regular-webfont.woff2"
          type="font/wofff2"
        />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

export default Document
