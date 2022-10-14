import { NavContainer, NavLink } from "../styles/pages/home";

export default function Home() {
  return (
    <>
      <NavContainer>
        <NavLink>Catalogo</NavLink>
        <NavLink>Parceiros</NavLink>
        <NavLink>Encomendas</NavLink>
        <NavLink>Sobre nós</NavLink>
      </NavContainer>
      <section className="heroSection">
        <div className="">
          <h1>Artesanato com madeira e costura de alto nivel</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit, veniam dolores assumenda doloremque corrupti.</p>
          <button>Ir para catálogo</button>
        </div>
      </section>
    </>
  )
}
