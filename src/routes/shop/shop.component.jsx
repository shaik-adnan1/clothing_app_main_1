//  import ProductCard from "../../components/product-card/product-card.component";

import { Routes, Route } from "react-router-dom";
import CategoriesPreview from "../categories-preview/categories-preview.component";
import Category from "../category/category.component";
import { CategoriesProvider } from "../../context/categories.context";

const Shop = () => {
  return (
    <CategoriesProvider>
      <Routes>
        <Route index element={<CategoriesPreview />} />
        <Route path=':category' element={<Category />} />
      </Routes>
    </CategoriesProvider>
  );
};

export default Shop;
