import { CardItem, CatalogContainer, CatalogContentContainer, CatalogHeader, CatalogSideBar, SideBarItem, SideBarItemTitle } from "../styles/pages/catalog";
import Checkbox from '@mui/material/Checkbox';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Collapse, List, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { ExpandLess, ExpandMore, StarBorder } from "@mui/icons-material";
import { useState } from "react";
import Image from 'next/future/image';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

import purse1 from '../assets/cloth/purses/bolsa1.jpg'
import purse2 from '../assets/cloth/purses/bolsa2.jpg'
import purse3 from '../assets/cloth/purses/bolsa3.jpg'
import purse4 from '../assets/cloth/purses/bolsa4.jpg'
import purse5 from '../assets/cloth/purses/bolsa5.jpg'
import purse6 from '../assets/cloth/purses/bolsa6.jpg'
import purse7 from '../assets/cloth/purses/bolsa7.jpg'
import purse8 from '../assets/cloth/purses/bolsa8.jpg'
import purse9 from '../assets/cloth/purses/bolsa9.jpg'
import purse10 from '../assets/cloth/purses/bolsa10.jpg'

import caixaDecorativa2 from '../assets/wood/decoration/caixa-decorativa-2.jpg'
import caixaDecorativa3 from '../assets/wood/decoration/caixa-decorativa-3.jpg'
import caixaDecorativa4 from '../assets/wood/decoration/caixa-decorativa-4.jpg'
import portaChaveiros1 from '../assets/wood/decoration/porta-chaveiros-1.jpg'
import portaIncenso1 from '../assets/wood/decoration/porta-incenso-1.jpg'
import portaVelas1 from '../assets/wood/decoration/porta-velas-1.jpg'
import portaVelas2 from '../assets/wood/decoration/porta-velas-2.jpg'
import portaVelas3 from '../assets/wood/decoration/porta-velas-3.jpg'
import portaVelas4 from '../assets/wood/decoration/porta-velas-4.jpg'
import portaVelas5 from '../assets/wood/decoration/porta-velas-5.jpg'
import portaVelas6 from '../assets/wood/decoration/porta-velas-6.jpg'
import suporteHeadset1 from '../assets/wood/decoration/suporte-headset.jpg'

import portaXicara1 from '../assets/wood/food/porta-xicara-1.jpg'
import portaXicara2 from '../assets/wood/food/porta-xicara-2.jpg'
import portaXicara3 from '../assets/wood/food/porta-xicara-3.jpg'
import portaXicara4 from '../assets/wood/food/porta-xicara-4.jpg'
import suporteVinhoTaca1 from '../assets/wood/food/suporte-vinho-taca-1.jpg'
import suporteVinhoTaca2 from '../assets/wood/food/suporte-vinho-taca-2.jpg'
import suporteVinhoTaca3 from '../assets/wood/food/suporte-vinho-taca-3.jpg'
import tabuaCorte1 from '../assets/wood/food/tabua-corte-1.jpg'
import tabuaCorte2 from '../assets/wood/food/tabua-corte-2.jpg'
import tabuaCorte3 from '../assets/wood/food/tabua-corte-3.jpg'
import tabuaCorte4 from '../assets/wood/food/tabua-corte-4.jpg'
import portaPatezeira1 from '../assets/wood/food/porta-patezeira-1.jpg'
import portaPatezeira2 from '../assets/wood/food/porta-patezeira-2.jpg'
import portaPatezeira3 from '../assets/wood/food/porta-patezeira-3.jpg'
import portaCopos1 from '../assets/wood/food/porta-copos-1.jpg'
import miniMesaFrios1 from '../assets/wood/food/mini-mesa-frios-1.jpg'
import mesaVinho1 from '../assets/wood/food/mesa-vinho-1.jpg'
import expositor1 from '../assets/wood/utilities/expositor-1.jpeg'
import portaPlantas1 from '../assets/wood/utilities/porta-plantas-1.jpg'
import portaPlantas2 from '../assets/wood/utilities/porta-plantas-2.jpg'
import portaPlantas3 from '../assets/wood/utilities/porta-plantas-3.jpeg'
import portaPlantas4 from '../assets/wood/utilities/porta-plantas-4.jpg'
import portaPlantas6 from '../assets/wood/utilities/porta-plantas-6.jpg'
import sapateira1 from '../assets/wood/utilities/sapateira-1.jpeg'

