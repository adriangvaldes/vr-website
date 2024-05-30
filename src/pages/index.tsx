import {
  AboutUsContainer,
  Banner,
  Card,
  CardBackgroundImage,
  CardsContainer,
  CardsTecniqueContainer,
  H1,
  HeroContainer,
  HeroDescription,
  HomeContainer,
  ImageContainer,
  ProductsContainer,
  ProductsDescription,
  SectionTitle,
  TecniqueCards,
  TecniqueContainer,
  Title,
} from "../styles/pages/home";

import Image from 'next/image';
import Link from "next/link";
import cloths from '../assets/cloth/cloths.jpg';
import laserWork from '../assets/laser/laser_photo1.jpg';
import aboutUsImage from '../assets/process/ivonne_com_estante.jpg';
import woodWorking from '../assets/wood/woodWorking.jpg';
import woodWorkingIcon from '../assets/woodWorkingIcon.png';

export default function Home() {
  return (
    <HomeContainer>
      <HeroContainer>
        <HeroDescription className="heroSection">
          <h1>Artesanato de alto padrão</h1>
          <p>madeira & tecido</p>
          <p>produtos personalizados a laser</p>
          <Link href='/catalog'>
            <button>Ir para catálogo</button>
          </Link>
        </HeroDescription>
      </HeroContainer>
      <SectionTitle><h1></h1></SectionTitle>

      <AboutUsContainer id='AboutUs'>
        <section>
          <div>
            <Title>Sobre nós</Title>
            <h2>Temos fabricado produto diretamente da nossa casa</h2>
            <p>Nosso Ateliê se propõe como missão oferecer produtos de artesanato com alto padrão de qualidade, que tenha como base a criatividade , o trabalho focado nos detalhes e personalização das peças e também  no design que atenda aos diversos públicos.</p>
            <p>Temos uma visão: convertemos em uma empresa de referência na produção de artesanato em madeira e tecido, que seja exemplo de qualidade diferenciada, preço justo e confiabilidade desde o projeto até a entrega do produto.</p>
            <p>Todo nosso fazer está e sempre estará pautado em um conjunto de valores que nos norteiam:</p>
            <p><span>1)</span> Oferecer a máxima qualidade nos produtos e focar na satisfação do cliente acima da rapidez e lucro nas vendas</p>
            <p><span>2)</span> Prioridade nas relações humanas baseadas na ética, na confiança e o respeito pelo cliente.</p>
            <p><span>3)</span> Responsabilidade Ambiental em toda a cadeia produtiva: desde os insumos, gasto de energia e materiais, e descarte de resíduos</p>
            <p><span>4)</span> Transparência em todo o processo produtivo incluindo as técnicas utilizadas e a possibilidade de ensino e treinamento de interessados.</p>

          </div>
          <ImageContainer>
            <Image src={aboutUsImage} alt='' height={1200} width={1000} />
          </ImageContainer>
        </section>
      </AboutUsContainer>

      <ProductsContainer id='Products'>
        <SectionTitle><h1>PRODUTOS</h1></SectionTitle>
        <ProductsDescription>
          <p>Nosso Ateliê está especializao em peças artesanais feitas com <span>madeira</span> e <span>tecidos</span> de alta qualidade. Nossos produtos, fundamentalmente, estão dentro do conjunto de utensílios domésticos e/ou empresariais, que incorporam além da utilidade os traços da beleza artística que os diferencia. Além disso com técnicas auxiliares como Gravação a <span>Laser</span>, podemos oferecer o serviço de personalizar as suas peças de acordo ao desejo do cliente, que pode ser desde a gravação de uma dedicatória de um presente, uma foto familiar, assim como a logomarca de uma empresa.</p>
        </ProductsDescription>
        <CardsContainer>
          <Card>
            <Image src={cloths} alt='' sizes="100vw" />
            <h1>Tecidos</h1>
            <p>Tecidos feitos com as melhores telas, feitos com maestria e amor de alguem apaixonado por artes manuais</p>
          </Card>
          <Card>
            <Image src={woodWorking} alt='' sizes="100vw" width='100%' height={'100%'} />
            <h1>Marcenaria</h1>
            <p>Trabalhos em madeira feitos com precisão e carinho. Produtos unicos variados de mar</p>
          </Card>
          <Card>
            <Image src={laserWork} alt='' sizes="100vw" width='100%' height={'100%'} />
            <h1>Trabalho com Laser</h1>
            <p>Personalização de peças de diferentes materiais, utilizando um laser de alta precisão</p>
          </Card>
        </CardsContainer>
      </ProductsContainer>

      <Banner>
        <H1 >{'" ...buscamos ser uma empresa de referência na produção de artesanato em madeira e tecido, que seja exemplo de qualidade diferenciada, preço justo e confiabilidade desde o projeto até a entrega do produto. "'}</H1>
      </Banner>

      <SectionTitle id='Tecniques'><h1>TÉCNICAS</h1></SectionTitle>

      <TecniqueContainer>
        <ProductsDescription>Nossa equipe ao trabalhar com artesanato criativo, está constantemente acrescentando novas ideias, gabaritos e técnicas para atingir a perfeição em cada peça. E como parte de nossa filosofia presa pela transparência, estamos comprometidos com além de oferecer produtos de alto padrão de qualidade, também mostrar um pouco do “como o fazemos”, e quais técnicas e ferramentas utilizamos. Desta forma aos poucos iremos apresentando nossa jornada de trabalho e criação em nossos projetos. De forma resumida nosso know out atual o expomos a seguir</ProductsDescription>
        <CardsTecniqueContainer>
          <TecniqueCards>
            <span>MARCENARIA</span>
            <CardBackgroundImage />
            <section>
              <Image src={woodWorkingIcon} alt='' width={100} height={100} style={{ marginTop: '4rem' }} />
              <div>
                <h1>Marchetaria</h1>
                <p>Trabalhos em madeira de diferentes tonalidade para tornar cada peça unica e elegante. Toda a colagem e marcheteria é feita com cola Titebond 3 resistente a água e não toxica, para poder ser utilizada com alimentos. </p>
              </div>
            </section>
          </TecniqueCards>
          <TecniqueCards>
            <span>MARCENARIA</span>
            <CardBackgroundImage />
            <section>
              <Image src={woodWorkingIcon} alt='' width={100} height={100} style={{ marginTop: '4rem' }} />
              <div>
                <h1>Inlay</h1>
                <p>Incrustaçao de desenhos de madeiras de diferentes tonalidades. O acabamento é feito com oleo mineral e cera de abelha q sao os apropiados paracontato direto com alimentos. </p>
              </div>
            </section>
          </TecniqueCards>
        </CardsTecniqueContainer>
      </TecniqueContainer>
    </HomeContainer>
  )
}
