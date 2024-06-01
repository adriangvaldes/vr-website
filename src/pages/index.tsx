import Image from "next/image";
import Link from "next/link";
import cloths from "../assets/cloth/cloths.jpg";
import laserWork from "../assets/laser/laser_photo1.jpg";
import aboutUsImage from "../assets/process/ivonne_com_estante.jpg";
import woodWorking from "../assets/wood/woodWorking.jpg";
import background2 from "../assets/wood/marchetariaExample.jpg";
import woodWorkingIcon from "../assets/woodWorkingIcon.png";
import capa from "../assets/capa.jpg";
import banner from "../assets/wood/background2.jpg";

export default function Home() {
  return (
    <div className='flex flex-col w-full'>
      <section
        className='flex flex-col p-5 md:p-10 h-[500px] md:h-[calc(100vh-64px)] w-full max-w-[1920px] mx-auto bg-center bg-no-repeat bg-cover bg-blend-darken'
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${capa.src});`,
        }}
      >
        <div className='text-white max-w-[800px] m-auto flex flex-col items-center'>
          <h1 className='text-3xl md:text-6xl sm:text-4xl text-center'>
            Artesanato de alto padrão
          </h1>
          <p className='mt-4 tracking-wide leading-4'>madeira & tecido</p>
          <p className='mt-4 tracking-wide leading-4 mb-4'>
            produtos personalizados a laser
          </p>
          <Link href='/catalog'>
            <button className='mt-4 border border-white bg-transparent py-2 px-4 transition-all text-white cursor-pointer hover:bg-white hover:text-black'>
              Ir para catálogo
            </button>
          </Link>
        </div>
      </section>

      <section
        className='flex p-5 md:p-10 bg-accentDarker w-full my-0 mx-auto relative overflow-hidden'
        id='AboutUs'
      >
        <div className='flex gap-20 flex-row max-w-[1200px] my-0 mx-auto'>
          <div className='flex flex-col max-w-[700px] z-20'>
            <label className='text-background text-xl'>Sobre nós</label>
            <h2 className='text-background text-3xl'>
              Temos fabricado produto diretamente da nossa casa
            </h2>
            <p className='mt-4 text-background leading-7'>
              Nosso Ateliê se propõe como missão oferecer produtos de artesanato
              com alto padrão de qualidade, que tenha como base a criatividade ,
              o trabalho focado nos detalhes e personalização das peças e também
              no design que atenda aos diversos públicos.
            </p>
            <p className='mt-4 text-background leading-7'>
              Temos uma visão: convertemos em uma empresa de referência na
              produção de artesanato em madeira e tecido, que seja exemplo de
              qualidade diferenciada, preço justo e confiabilidade desde o
              projeto até a entrega do produto.
            </p>
            <p className='mt-4 text-background leading-7'>
              Todo nosso fazer está e sempre estará pautado em um conjunto de
              valores que nos norteiam:
            </p>
            <div className='grid sm:grid-cols-2 justify-items-center gap-2 grid-flow-row-dense'>
              <div className='bg-background rounded-2xl min-h-32 flex items-center justify-center w-80 px-5 py-3'>
                <p className='text-accentDarker leading-7'>
                  <span className='font-bold'>1)</span> Oferecer a máxima
                  qualidade nos produtos e focar na satisfação do cliente acima
                  da rapidez e lucro nas vendas
                </p>
              </div>
              <div className='bg-background rounded-2xl min-h-32 flex items-center justify-center w-80 px-5 py-3'>
                <p className='text-accentDarker leading-7'>
                  <span className='font-bold'>2)</span> Prioridade nas relações
                  humanas baseadas na ética, na confiança e o respeito pelo
                  cliente.
                </p>
              </div>
              <div className='bg-background rounded-2xl min-h-32 flex items-center justify-center w-80 px-5 py-3'>
                <p className='text-accentDarker leading-7'>
                  <span className='font-bold'>3)</span> Responsabilidade
                  Ambiental em toda a cadeia produtiva: desde os insumos, gasto
                  de energia e materiais, e descarte de resíduos
                </p>
              </div>
              <div className='bg-background rounded-2xl min-h-32 flex items-center justify-center w-80 px-5 py-3'>
                <p className='text-accentDarker leading-7'>
                  <span className='font-bold'>4)</span> Transparência em todo o
                  processo produtivo incluindo as técnicas utilizadas e a
                  possibilidade de ensino e treinamento de interessados.
                </p>
              </div>
            </div>
          </div>

          <div
            className='absolute overflow-hidden max-w-[800px] z-10 top-0 right-0'
            style={{
              WebkitMask: "linear-gradient(to left, #000, #0000)",
              mask: "linear-gradient(to left, #000, #0000)",
            }}
          >
            <Image src={aboutUsImage} alt='' className='invisible sm:visible' />
          </div>
        </div>
      </section>

      <section id='Products'>
        <div className='border-b-2 border-accentDarker'>
          <h1 className='text-xl text-accentDarker text-center my-4 mx-0 tracking-widest'>
            PRODUTOS
          </h1>
        </div>

        <div className='max-w-[1000px] p-5 md:p-10 my-0 mx-auto mt-20 mb-0'>
          <p>
            Nosso Ateliê está especializao em peças artesanais feitas com{" "}
            <span className='text-spotlight font-bold'>madeira</span> e{" "}
            <span className='text-spotlight font-bold'>tecidos</span> de alta
            qualidade. Nossos produtos, fundamentalmente, estão dentro do
            conjunto de utensílios domésticos e/ou empresariais, que incorporam
            além da utilidade os traços da beleza artística que os diferencia.
            Além disso com técnicas auxiliares como Gravação a{" "}
            <span className='text-spotlight font-bold'>Laser</span>, podemos
            oferecer o serviço de personalizar as suas peças de acordo ao desejo
            do cliente, que pode ser desde a gravação de uma dedicatória de um
            presente, uma foto familiar, assim como a logomarca de uma empresa.
          </p>
        </div>
        <div className='grid my-16  p-5 md:p-10 mx-auto justify-center items-center md:grid-cols-3 max-w-[1300px]'>
          <div className='cursor-pointer flex items-start justify-start flex-col max-w-[25rem] min-h-[30rem] bg-orange-100 overflow-hidden rounded-xl transition-all shadow-md hover:scale-105 hover:shadow-2xl'>
            <Image
              src={cloths}
              alt=''
              sizes='100%, 100%'
              className='object-cover max-h-[300px]'
            />
            <div className='px-5 py-10'>
              <h1 className='self-start text-2xl'>Tecidos</h1>
              <p>
                Tecidos feitos com as melhores telas, feitos com maestria e amor
                de alguem apaixonado por artes manuais
              </p>
            </div>
          </div>
          <div className='cursor-pointer flex items-start justify-start flex-col max-w-[25rem] min-h-[30rem] bg-orange-100 overflow-hidden rounded-xl transition-all shadow-md hover:scale-105 hover:shadow-2xl'>
            <Image
              src={woodWorking}
              alt=''
              sizes='100%, 100%'
              className='object-cover max-h-[300px]'
            />
            <div className='px-5 py-10'>
              <h1 className='self-start text-2xl'>Marcenaria</h1>
              <p>
                Trabalhos em madeira feitos com precisão e carinho. Produtos
                unicos variados de mar
              </p>
            </div>
          </div>
          <div className='cursor-pointer flex items-start justify-start flex-col max-w-[25rem] min-h-[30rem] bg-orange-100 overflow-hidden rounded-xl transition-all shadow-md hover:scale-105 hover:shadow-2xl'>
            <Image
              src={laserWork}
              alt=''
              sizes='100%, 100%'
              className='object-cover max-h-[300px]'
            />
            <div className='px-5 py-10'>
              <h1 className='self-start text-2xl'>Trabalho com Laser</h1>
              <p>
                Personalização de peças de diferentes materiais, utilizando um
                laser de alta precisão
              </p>
            </div>
          </div>
        </div>
      </section>

      <div
        className='flex flex-col justify-center items-center bg-center bg-no-repeat bg-blend-darken max-h-[300px] w-full max-w-[1920px] mx-auto overflow-hidden py-20'
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)),url(${banner.src})`,
        }}
      >
        <h1 className='text-white tracking-widest text-center my-0 mx-8 max-w-[1100px] text-2xl'>
          {
            "...buscamos ser uma empresa de referência na produção de artesanato em madeira e tecido, que seja exemplo de qualidade diferenciada, preço justo e confiabilidade desde o projeto até a entrega do produto. "
          }
        </h1>
      </div>

      <section id='Tecniques'>
        <div className='border-b-2 border-accentDarker'>
          <h1 className='text-xl text-accentDarker text-center my-4 mx-0 tracking-widest'>
            TÉCNICAS
          </h1>
        </div>

        <div className='max-w-[1000px] mx-auto mt-20 mb-0 p-10'>
          Nossa equipe ao trabalhar com artesanato criativo, está constantemente
          acrescentando novas ideias, gabaritos e técnicas para atingir a
          perfeição em cada peça. E como parte de nossa filosofia presa pela
          transparência, estamos comprometidos com além de oferecer produtos de
          alto padrão de qualidade, também mostrar um pouco do “como o fazemos”,
          e quais técnicas e ferramentas utilizamos. Desta forma aos poucos
          iremos apresentando nossa jornada de trabalho e criação em nossos
          projetos. De forma resumida nosso know out atual o expomos a seguir
        </div>

        <div className='p-5 md:p-10 grid lg:grid-cols-2 gap-4 w-3/4 mx-auto max-w-[1400px] justify-center'>
          <div
            className='flex items-center cursor-pointer flex-col max-w-[40rem] max-h-[200rem] overflow-hidden min-h-[32rem]
          bg-orange-100 rounded-xl transition-all shadow-lg hover:scale-105 hover:shadow-2xl'
          >
            <div className='overflow-hidden max-h-64 relative'>
              <span className='absolute text-white bg-spotlight text-2x font-bold text-xl top-[30px] px-4 py-2 tracking-widest '>
                MARCENARIA
              </span>
              <Image src={background2} alt='' width={1000} />
            </div>
            <section className='p-5 flex gap-5'>
              <Image
                src={woodWorkingIcon}
                alt=''
                width={120}
                className='object-scale-down'
              />
              <div>
                <h1 className='items-start text-2xl my-2'>Marchetaria</h1>
                <p>
                  Trabalhos em madeira de diferentes tonalidade para tornar cada
                  peça unica e elegante. Toda a colagem e marcheteria é feita
                  com cola Titebond 3 resistente a água e não toxica, para poder
                  ser utilizada com alimentos.{" "}
                </p>
              </div>
            </section>
          </div>

          <div
            className='flex items-center cursor-pointer flex-col max-w-[40rem] max-h-[200rem] overflow-hidden min-h-[32rem]
          bg-orange-100 rounded-xl transition-all shadow-lg hover:scale-105 hover:shadow-2xl'
          >
            <div className='overflow-hidden max-h-64 relative'>
              <span className='absolute text-white bg-spotlight text-2x font-bold text-xl top-[30px] px-4 py-2 tracking-widest '>
                MARCENARIA
              </span>
              <Image src={background2} alt='' width={1000} />
            </div>
            <section className='p-5 flex gap-5'>
              <Image
                src={woodWorkingIcon}
                alt=''
                width={120}
                className='object-scale-down'
              />
              <div>
                <h1 className='items-start text-2xl my-2'>Inlay</h1>
                <p>
                  Incrustaçao de desenhos de madeiras de diferentes tonalidades.
                  O acabamento é feito com oleo mineral e cera de abelha q sao
                  os apropiados paracontato direto com alimentos.{" "}
                </p>
              </div>
            </section>
          </div>
        </div>
      </section>
    </div>
  );
}
