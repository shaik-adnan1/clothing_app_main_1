//  import ProductCard from "../../components/product-card/product-card.component";

import { Routes, Route } from "react-router-dom";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import CategoriesPreview from "../categories-preview/categories-preview.component";
import Category from "../category/category.component";
import { CategoriesProvider } from "../../context/categories.context";
import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";
import { setCategoriesMap } from "../../store/categories/caregories.action";
import { selectCategoriesMap } from "../../store/categories/categories.selector";

const Shop = () => {

  const dispatch = useDispatch();

   useEffect(() => {
     const getCategoriesMap = async () => {
       const categoryMap = await getCategoriesAndDocuments("categories");
       dispatch(setCategoriesMap(categoryMap));
     };

     getCategoriesMap();
   }, []);

   const categoriesMap = useSelector(selectCategoriesMap)

  return (
    <CategoriesProvider>
      <Routes>
        <Route
          index
          element={<CategoriesPreview categoriesMap={categoriesMap} />}
        />
        <Route
          path=':category'
          element={<Category categoriesMap={categoriesMap} />}
        />
      </Routes>
    </CategoriesProvider>
  );
};

export default Shop;
