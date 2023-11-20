//  import ProductCard from "../../components/product-card/product-card.component";

import { Routes, Route } from "react-router-dom";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import CategoriesPreview from "../categories-preview/categories-preview.component";
import Category from "../category/category.component";

import { fetchCategoriesAsync } from "../../store/categories/caregories.action";
const Shop = () => {

  const dispatch = useDispatch();

   useEffect(() => {
     dispatch(fetchCategoriesAsync())
   }, []);


  return (
      <Routes>
        <Route
          index
          element={<CategoriesPreview />}
        />
        <Route
          path=':category'
          element={<Category />}
        />
      </Routes>
  );
};

export default Shop;
