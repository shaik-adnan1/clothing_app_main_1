import SHOP_DATA from "../../shop-data.js";

// import "./categories-preview.style.scss";

import { useContext, Fragment } from "react";
import { CategoriesContext } from "../../context/categories.context.jsx";

import CategoryPreview from "../../components/category-preview/category-preview.component.jsx";
// import ProductCard from "../../components/product-card/product-card.component";

const CategoriesPreview = () => {
  const { categoriesMap } = useContext(CategoriesContext);
  return (
    <Fragment>
      {Object.keys(categoriesMap).map(title => {
        const products = categoriesMap[title];
        return <CategoryPreview title={title} products={products} />;
      })}
    </Fragment>
  );
};

export default CategoriesPreview;
