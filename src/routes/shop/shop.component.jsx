import SHOP_DATA from "../../shop-data.js";

import './shop.style.scss'
import { useContext } from "react";
import { ProductContext } from "../../context/productsContext";

import ProductCard from "../../components/product-card/product-card.component";

const Shop = () => {
  const { products } = useContext(ProductContext);
  return (
    <div className="productsContainer">
      {products.map(product => {
        return <ProductCard key={product.id} product={product} />;
      })}
    </div>
  );
};

export default Shop;
