import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebaseConfig";



export async function getProductsByCategory(category: number[], subCategories: number[]) {
  const productsRef = collection(db, "products");
  const queryConstraints = [];
  if (category.length > 0) queryConstraints.push(where('category', 'in', category));
  if (subCategories.length > 0) queryConstraints.push(where('subCategory', 'in', subCategories));

  const q = query(productsRef, ...queryConstraints)

  const productsSnapshot = await getDocs(q);
  const products = productsSnapshot.docs.map(doc => ({
    ...doc.data(),
    id: doc.id
  }))
  return products
}
