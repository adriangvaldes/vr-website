import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { Collapse, List, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import Image from "next/image";
import { useEffect, useState } from "react";
import { CardItem, CatalogContainer, CatalogContentContainer, CatalogHeader, CatalogSideBar } from "../styles/pages/catalog";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

import { getProductsByCategory } from "../database/functions/products";

export default function Home() {
  const [openWoodCollapse, setWoodCollapse] = useState(false);
  const [openClothCollapse, setOpenClothCollapse] = useState(false);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState<number[]>([]);
  const [products, setProducts] = useState([]);

  function handleSelectSubCategory(checked: boolean, categoryValue: number, subCategoryValue: number) {
    setSubCategory((prevState) => (checked ? [...prevState, subCategoryValue] : prevState.filter((element) => element !== subCategoryValue)));
    setCategory((prevState) =>
      !checked && subCategory.length - 1 === 0 ? [...prevState, categoryValue] : prevState.filter((element) => element !== categoryValue)
    );
  }

  async function loadProducts() {
    const fetchedData = await getProductsByCategory(category, subCategory);
    setProducts(fetchedData);
  }

  useEffect(() => {
    loadProducts();
  }, [subCategory]);

  return (
    <>
      <CatalogHeader>
        <h1>CATÁLOGO</h1>
      </CatalogHeader>
      <CatalogContainer>
        <CatalogSideBar>
          <List
            sx={{
              width: "100%",
              maxWidth: 360,
              bgcolor: "#1f0e04",
              color: "#faf4eb",
            }}
            component='nav'
            aria-labelledby='nested-list-subheader'
          >
            <ListItemButton onClick={() => setWoodCollapse(!openWoodCollapse)}>
              <ListItemText primary='Madeira' />
              {openWoodCollapse ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={openWoodCollapse} sx={{ bgcolor: "#faf4eb", color: "#1f0e04" }} timeout='auto' unmountOnExit>
              <List component='div' disablePadding>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon>
                    <Checkbox {...label} onChange={(event) => handleSelectSubCategory(event.target.checked, 1, 1)} />
                  </ListItemIcon>
                  <ListItemText primary='Utensílios Gourmet' />
                </ListItemButton>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon>
                    <Checkbox {...label} onChange={(event) => handleSelectSubCategory(event.target.checked, 1, 2)} />
                  </ListItemIcon>
                  <ListItemText primary='Pequenos móveis utilitários' />
                </ListItemButton>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon>
                    <Checkbox {...label} onChange={(event) => handleSelectSubCategory(event.target.checked, 1, 3)} />
                  </ListItemIcon>
                  <ListItemText primary='Utensílios decorativos' />
                </ListItemButton>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon>
                    <Checkbox {...label} onChange={(event) => handleSelectSubCategory(event.target.checked, 1, 4)} />
                  </ListItemIcon>
                  <ListItemText primary='Luminárias' />
                </ListItemButton>
              </List>
            </Collapse>
            <ListItemButton onClick={() => setOpenClothCollapse(!openClothCollapse)}>
              <ListItemText primary='Tecido' />
              {openClothCollapse ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={openClothCollapse} sx={{ bgcolor: "#faf4eb", color: "#1f0e04" }} timeout='auto' unmountOnExit>
              <List component='div' disablePadding>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon>
                    <Checkbox {...label} onChange={(event) => handleSelectSubCategory(event.target.checked, 2, 1)} />
                  </ListItemIcon>
                  <ListItemText primary='Bolsas e Nécessaires' />
                </ListItemButton>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon>
                    <Checkbox {...label} onChange={(event) => handleSelectSubCategory(event.target.checked, 2, 2)} />
                  </ListItemIcon>
                  <ListItemText primary='Utilitários Gourmet ' />
                </ListItemButton>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon>
                    <Checkbox {...label} onChange={(event) => handleSelectSubCategory(event.target.checked, 2, 3)} />
                  </ListItemIcon>
                  <ListItemText primary='Outros utilitários' />
                </ListItemButton>
              </List>
            </Collapse>
          </List>
        </CatalogSideBar>
        <CatalogContentContainer>
          {products.length > 0 &&
            products.map((product) => (
              <CardItem>
                <div>
                  <Image src={product.imageUrl} alt='' fill sizes='100vw' />
                </div>
                <main>
                  <section>
                    <h4>{product.name}</h4>
                    <span> - </span>
                  </section>
                  <section>
                    <h1>R$ {product.price},00</h1>
                  </section>
                </main>
              </CardItem>
            ))}
        </CatalogContentContainer>
      </CatalogContainer>
    </>
  );
}
