import { AppProps } from "next/app"
import { globalStyles } from "../styles/globat"

import vrBranco from '../assets/vrBranco.png'
import { Container, Header, HeaderMenu, Link } from "../styles/pages/app"

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Header>
        <img src={vrBranco.src} alt="" width={30} style={{ margin: '0.2rem 1rem' }} />
        <HeaderMenu>
          <Link href="/">Instagram</Link>
          <Link href="/">Contato</Link>
          <Link href="/">Login</Link>
        </HeaderMenu>
      </Header>
      <Component {...pageProps} />
    </Container>
  )
}

