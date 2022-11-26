import { AppProps } from "next/app"
import { globalStyles } from "../styles/globat"
import { Linkedin, GitHub } from 'react-feather'
import Image from 'next/future/image';
import vrBranco from '../assets/vrBranco.png'
import { Container, Footer, FooterContainer, Header, HeaderContainer, HeaderMenu, Link } from "../styles/pages/app"

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Header id="Header">
        <HeaderContainer>
          <Image src={vrBranco} alt='vr_branco' width={30} />
          <HeaderMenu>
            <Link href="#Home">Home</Link>
            <Link href="#AboutUs">Sobre nós</Link>
            <Link href="#Products">Produtos</Link>
            <Link href="#Tecniques">Técnicas</Link>
          </HeaderMenu>
        </HeaderContainer>
      </Header>
      <Component {...pageProps} />
      <FooterContainer>
        <Footer>
          <section>
            <Image src={vrBranco} alt='vr_branco' width={50} />
            <div>
              <p>Copyright © 2022</p>
              <p>Desenvolvido por Adrian Valdes </p>
            </div>
          </section>
          {/* <HeaderMenu>
            <Link href="/">Home</Link>
            <Link href="/">Marcenaria</Link>
            <Link href="/">Tecidos</Link>
            <Link href="/">Laser</Link>
          </HeaderMenu> */}
        </Footer>
      </FooterContainer>
    </Container>
  )
}

