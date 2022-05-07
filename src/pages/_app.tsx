import type { AppProps } from 'next/app'
import Head from 'next/head'
import { ThemeProvider } from 'theme-ui'
import { theme } from '../shared/theme/theme'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Dosis&family=Open+Sans:wght@300;400&display=swap"
        />
        <script src="https://kit.fontawesome.com/a062f3a0fc.js"></script>
      </Head>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

export default MyApp
