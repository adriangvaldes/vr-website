import { AppProps } from "next/app"
import { globalStyles } from "../styles/globat"
import { Linkedin, GitHub } from 'react-feather'

import vrBranco from '../assets/vrBranco.png'
import { Container, Footer, FooterContainer, Header, HeaderContainer, HeaderMenu, Link } from "../styles/pages/app"

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Header>
        <HeaderContainer>
          <img src={vrBranco.src} alt="" width={30} style={{ margin: '0.2rem 1rem' }} />
          <HeaderMenu>
            <Link href="/">Home</Link>
            <Link href="/">Marcenaria</Link>
            <Link href="/">Tecidos</Link>
            <Link href="/">Laser</Link>
          </HeaderMenu>
        </HeaderContainer>
      </Header>
      <Component {...pageProps} />
      <FooterContainer>
        <Footer>
          <section>
            <img src={vrBranco.src} alt="" width={50} style={{ margin: '0.2rem 1rem' }} />
            <div>
              <p>Copyright © 2022</p>
              <p>Desenvolvido por Adrian Valdes </p>
            </div>

          </section>
          <HeaderMenu>
            <Link href="/">Home</Link>
            <Link href="/">Marcenaria</Link>
            <Link href="/">Tecidos</Link>
            <Link href="/">Laser</Link>
          </HeaderMenu>
        </Footer>
      </FooterContainer>
    </Container>
  )
}

