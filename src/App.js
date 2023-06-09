// import CategoryItem from "./components/category-item/category-item.component";

import { Routes, Route } from "react-router-dom";

import Home from "./routes/home/home.component";
import Navigation from "./routes/navigation/navigation.component";
import SignIn from "./routes/sign-in/sign-in.component";

const Shop = () => {
  return <h1> This is a shop page</h1>;
};

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='shop' element={<Shop />} />{/*Nesting the routes*/}
        <Route path = 'signIn' element={<SignIn />} />
      </Route>
    </Routes>
  );
};

export default App;
