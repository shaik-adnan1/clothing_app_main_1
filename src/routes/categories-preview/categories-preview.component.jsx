// import "./categories-preview.style.scss";
import { Fragment } from "react";

import CategoryPreview from "../../components/category-preview/category-preview.component.jsx";
// import ProductCard from "../../components/product-card/product-card.component";

const CategoriesPreview = ({categoriesMap}) => {
  // const { categoriesMap } = useContext(CategoriesContext);
  // console.log((categoriesMap));
  return (
    <Fragment>
      {Object.keys(categoriesMap).map((title, i) => {
        const products = categoriesMap[title];
        return <CategoryPreview key={i} title={title} products={products} />;
      })}
    </Fragment>
  );
};

export default CategoriesPreview;
