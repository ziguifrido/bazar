import { AppProps } from 'next/app'
import { CSSReset, theme, ThemeProvider } from '@chakra-ui/react'

import '../styles/global.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <CSSReset />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
