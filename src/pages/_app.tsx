import { AppProps } from "next/app";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import vrBranco from "../assets/vrBranco.png";
import "../global.css";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "#AboutUs", label: "Sobre nós" },
  { href: "#Products", label: "Produtos" },
  { href: "#Tecniques", label: "Técnicas" },
];

export default function App({ Component, pageProps }: AppProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div>
      <header className='bg-accentDarker w-full sticky top-0 z-50'>
        <section className='h-16 max-w-[1440px] flex justify-between items-center py-2 px-4 md:px-8 mx-auto'>
          <Link href='/'>
            <Image src={vrBranco} alt='VR Ateliê' width={40} />
          </Link>

          {/* Desktop navigation */}
          <nav className='hidden md:flex gap-6 items-center'>
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                className='text-sm no-underline text-textGrey transition-all duration-300 border-b border-transparent hover:text-white hover:border-spotlight pb-0.5'
                href={href}
              >
                {label}
              </Link>
            ))}
          </nav>

          {/* Mobile hamburger button */}
          <button
            className='md:hidden text-textGrey hover:text-white transition-colors p-1'
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </section>

        {/* Mobile dropdown */}
        {menuOpen && (
          <div className='md:hidden bg-accentDarker border-t border-white/10 py-5 flex flex-col items-center gap-5'>
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                className='text-sm text-textGrey hover:text-white transition-colors tracking-wide'
                href={href}
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </Link>
            ))}
          </div>
        )}
      </header>

      <Component {...pageProps} />

      <footer className='bg-accentDarker w-full'>
        <section className='max-w-[1440px] flex min-h-[5rem] justify-between items-center px-4 md:px-8 py-4 mx-auto'>
          <div className='flex items-center gap-4'>
            <Image src={vrBranco} alt='VR Ateliê' width={40} />
            <div>
              <p className='text-textGrey text-xs'>Copyright © 2022</p>
              <p className='text-textGrey text-xs'>Desenvolvido por Adrian Valdes</p>
            </div>
          </div>
        </section>
      </footer>
    </div>
  );
}