import decoracaoXicara1 from '../assets/cloth/food/decoracao-xicara-1.jpg'
import decoracaoXicara2 from '../assets/cloth/food/decoracao-xicara-2.jpg'
import panoPrato1 from '../assets/cloth/food/pano-prato-1.jpg'
import panoPrato2 from '../assets/cloth/food/pano-prato-2.jpg'
import panoPrato3 from '../assets/cloth/food/pano-prato-3.jpg'
import panoPrato4 from '../assets/cloth/food/pano-prato-4.jpg'
import panoPrato5 from '../assets/cloth/food/pano-prato-5.jpg'
import portaAlgo1 from '../assets/cloth/food/porta-algo-1.jpg'
import portaTalheres1 from '../assets/cloth/food/porta-talheres-1.jpg'
import portaTalheres2 from '../assets/cloth/food/porta-talheres-2.jpg'
import segurador1 from '../assets/cloth/food/segurador-1.jpg'
import segurador2 from '../assets/cloth/food/segurador-2.jpg'

export default function Home() {
  const [openWoodCollapse, setWoodCollapse] = useState(false);
  const [openClothCollapse, setOpenClothCollapse] = useState(false);
  return (
    <>
      <CatalogHeader>
        <h1>CATÁLOGO</h1>
      </CatalogHeader>
      <CatalogContainer>
        <CatalogSideBar>
          <List
            sx={{ width: '100%', maxWidth: 360, bgcolor: '#1f0e04', color: '#faf4eb' }}
            component="nav"
            aria-labelledby="nested-list-subheader"
          >
            <ListItemButton onClick={() => setWoodCollapse(!openWoodCollapse)}>
              <ListItemText primary="Madeira" />
              {openWoodCollapse ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={openWoodCollapse} sx={{ bgcolor: '#faf4eb', color: '#1f0e04' }} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon>
                    <Checkbox {...label} />
                  </ListItemIcon>
                  <ListItemText primary="Utensílios Gourmet" />
                </ListItemButton>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon>
                    <Checkbox {...label} />
                  </ListItemIcon>
                  <ListItemText primary="Pequenos móveis utilitários" />
                </ListItemButton>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon>
                    <Checkbox {...label} />
                  </ListItemIcon>
                  <ListItemText primary="Utensílios decorativos" />
                </ListItemButton>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon>
                    <Checkbox {...label} />
                  </ListItemIcon>
                  <ListItemText primary="Luminárias" />
                </ListItemButton>
              </List>
            </Collapse>
            <ListItemButton onClick={() => setOpenClothCollapse(!openClothCollapse)}>
              <ListItemText primary="Tecido" />
              {openClothCollapse ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={openClothCollapse} sx={{ bgcolor: '#faf4eb', color: '#1f0e04' }} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon>
                    <Checkbox {...label} />
                  </ListItemIcon>
                  <ListItemText primary="Bolsas e Nécessaires" />
                </ListItemButton>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon>
                    <Checkbox {...label} />
                  </ListItemIcon>
                  <ListItemText primary="Utilitários Gourmet " />
                </ListItemButton>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon>
                    <Checkbox {...label} />
                  </ListItemIcon>
                  <ListItemText primary="Outros utilitários" />
                </ListItemButton>
              </List>
            </Collapse>
          </List>
          {/* <SideBarItemTitle>
            Madeira
            <KeyboardArrowDownIcon />
          </SideBarItemTitle>
          <SideBarItem>
            <Checkbox {...label} />
            Utensílios Gourmet
          </SideBarItem>
          <SideBarItem>
            <Checkbox {...label} />
            Pequenos móveis utilitários
          </SideBarItem>
          <SideBarItem>
            <Checkbox {...label} />
            Utensílios decorativos
          </SideBarItem>
          <SideBarItem>
            <Checkbox {...label} />
            Luminárias
          </SideBarItem>
          <SideBarItemTitle>
            Tecidos
            <KeyboardArrowDownIcon />
          </SideBarItemTitle>
          <SideBarItem>
            <Checkbox {...label} />
            Utensílios Gourmet
          </SideBarItem>
          <SideBarItem>
            <Checkbox {...label} />
            Pequenos móveis utilitários
          </SideBarItem>
          <SideBarItem>
            <Checkbox {...label} />
            Utensílios decorativos
          </SideBarItem>
          <SideBarItem>
            <Checkbox {...label} />
            Luminárias
          </SideBarItem> */}

        </CatalogSideBar>
        <CatalogContentContainer>
          {/* //---------------- Tecidos --------------------------- */}
          <CardItem>
            <div>
              <Image src={purse1} alt='' fill sizes='100vw' />
            </div>
            <main>
              <section>
                <h4>Bolsa de tecido</h4>
                <span>Costura Criativa</span>
              </section>
              <section>
                <h1>R$ 150,00</h1>
              </section>
            </main>
          </CardItem>
          <CardItem>
            <div>
              <Image src={purse2} alt='' fill sizes='100vw' />
            </div>
            <main>
              <section>
                <h4>Bolsa de tecido</h4>
                <span>Costura Criativa</span>
              </section>
              <section>
                <h1>R$ 150,00</h1>
              </section>
            </main>
          </CardItem>
          <CardItem>
            <div>
              <Image src={purse3} alt='' fill sizes='100vw' />
            </div>
            <main>
              <section>
                <h4>Bolsa de tecido</h4>
                <span>Costura Criativa</span>
              </section>
              <section>
                <h1>R$ 150,00</h1>
              </section>
            </main>
          </CardItem>
          <CardItem>
            <div>
              <Image src={purse4} alt='' fill sizes='100vw' />
            </div>
            <main>
              <section>
                <h4>Bolsa de tecido</h4>
                <span>Costura Criativa</span>
              </section>
              <section>
                <h1>R$ 150,00</h1>
              </section>
            </main>
          </CardItem>
          <CardItem>
            <div>
              <Image src={purse5} alt='' fill sizes='100vw' />
            </div>
            <main>
              <section>
                <h4>Bolsa de tecido</h4>
                <span>Costura Criativa</span>
              </section>
              <section>
                <h1>R$ 150,00</h1>
              </section>
            </main>
          </CardItem>
          <CardItem>
            <div>
              <Image src={purse6} alt='' fill sizes='100vw' />
            </div>
            <main>
              <section>
                <h4>Bolsa de tecido</h4>
                <span>Costura Criativa</span>
              </section>
              <section>
                <h1>R$ 150,00</h1>
              </section>
            </main>
          </CardItem>
          <CardItem>
            <div>
              <Image src={purse7} alt='' fill sizes='100vw' />
            </div>
            <main>
              <section>
                <h4>Bolsa de tecido</h4>
                <span>Costura Criativa</span>
              </section>
              <section>
                <h1>R$ 150,00</h1>
              </section>
            </main>
          </CardItem>
          <CardItem>
            <div>
              <Image src={purse8} alt='' fill sizes='100vw' />
            </div>
            <main>
              <section>
                <h4>Bolsa de tecido</h4>
                <span>Costura Criativa</span>
              </section>
              <section>
                <h1>R$ 150,00</h1>
              </section>
            </main>
          </CardItem>
          <CardItem>
            <div>
              <Image src={purse9} alt='' fill sizes='100vw' />
            </div>
            <main>
              <section>
                <h4>Bolsa de tecido</h4>
                <span>Costura Criativa</span>
              </section>
              <section>
                <h1>R$ 150,00</h1>
              </section>
            </main>
          </CardItem>
          <CardItem>
            <div>
              <Image src={purse10} alt='' fill sizes='100vw' />
            </div>
            <main>
              <section>
                <h4>Bolsa de tecido</h4>
                <span>Costura Criativa</span>
              </section>
              <section>
                <h1>R$ 150,00</h1>
              </section>
            </main>
          </CardItem>
          {/* //---------------- Madeira --------------------------- */}
          <CardItem>
            <div>
              <Image src={caixaDecorativa2} alt='' fill sizes='100vw' />
            </div>
            <main>
              <section>
                <h4>Caixa decorativa</h4>
                <span>Artesanato na madeira</span>
              </section>
              <section>
                <h1>R$ 89,90</h1>
              </section>
            </main>
          </CardItem>
          <CardItem>
            <div>
              <Image src={caixaDecorativa3} alt='' fill sizes='100vw' />
            </div>
            <main>
              <section>
                <h4>Caixa decorativa</h4>
                <span>Artesanato na madeira</span>
              </section>
              <section>
                <h1>R$ 89,90</h1>
              </section>
            </main>
          </CardItem>
          <CardItem>
            <div>
              <Image src={caixaDecorativa4} alt='' fill sizes='100vw' />
            </div>
            <main>
              <section>
                <h4>Caixa decorativa</h4>
                <span>Artesanato na madeira</span>
              </section>
              <section>
                <h1>R$ 89,90</h1>
              </section>
            </main>
          </CardItem>
          <CardItem>
            <div>
              <Image src={portaVelas1} alt='' fill sizes='100vw' />
            </div>
            <main>
              <section>
                <h4>Porta vela</h4>
                <span>Mini porta vela (marchetaria)</span>
              </section>
              <section>
                <h1>R$ 49,90</h1>
              </section>
            </main>
          </CardItem>
          <CardItem>
            <div>
              <Image src={portaVelas2} alt='' fill sizes='100vw' />
            </div>
            <main>
              <section>
                <h4>Porta vela</h4>
                <span>Mini porta vela (marchetaria)</span>
              </section>
              <section>
                <h1>R$ 49,90</h1>
              </section>
            </main>
          </CardItem>
          <CardItem>
            <div>
              <Image src={portaVelas3} alt='' fill sizes='100vw' />
            </div>
            <main>
              <section>
                <h4>Porta vela</h4>
                <span>Mini porta vela (marchetaria)</span>
              </section>
              <section>
                <h1>R$ 49,90</h1>
              </section>
            </main>
          </CardItem>
          <CardItem>
            <div>
              <Image src={portaVelas4} alt='' fill sizes='100vw' />
            </div>
            <main>
              <section>
                <h4>Porta vela</h4>
                <span>Mini porta vela (marchetaria)</span>
              </section>
              <section>
                <h1>R$ 49,90</h1>
              </section>
            </main>
          </CardItem>
          <CardItem>
            <div>
              <Image src={portaVelas5} alt='' fill sizes='100vw' />
            </div>
            <main>
              <section>
                <h4>Porta vela</h4>
                <span>Mini porta vela (marchetaria)</span>
              </section>
              <section>
                <h1>R$ 49,90</h1>
              </section>
            </main>
          </CardItem>
          <CardItem>
            <div>
              <Image src={portaVelas6} alt='' fill sizes='100vw' />
            </div>
            <main>
              <section>
                <h4>Porta vela</h4>
                <span>Mini porta vela (marchetaria)</span>
              </section>
              <section>
                <h1>R$ 49,90</h1>
              </section>
            </main>
          </CardItem>
          <CardItem>
            <div>
              <Image src={portaIncenso1} alt='' fill sizes='100vw' />
            </div>
            <main>
              <section>
                <h4>Porta incenso</h4>
                <span>Suporte para incenso</span>
              </section>
              <section>
                <h1>R$ 39,90</h1>
              </section>
            </main>
          </CardItem>
          <CardItem>
            <div>
              <Image src={portaChaveiros1} alt='' fill sizes='100vw' />
            </div>
            <main>
              <section>
                <h4>Porta chaveiros</h4>
                <span>Porta chaveiros</span>
              </section>
              <section>
                <h1>R$ 69,90</h1>
              </section>
            </main>
          </CardItem>
          <CardItem>
            <div>
              <Image src={suporteHeadset1} alt='' fill sizes='100vw' />
            </div>
            <main>
              <section>
                <h4>Suporte para Headset</h4>
                <span>Trabalho em marchetaria</span>
              </section>
              <section>
                <h1>R$ 49,90</h1>
              </section>
            </main>
          </CardItem>
          <CardItem>
            <div>
              <Image src={suporteVinhoTaca1} alt='' fill sizes='100vw' />
            </div>
            <main>
              <section>
                <h4>Suporte para Vinho e taças</h4>
                <span>Trabalho em marchetaria</span>
              </section>
              <section>
                <h1>R$ 99,90</h1>
              </section>
            </main>
          </CardItem>
          <CardItem>
            <div>
              <Image src={suporteVinhoTaca2} alt='' fill sizes='100vw' />
            </div>
            <main>
              <section>
                <h4>Suporte para Vinho e taças</h4>
                <span>Trabalho em marchetaria</span>
              </section>
              <section>
                <h1>R$ 99,90</h1>
              </section>
            </main>
          </CardItem>
          <CardItem>
            <div>
              <Image src={suporteVinhoTaca3} alt='' fill sizes='100vw' />
            </div>
            <main>
              <section>
                <h4>Suporte para Vinho e taças</h4>
                <span>Trabalho em marchetaria</span>
              </section>
              <section>
                <h1>R$ 99,90</h1>
              </section>
            </main>
          </CardItem>
          <CardItem>
            <div>
              <Image src={tabuaCorte1} alt='' fill sizes='100vw' />
            </div>
            <main>
              <section>
                <h4>Tabua de corte</h4>
                <span>Trabalho em marchetaria</span>
              </section>
              <section>
                <h1>R$ 199,90</h1>
              </section>
            </main>
          </CardItem>
          <CardItem>
            <div>
              <Image src={tabuaCorte2} alt='' fill sizes='100vw' />
            </div>
            <main>
              <section>
                <h4>Tabua de corte</h4>
                <span>Trabalho em marchetaria</span>
              </section>
              <section>
                <h1>R$ 199,90</h1>
              </section>
            </main>
          </CardItem>
          <CardItem>
            <div>
              <Image src={tabuaCorte3} alt='' fill sizes='100vw' />
            </div>
            <main>
              <section>
                <h4>Tabua de corte</h4>
                <span>Trabalho em marchetaria</span>
              </section>
              <section>
                <h1>R$ 199,90</h1>
              </section>
            </main>
          </CardItem>
          <CardItem>
            <div>
              <Image src={tabuaCorte4} alt='' fill sizes='100vw' />
            </div>
            <main>
              <section>
                <h4>Tabua de corte</h4>
                <span>Trabalho em marchetaria</span>
              </section>
              <section>
                <h1>R$ 199,90</h1>
              </section>
            </main>
          </CardItem>
          <CardItem>
            <div>
              <Image src={portaXicara1} alt='' fill sizes='100vw' />
            </div>
            <main>
              <section>
                <h4>Porta xícara</h4>
                <span>Artesanato em madeira</span>
              </section>
              <section>
                <h1>R$ 59,90</h1>
              </section>
            </main>
          </CardItem>
          <CardItem>
            <div>
              <Image src={portaXicara2} alt='' fill sizes='100vw' />
            </div>
            <main>
              <section>
                <h4>Porta xícara</h4>
                <span>Artesanato em madeira</span>
              </section>
              <section>
                <h1>R$ 59,90</h1>
              </section>
            </main>
          </CardItem>
          <CardItem>
            <div>
              <Image src={portaXicara3} alt='' fill sizes='100vw' />
            </div>
            <main>
              <section>
                <h4>Porta xícara</h4>
                <span>Artesanato em madeira</span>
              </section>
              <section>
                <h1>R$ 59,90</h1>
              </section>
            </main>
          </CardItem>
          <CardItem>
            <div>
              <Image src={portaXicara4} alt='' fill sizes='100vw' />
            </div>
            <main>
              <section>
                <h4>Porta xícara</h4>
                <span>Artesanato em madeira</span>
              </section>
              <section>
                <h1>R$ 59,90</h1>
              </section>
            </main>
          </CardItem>
          <CardItem>
            <div>
              <Image src={mesaVinho1} alt='' fill sizes='100vw' />
            </div>
            <main>
              <section>
                <h4>Mesa para utensílios de vinho</h4>
                <span>Artesanato em madeira</span>
              </section>
              <section>
                <h1>R$ 199,90</h1>
              </section>
            </main>
          </CardItem>
          <CardItem>
            <div>
              <Image src={miniMesaFrios1} alt='' fill sizes='100vw' />
            </div>
            <main>
              <section>
                <h4>Mini mesa para frios</h4>
                <span>Artesanato em madeira</span>
              </section>
              <section>
                <h1>R$ 159,90</h1>
              </section>
            </main>
          </CardItem>
          <CardItem>
            <div>
              <Image src={portaCopos1} alt='' fill sizes='100vw' />
            </div>
            <main>
              <section>
                <h4>Porta coposo</h4>
                <span>Trabalho em marchetaria</span>
              </section>
              <section>
                <h1>R$ 89,90</h1>
              </section>
            </main>
          </CardItem>
          <CardItem>
            <div>
              <Image src={portaPatezeira1} alt='' fill sizes='100vw' />
            </div>
            <main>
              <section>
                <h4>Patezeira em marchetaria</h4>
                <span>Suporte para patezeiras</span>
              </section>
              <section>
                <h1>R$ 99,90</h1>
              </section>
            </main>
          </CardItem>
          <CardItem>
            <div>
              <Image src={portaPatezeira2} alt='' fill sizes='100vw' />
            </div>
            <main>
              <section>
                <h4>Patezeira em marchetaria</h4>
                <span>Suporte para patezeiras</span>
              </section>
              <section>
                <h1>R$ 99,90</h1>
              </section>
            </main>
          </CardItem>
          <CardItem>
            <div>
              <Image src={portaPatezeira3} alt='' fill sizes='100vw' />
            </div>
            <main>
              <section>
                <h4>Patezeira em marchetaria</h4>
                <span>Suporte para patezeiras</span>
              </section>
              <section>
                <h1>R$ 99,90</h1>
              </section>
            </main>
          </CardItem>
          <CardItem>
            <div>
              <Image src={expositor1} alt='' fill sizes='100vw' />
            </div>
            <main>
              <section>
                <h4>Expositor</h4>
                <span>Feito sob encomenda</span>
              </section>
              <section>
                <h1>R$ 1.999,90</h1>
              </section>
            </main>
          </CardItem>
          <CardItem>
            <div>
              <Image src={portaPlantas1} alt='' fill sizes='100vw' />
            </div>
            <main>
              <section>
                <h4>Suporte para plantas</h4>
                <span>Feito sob encomenda</span>
              </section>
              <section>
                <h1>R$ 599,90</h1>
              </section>
            </main>
          </CardItem>
          <CardItem>
            <div>
              <Image src={portaPlantas2} alt='' fill sizes='100vw' />
            </div>
            <main>
              <section>
                <h4>Suporte para plantas</h4>
                <span>Feito sob encomenda</span>
              </section>
              <section>
                <h1>R$ 599,90</h1>
              </section>
            </main>
          </CardItem>
          <CardItem>
            <div>
              <Image src={portaPlantas3} alt='' fill sizes='100vw' />
            </div>
            <main>
              <section>
                <h4>Suporte para plantas</h4>
                <span>Feito sob encomenda</span>
              </section>
              <section>
                <h1>R$ 599,90</h1>
              </section>
            </main>
          </CardItem>
          <CardItem>
            <div>
              <Image src={portaPlantas4} alt='' fill sizes='100vw' />
            </div>
            <main>
              <section>
                <h4>Suporte para plantas</h4>
                <span>Feito sob encomenda</span>
              </section>
              <section>
                <h1>R$ 599,90</h1>
              </section>
            </main>
          </CardItem>
          <CardItem>
            <div>
              <Image src={portaPlantas6} alt='' fill sizes='100vw' />
            </div>
            <main>
              <section>
                <h4>Suporte para plantas</h4>
                <span>Feito sob encomenda</span>
              </section>
              <section>
                <h1>R$ 599,90</h1>
              </section>
            </main>
          </CardItem>
          <CardItem>
            <div>
              <Image src={sapateira1} alt='' fill sizes='100vw' />
            </div>
            <main>
              <section>
                <h4>Sapateira</h4>
                <span>Feito sob encomenda</span>
              </section>
              <section>
                <h1>R$ 399,90</h1>
              </section>
            </main>
          </CardItem>
          <CardItem>
            <div>
              <Image src={decoracaoXicara1} alt='' fill sizes='100vw' />
            </div>
            <main>
              <section>
                <h4>Decorativo para xícaras</h4>
                <span>Costura criativa</span>
              </section>
              <section>
                <h1>R$ 59,90</h1>
              </section>
            </main>
          </CardItem>
          <CardItem>
            <div>
              <Image src={decoracaoXicara2} alt='' fill sizes='100vw' />
            </div>
            <main>
              <section>
                <h4>Decorativo para xícaras</h4>
                <span>Costura criativa</span>
              </section>
              <section>
                <h1>R$ 59,90</h1>
              </section>
            </main>
          </CardItem>
          <CardItem>
            <div>
              <Image src={panoPrato1} alt='' fill sizes='100vw' />
            </div>
            <main>
              <section>
                <h4>Pano de prato decorado</h4>
                <span>Costura criativa</span>
              </section>
              <section>
                <h1>R$ 39,90</h1>
              </section>
            </main>
          </CardItem>
          <CardItem>
            <div>
              <Image src={panoPrato2} alt='' fill sizes='100vw' />
            </div>
            <main>
              <section>
                <h4>Pano de prato decorado</h4>
                <span>Costura criativa</span>
              </section>
              <section>
                <h1>R$ 39,90</h1>
              </section>
            </main>
          </CardItem>
          <CardItem>
            <div>
              <Image src={panoPrato3} alt='' fill sizes='100vw' />
            </div>
            <main>
              <section>
                <h4>Pano de prato decorado</h4>
                <span>Costura criativa</span>
              </section>
              <section>
                <h1>R$ 39,90</h1>
              </section>
            </main>
          </CardItem>
          <CardItem>
            <div>
              <Image src={panoPrato4} alt='' fill sizes='100vw' />
            </div>
            <main>
              <section>
                <h4>Pano de prato decorado</h4>
                <span>Costura criativa</span>
              </section>
              <section>
                <h1>R$ 39,90</h1>
              </section>
            </main>
          </CardItem>
          <CardItem>
            <div>
              <Image src={panoPrato5} alt='' fill sizes='100vw' />
            </div>
            <main>
              <section>
                <h4>Pano de prato decorado</h4>
                <span>Costura criativa</span>
              </section>
              <section>
                <h1>R$ 39,90</h1>
              </section>
            </main>
          </CardItem>
          <CardItem>
            <div>
              <Image src={segurador1} alt='' fill sizes='100vw' />
            </div>
            <main>
              <section>
                <h4>Segurador para cozinha</h4>
                <span>Costura criativa</span>
              </section>
              <section>
                <h1>R$ 39,90</h1>
              </section>
            </main>
          </CardItem>
          <CardItem>
            <div>
              <Image src={segurador2} alt='' fill sizes='100vw' />
            </div>
            <main>
              <section>
                <h4>Segurador para cozinha</h4>
                <span>Costura criativa</span>
              </section>
              <section>
                <h1>R$ 39,90</h1>
              </section>
            </main>
          </CardItem>
          <CardItem>
            <div>
              <Image src={portaTalheres1} alt='' fill sizes='100vw' />
            </div>
            <main>
              <section>
                <h4>Porta talheres</h4>
                <span>Costura criativa</span>
              </section>
              <section>
                <h1>R$ 59,90</h1>
              </section>
            </main>
          </CardItem>
          <CardItem>
            <div>
              <Image src={portaTalheres2} alt='' fill sizes='100vw' />
            </div>
            <main>
              <section>
                <h4>Porta talheres</h4>
                <span>Costura criativa</span>
              </section>
              <section>
                <h1>R$ 59,90</h1>
              </section>
            </main>
          </CardItem>
          <CardItem>
            <div>
              <Image src={portaAlgo1} alt='' fill sizes='100vw' />
            </div>
            <main>
              <section>
                <h4>Decorativo de prato</h4>
                <span>Costura criativa</span>
              </section>
              <section>
                <h1>R$ 39,90</h1>
              </section>
            </main>
          </CardItem>
        </CatalogContentContainer>
      </CatalogContainer>
    </>
  )
}
