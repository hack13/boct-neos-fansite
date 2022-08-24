import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../components/layout'
import PlausibleProvider from 'next-plausible'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <PlausibleProvider domain="neosboct.hack13.dev" customDomain='stats.hack13.dev' selfHosted={true}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </PlausibleProvider>
  ) 
}

export default MyApp
