import { AppProps } from "next/app";
import Image from "next/image";
import vrBranco from "../assets/vrBranco.png";
import "../global.css";
import { globalStyles } from "../styles/globat";
import Link from "next/link";

globalStyles();

export default function App({ Component, pageProps }: AppProps) {
  console.log("ASDASOD");
  return (
    <div className=''>
      <header className='bg-accentDarker w-full sticky'>
        <section className='bg-accentDarker h-16 max-w-[1440px] flex justify-between items-center py-2 px-4 my-0 mx-auto'>
          <Image src={vrBranco} alt='vr_branco' width={40} />
          <menu className='flex gap-3 mr-8 box-border'>
            <Link
              className='text-[0.9rem] no-underline text-textGrey transition-all duration-500 box-border hover:text-white hover:border-b hover:border-spotlight hover:mb-[-1px]'
              href='/'
            >
              Home
            </Link>
            <Link
              className='text-[0.9rem] no-underline text-textGrey transition-all duration-500 box-border hover:text-white hover:border-b hover:border-spotlight hover:mb-[-1px]'
              href='#AboutUs'
            >
              Sobre nós
            </Link>
            <Link
              className='text-[0.9rem] no-underline text-textGrey transition-all duration-500 box-border hover:text-white hover:border-b hover:border-spotlight hover:mb-[-1px]'
              href='#Products'
            >
              Produtos
            </Link>
            <Link
              className='text-[0.9rem] no-underline text-textGrey transition-all duration-500 box-border hover:text-white hover:border-b hover:border-spotlight hover:mb-[-1px]'
              href='#Tecniques'
            >
              Técnicas
            </Link>
          </menu>
        </section>
      </header>
      <Component {...pageProps} />
      <footer className='bg-accentDarker w-full'>
        <section className='max-w-[1440px] flex min-h-[6rem] justify-between items-center p-2 mx-auto'>
          <div className='flex items-center gap-4'>
            <Image src={vrBranco} alt='vr_branco' width={50} />
            <div>
              <p className='text-textGrey text-sm'>Copyright © 2022</p>
              <p className='text-textGrey text-sm'>Desenvolvido por Adrian Valdes </p>
            </div>
          </div>
        </section>
      </footer>
    </div>
  );
}
