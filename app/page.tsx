import CreateProductFab from "./products/create-product/crate-product-fab";
import Products from "./products/products";

export default async function Home() {
  return (<>
    <Products/>
    <CreateProductFab/>
  </>);
}
