import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { useInView } from "@/hooks/useInView";
import cloths from "@/assets/cloth/cloths.jpg";
import laserWork from "@/assets/laser/laser_photo1.jpg";
import aboutUsImage from "@/assets/process/ivonne_com_estante.jpg";
import woodWorking from "@/assets/wood/woodWorking.jpg";
import background2 from "@/assets/wood/marchetariaExample.jpg";
import woodWorkingIcon from "@/assets/woodWorkingIcon.png";
import capa from "@/assets/capa.jpg";
import banner from "@/assets/wood/background2.jpg";
import {
  Carousel,
  CarouselContent,
  CarouselDots,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const aboutValues = [
  {
    num: "01",
    text: "Oferecer a máxima qualidade nos produtos e focar na satisfação do cliente acima da rapidez e lucro nas vendas.",
  },
  {
    num: "02",
    text: "Prioridade nas relações humanas baseadas na ética, na confiança e o respeito pelo cliente.",
  },
  {
    num: "03",
    text: "Responsabilidade Ambiental em toda a cadeia produtiva: desde os insumos, gasto de energia e materiais, e descarte de resíduos.",
  },
  {
    num: "04",
    text: "Transparência em todo o processo produtivo incluindo as técnicas utilizadas e a possibilidade de ensino e treinamento.",
  },
];

const productCards = [
  {
    src: cloths,
    title: "Tecidos",
    desc: "Tecidos feitos com as melhores telas, com maestria e amor de alguém apaixonado por artes manuais.",
    delay: 0,
  },
  {
    src: woodWorking,
    title: "Marcenaria",
    desc: "Trabalhos em madeira feitos com precisão e carinho. Produtos únicos e variados para o seu lar.",
    delay: 0.15,
  },
  {
    src: laserWork,
    title: "Trabalho com Laser",
    desc: "Personalização de peças de diferentes materiais, utilizando um laser de alta precisão.",
    delay: 0.3,
  },
];

export default function Home() {
  const { ref: aboutRef, inView: aboutInView } = useInView(0.1);
  const { ref: productsRef, inView: productsInView } = useInView(0.1);
  const { ref: bannerRef, inView: bannerInView } = useInView(0.2);
  const { ref: techniquesRef, inView: techniquesInView } = useInView(0.1);

  return (
    <div className='flex flex-col w-full'>

      {/* ── HERO ──────────────────────────────────────────────────── */}
      <section
        className='flex flex-col items-center justify-center px-5 py-16 h-[520px] sm:h-[600px] md:h-[calc(100vh-64px)] w-full max-w-[1920px] mx-auto bg-center bg-no-repeat bg-cover'
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url(${capa.src})`,
        }}
      >
        <div className='text-white max-w-[800px] flex flex-col items-center text-center gap-4'>
          <h1 className='animate-fade-in-up text-4xl sm:text-5xl md:text-6xl font-light leading-tight tracking-wide'>
            Artesanato de alto padrão
          </h1>
          <p
            className='animate-fade-in text-xs sm:text-sm tracking-[0.35em] uppercase text-white/60'
            style={{ animationDelay: "0.25s" }}
          >
            madeira · tecido · laser
          </p>
          <Link href='/catalog'>
            <button
              className='animate-fade-in mt-2 border border-white/60 bg-transparent py-3 px-8 text-xs sm:text-sm tracking-[0.2em] uppercase transition-all duration-300 hover:bg-white hover:text-black hover:border-white'
              style={{ animationDelay: "0.5s" }}
            >
              Ver Catálogo
            </button>
          </Link>
        </div>
      </section>

      {/* ── SOBRE NÓS ─────────────────────────────────────────────── */}
      <section className='bg-accentDarker w-full overflow-hidden relative py-16 md:py-24' id='AboutUs'>
        <div ref={aboutRef} className='max-w-[1200px] mx-auto px-5 md:px-10'>
          <div className='flex flex-col lg:flex-row'>
            <div
              className={cn(
                "flex flex-col max-w-[680px] z-20",
                !aboutInView && "opacity-0",
                aboutInView && "animate-fade-in-left"
              )}
            >
              <span className='text-spotlight text-xs uppercase tracking-[0.25em] font-medium mb-3'>
                Sobre nós
              </span>
              <h2 className='text-background text-2xl sm:text-3xl md:text-4xl font-light leading-snug mb-6'>
                Temos fabricado produtos diretamente da nossa casa
              </h2>
              <p className='text-textBright leading-7 mb-4 text-sm sm:text-base'>
                Nosso Ateliê se propõe como missão oferecer produtos de artesanato com alto padrão de qualidade, que
                tenha como base a criatividade, o trabalho focado nos detalhes e personalização das peças e também no
                design que atenda aos diversos públicos.
              </p>
              <p className='text-textBright leading-7 mb-4 text-sm sm:text-base'>
                Nossa visão: nos tornarmos uma empresa de referência na produção de artesanato em madeira e tecido,
                exemplo de qualidade diferenciada, preço justo e confiabilidade desde o projeto até a entrega.
              </p>
              <p className='text-textBright leading-7 mb-8 text-sm sm:text-base'>
                Todo nosso fazer está pautado em valores que nos norteiam:
              </p>

              <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                {aboutValues.map(({ num, text }, i) => (
                  <div
                    key={num}
                    className={cn(
                      "bg-background/[0.07] border border-background/[0.12] rounded-xl p-5",
                      !aboutInView && "opacity-0",
                      aboutInView && "animate-fade-in-up"
                    )}
                    style={{ animationDelay: aboutInView ? `${0.15 + i * 0.1}s` : undefined }}
                  >
                    <span className='text-spotlight text-xs font-bold tracking-widest block mb-2'>{num}</span>
                    <p className='text-textBright text-sm leading-6'>{text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Decorative image — right side, large screens only */}
        <div
          className='hidden lg:block absolute overflow-hidden w-[480px] z-10 top-0 right-0 h-full'
          style={{
            WebkitMask: "linear-gradient(to left, #000 35%, #0000)",
            mask: "linear-gradient(to left, #000 35%, #0000)",
          }}
        >
          <Image src={aboutUsImage} alt='' className='h-full w-full object-cover' />
        </div>
      </section>

      {/* ── PRODUTOS ──────────────────────────────────────────────── */}
      <section id='Products' className='py-12 md:py-20'>
        <div ref={productsRef}>
          <div className='border-b-2 border-accentDarker'>
            <h2
              className={cn(
                "text-xl text-accentDarker text-center my-4 tracking-[0.2em]",
                !productsInView && "opacity-0",
                productsInView && "animate-fade-in"
              )}
            >
              PRODUTOS
            </h2>
          </div>

          <div
            className={cn(
              "max-w-[900px] px-5 md:px-10 mx-auto mt-12 mb-8 text-sm sm:text-base leading-7",
              !productsInView && "opacity-0",
              productsInView && "animate-fade-in-up"
            )}
          >
            <p>
              Nosso Ateliê está especializado em peças artesanais feitas com{" "}
              <span className='text-spotlight font-semibold'>madeira</span> e{" "}
              <span className='text-spotlight font-semibold'>tecidos</span> de alta qualidade. Nossos produtos estão
              dentro do conjunto de utensílios domésticos e empresariais, incorporando além da utilidade os traços da
              beleza artística que os diferencia. Com técnicas auxiliares como gravação a{" "}
              <span className='text-spotlight font-semibold'>laser</span>, personalizamos peças de acordo ao desejo do
              cliente — de uma dedicatória a uma logomarca.
            </p>
          </div>

          <div className='container mx-auto'>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center'>
              {productCards.map(({ src, title, desc, delay }) => (
                <div
                  key={title}
                  className={cn(
                    "cursor-pointer flex flex-col w-full max-w-sm bg-orange-100 overflow-hidden rounded-xl shadow-md transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl",
                    !productsInView && "opacity-0",
                    productsInView && "animate-fade-in-up"
                  )}
                  style={{ animationDelay: productsInView ? `${delay}s` : undefined }}
                >
                  <div className='w-full aspect-[4/3] relative overflow-hidden'>
                    <Image src={src} alt={title} fill className='object-cover' />
                  </div>
                  <div className='px-5 py-5'>
                    <h3 className='text-xl font-medium mb-2'>{title}</h3>
                    <p className='text-sm leading-6 text-gray-700'>{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── BANNER ────────────────────────────────────────────────── */}
      <div
        ref={bannerRef}
        className='flex flex-col justify-center items-center bg-center bg-no-repeat bg-cover w-full py-20 md:py-28 overflow-hidden'
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url(${banner.src})`,
        }}
      >
        <blockquote
          className={cn(
            "text-white tracking-wide text-center mx-5 md:mx-8 max-w-[900px] text-lg md:text-2xl font-light leading-relaxed",
            !bannerInView && "opacity-0",
            bannerInView && "animate-fade-in-up"
          )}
        >
          &ldquo;...buscamos ser uma empresa de referência na produção de artesanato em madeira e tecido, que seja
          exemplo de qualidade diferenciada, preço justo e confiabilidade desde o projeto até a entrega do produto.&rdquo;
        </blockquote>
      </div>

      {/* ── TÉCNICAS ──────────────────────────────────────────────── */}
      <section id='Tecniques' className='py-12 md:py-20 pb-24'>
        <div ref={techniquesRef}>
          <div className='border-b-2 border-accentDarker'>
            <h2
              className={cn(
                "text-xl text-accentDarker text-center my-4 tracking-[0.2em]",
                !techniquesInView && "opacity-0",
                techniquesInView && "animate-fade-in"
              )}
            >
              TÉCNICAS
            </h2>
          </div>

          <div
            className={cn(
              "max-w-[900px] mx-auto my-10 px-5 md:px-10 text-sm sm:text-base leading-7",
              !techniquesInView && "opacity-0",
              techniquesInView && "animate-fade-in-up"
            )}
          >
            Nossa equipe está constantemente acrescentando novas ideias, gabaritos e técnicas para atingir a perfeição em
            cada peça. Como parte de nossa filosofia de transparência, estamos comprometidos em mostrar um pouco do &ldquo;como
            o fazemos&rdquo; e quais ferramentas utilizamos. De forma resumida, nosso know-how atual:
          </div>

          <div
            className={cn(
              "container mx-auto max-w-[600px]",
              !techniquesInView && "opacity-0",
              techniquesInView && "animate-fade-in-up"
            )}
            style={{ animationDelay: techniquesInView ? "0.2s" : undefined }}
          >
            <Carousel className='w-full'>
              <CarouselContent>
                <CarouselItem>
                  <div className='flex flex-col bg-orange-100 rounded-xl overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl border-2 border-transparent hover:border-spotlight cursor-pointer'>
                    <div className='relative'>
                      <span className='absolute text-white bg-spotlight font-semibold text-xs tracking-widest top-4 left-0 px-4 py-1.5 z-10'>
                        MARCENARIA
                      </span>
                      <div className='aspect-[16/9] relative'>
                        <Image src={background2} alt='Marchetaria' fill className='object-cover' />
                      </div>
                    </div>
                    <div className='p-5 flex gap-5'>
                      <Image
                        src={woodWorkingIcon}
                        alt=''
                        width={72}
                        className='object-scale-down flex-shrink-0 self-start mt-1'
                      />
                      <div>
                        <h3 className='text-xl font-semibold mb-2'>Marchetaria</h3>
                        <p className='text-sm leading-6 text-gray-700'>
                          Trabalhos em madeira de diferentes tonalidades para tornar cada peça única e elegante. A
                          colagem é feita com cola Titebond 3, resistente à água e não tóxica, apta para contato com
                          alimentos.
                        </p>
                      </div>
                    </div>
                  </div>
                </CarouselItem>

                <CarouselItem>
                  <div className='flex flex-col bg-orange-100 rounded-xl overflow-hidden shadow-md transition-all duration-300 hover:shadow-xl border-2 border-transparent hover:border-spotlight cursor-pointer'>
                    <div className='relative'>
                      <span className='absolute text-white bg-spotlight font-semibold text-xs tracking-widest top-4 left-0 px-4 py-1.5 z-10'>
                        MARCENARIA
                      </span>
                      <div className='aspect-[16/9] relative'>
                        <Image src={background2} alt='Inlay' fill className='object-cover' />
                      </div>
                    </div>
                    <div className='p-5 flex gap-5'>
                      <Image
                        src={woodWorkingIcon}
                        alt=''
                        width={72}
                        className='object-scale-down flex-shrink-0 self-start mt-1'
                      />
                      <div>
                        <h3 className='text-xl font-semibold mb-2'>Inlay</h3>
                        <p className='text-sm leading-6 text-gray-700'>
                          Incrustação de desenhos em madeiras de diferentes tonalidades. O acabamento é feito com óleo
                          mineral e cera de abelha, aprovados para contato direto com alimentos.
                        </p>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              </CarouselContent>

              {/* Inline navigation row: ← dots → */}
              <div className='flex items-center justify-center gap-4 mt-6'>
                <CarouselPrevious className='static translate-y-0' />
                <CarouselDots />
                <CarouselNext className='static translate-y-0' />
              </div>
            </Carousel>
          </div>
        </div>
      </section>
    </div>
  );
}
