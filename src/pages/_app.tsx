import { AppProps } from "next/app"
import { globalStyles } from "../styles/globat"


export default function App({ Component, pageProps }: AppProps) {
  globalStyles();
  return <Component {...pageProps} />
}

