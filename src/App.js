// import CategoryItem from "./components/category-item/category-item.component";
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import {
  onAuthStateChangedListener,
  createUserDocumentFromAuth,
} from "./utils/firebase/firebase.utils.js";

import { setCurrentUser } from './store/user/user.action.js'

import { Routes, Route } from "react-router-dom";



import Home from "./routes/home/home.component";
import Navigation from "./routes/navigation/navigation.component";
import Authentication from "./routes/authentication/authentication.component";
import Shop from "./routes/shop/shop.component";
import CheckOut from "./routes/checkout/checkout.component";


const App = () => {

  const dispatch = useDispatch();

   useEffect(() => {
     const unsubscribe = onAuthStateChangedListener(user => {
       setCurrentUser(user);

       if (user) {
         createUserDocumentFromAuth(user);
       }
       setCurrentUser(user);
     });
     return unsubscribe;
   }, []);


  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='shop/*' element={<Shop />} />
        {/*Nesting the routes*/}
        <Route path='auth' element={<Authentication />} />
        <Route path='checkout' element={<CheckOut />} />
      </Route>
    </Routes>
  );
};

export default App;
