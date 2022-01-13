import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { MoralisProvider } from 'react-moralis'
const appId = process.env.NEXT_PUBLIC_APP_ID;
const serverUrl = process.env.NEXT_PUBLIC_SERVER_URL;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    // @ts-ignore
    <MoralisProvider appId={appId} serverUrl={serverUrl}>
      <Component {...pageProps} />
    </MoralisProvider>
  )
}

export default MyApp
