import NextNprogress from 'nextjs-progressbar'

import { Provider as AuthProvider } from 'next-auth/client'
import { ChakraProvider } from '@chakra-ui/react'

import { AppProps } from 'next/app'
import Head from 'next/head'

import { theme } from 'styles/theme'

function App({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider session={pageProps.session}>
      <ChakraProvider theme={theme}>
        <Head>
          <title>Centro de Seleção</title>
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap"
            rel="stylesheet"
          />
          <link rel="shortcut icon" href="/img/icon-512.jpg" />
          <link rel="apple-touch-icon" href="/img/icon-512.jpg" />
          <meta
            name="description"
            content="The best Game Stores in the world!"
          />
        </Head>
        <NextNprogress
          color="#47f231"
          startPosition={0.3}
          stopDelayMs={200}
          height={5}
        />
        <Component {...pageProps} />
      </ChakraProvider>
    </AuthProvider>
  )
}

export default App
