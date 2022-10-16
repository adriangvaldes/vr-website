import {
  Banner,
  BottonDiv,
  Card,
  CardBackgroundImage,
  CardsContainer,
  CardsTecniqueContainer,
  HeroContainer,
  HeroDescription,
  NavContainer,
  NavLink,
  TecniqueCards,
} from "../styles/pages/home";

import Image from 'next/future/image';
import meatTable1 from '../assets/wood/tabua1_carne.jpg'

export default function Home() {
  return (
    <>
      <HeroContainer>
        <HeroDescription className="heroSection">
          <h1>Artesanato com madeira e costura de alto nível</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit, veniam dolores assumenda doloremque corrupti.</p>
          <button>Ir para catálogo</button>
        </HeroDescription>
      </HeroContainer>

      <CardsContainer>
        <Card>
          <Image src={meatTable1} alt='' sizes="100vw" width='100%' height={'100%'} />
          <h1>Tecidos</h1>
          <p>Tecidos feitos com as melhores telas, feitos com maestria e amor de alguem apaixonado por artes manuais</p>
        </Card>
        <Card>
          <Image src={meatTable1} alt='' />
          <h1>Marcenaria</h1>
          <p>Trabalhos em madeira feitos com precisão e carinho. Produtos unicos variados de mar</p>
        </Card>
        <Card>
          <Image src={meatTable1} alt='' />
          <h1>Trabalho com Laser</h1>
          <p>Personalização de peças de diferentes materiais, utilizando um laser de alta precisão</p>
        </Card>
      </CardsContainer>

      <Banner>
        <h1>{'" Nosso objetivo é entregar os melhores produtos, feitos com muito amor e carinho, para passar ao cliente todo o cuidado que temos nos nossos processos "'}</h1>
      </Banner>

      <CardsTecniqueContainer>
        <TecniqueCards>
          <span>TÉCNICAS</span>
          <CardBackgroundImage />
          <section>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              ICONE_TO_DEFINE
            </div>
            <div>
              <h1>Marchetaria</h1>
              <p>Trabalhos em madeira de diferentes tonalidade para tornar cada peça unica e elegante. Toda a colagem e marcheteria é feita com cola Titebond 3 resistente a água e não toxica, para poder ser utilizada com alimentos. </p>
            </div>
          </section>
        </TecniqueCards>
        <TecniqueCards>
          <span>TÉCNICAS</span>
          <CardBackgroundImage />
          <section>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              ICONE_TO_DEFINE
            </div>
            <div>
              <h1>Inlay</h1>
              <p>Incrustaçao de desenhos de madeiras de diferentes tonalidades. O acabamento é feito com oleo mineral e cera de abelha q sao os apropiados paracontato direto com alimentos. </p>
            </div>
          </section>
        </TecniqueCards>
      </CardsTecniqueContainer>

      <BottonDiv>
        <h1>Também trabalhamos com personalização de peças</h1>
        <button>SAIBA MAIS</button>
      </BottonDiv>
    </>
  )
}
