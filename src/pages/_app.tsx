import { AppProps } from "next/app";
import Image from 'next/image';
import vrBranco from '../assets/vrBranco.png';
import '../global.css';
import { globalStyles } from "../styles/globat";

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="flex flex-col items-start min-h-screen">
      <header className="bg-accentDarker w-full sticky">
        <section className="bg-accentDarker h-16 max-w-[1440px] flex justify-between items-center py-2 px-4 my-0 mx-auto">
          <Image src={vrBranco} alt='vr_branco' width={30} />
          <menu className="flex gap-3 mr-8 box-border">
            <a className="text-[0.9rem] no-underline text-textGrey transition-all duration-500 box-border hover:text-white hover:border-b hover:border-spotlight hover:mb-[-1px]" href="/">Home</a>
            <a className="text-[0.9rem] no-underline text-textGrey transition-all duration-500 box-border hover:text-white hover:border-b hover:border-spotlight hover:mb-[-1px]" href="#AboutUs">Sobre nós</a>
            <a className="text-[0.9rem] no-underline text-textGrey transition-all duration-500 box-border hover:text-white hover:border-b hover:border-spotlight hover:mb-[-1px]" href="#Products">Produtos</a>
            <a className="text-[0.9rem] no-underline text-textGrey transition-all duration-500 box-border hover:text-white hover:border-b hover:border-spotlight hover:mb-[-1px]" href="#Tecniques">Técnicas</a>
          </menu>
        </section>
      </header>

      <Component {...pageProps} />
      <footer className="bg-accentDarker w-full">
        <section className="max-w-[1440px] flex min-h-[6rem] justify-between items-center p-2 mx-auto">
          <div className="flex items-center gap-4">
            <Image src={vrBranco} alt='vr_branco' width={50} />
            <div>
              <p className="text-textGrey">Copyright © 2022</p>
              <p className="text-textGrey">Desenvolvido por Adrian Valdes </p>
            </div>
          </div>
        </section>
      </footer>
    </div>
  )
}

