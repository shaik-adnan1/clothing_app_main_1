//  import ProductCard from "../../components/product-card/product-card.component";

import { Routes, Route } from "react-router-dom";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import CategoriesPreview from "../categories-preview/categories-preview.component";
import Category from "../category/category.component";
import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";
import { setCategories } from "../../store/categories/caregories.action";
import { selectCategories } from "../../store/categories/categories.selector";

const Shop = () => {

  const dispatch = useDispatch();

   useEffect(() => {
     const getCategoriesMap = async () => {
       const categoriesArray = await getCategoriesAndDocuments("categories");
       dispatch(setCategories(categoriesArray))
     };

     getCategoriesMap();
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
