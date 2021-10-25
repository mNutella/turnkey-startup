import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          {/* <!-- Primary Meta Tags --> */}
          <title>Idea Research</title>
          <meta name="title" content="Idea Research" />
          <meta
            name="description"
            content="Forget about manual research.
Idea validation is now fast and easy with search engine ideasy"
          />

          {/* <!-- Open Graph / Facebook --> */}
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://www.idea-research.com/" />
          <meta property="og:title" content="Idea Research" />
          <meta
            property="og:description"
            content="Forget about manual research.
Idea validation is now fast and easy with search engine ideasy"
          />
          <meta property="og:image" content="" />

          {/* <!-- Twitter --> */}
          <meta property="twitter:card" content="summary_large_image" />
          <meta
            property="twitter:url"
            content="https://www.idea-research.com/"
          />
          <meta property="twitter:title" content="Idea Research" />
          <meta
            property="twitter:description"
            content="Forget about manual research.
Idea validation is now fast and easy with search engine ideasy"
          />
          <meta property="twitter:image" content="" />
          {/* <!-- Fonts --> */}
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="true"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Baloo+2:wght@400;500;600;700;800&display=swap"
            rel="stylesheet"
          />
          <link rel="manifest" href="/site.webmanifest" />
          <title>ideasy</title>
        </Head>
        <body className="font-body">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
