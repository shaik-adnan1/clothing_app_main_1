import { useContext, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { CategoriesContext } from "../../context/categories.context";

import "./category.style.scss";
import ProductCard from "../../components/product-card/product-card.component";

const Category = () => {
  const { category } = useParams();
  const { categoriesMap } = useContext(CategoriesContext);

  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <div className='category-container'>
      {
        products &&
          products.map(product => {
            return <ProductCard key={product.id} product={product} />;
          })
      }
    </div>
  );
};

export default Category;


// import { useContext, useState, useEffect, Fragment } from "react";
// import { useParams } from "react-router-dom";

// import ProductCard from "../../components/product-card/product-card.component";

// // import { CategoriesContext } from "../../contexts/categories.context";
// import { CategoriesContext } from "../../context/categories.context";
// // import { CategoryContainer, Title } from "./category.styles";

// const Category = () => {
//   const { category } = useParams();
//   const { categoriesMap } = useContext(CategoriesContext);
//   const [products, setProducts] = useState(categoriesMap[category]);

//   useEffect(() => {
//     setProducts(categoriesMap[category]);
//   }, [category, categoriesMap]);

//   return (
//     <Fragment>
//       {/* <Title>{category.toUpperCase()}</Title> */}
//       <div>
//         {products &&
//           products.map(product => (
//             <ProductCard key={product.id} product={product} />
//           ))}
//       </div>
//     </Fragment>
//   );
// };

// export default Category;