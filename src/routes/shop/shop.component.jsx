import SHOP_DATA from "../../shop-data.js";

import "./shop.style.scss";

import { Fragment, useContext } from "react";
import { CategoriesContext } from "../../context/categories.context.jsx";

import ProductCard from "../../components/product-card/product-card.component";

const Shop = () => {
  const { categoriesMap } = useContext(CategoriesContext);
 return (
   <Fragment>
     {Object.keys(categoriesMap).map(title => (
       <Fragment key={title}>
         <h2>{title}</h2>
         <div className='productsContainer'>
           {categoriesMap[title].map(product => (
             <ProductCard key={product.id} product={product} />
           ))}
         </div>
       </Fragment>
     ))}
   </Fragment>
 );
};

export default Shop;

// import { useContext, Fragment } from 'react';

// import ProductCard from '../../components/product-card/product-card.component';

// import { CategoriesContext } from '../../contexts/categories.context';

// import './shop.styles.scss';

// const Shop = () => {
//   const { categoriesMap } = useContext(CategoriesContext);

//   return (
//     <Fragment>
//       {Object.keys(categoriesMap).map((title) => (
//         <Fragment key={title}>
//           <h2>{title}</h2>
//           <div className='products-container'>
//             {categoriesMap[title].map((product) => (
//               <ProductCard key={product.id} product={product} />
//             ))}
//           </div>
//         </Fragment>
//       ))}
//     </Fragment>
//   );
// };

// export default Shop;