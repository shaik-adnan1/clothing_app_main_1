import React from 'react';
import ReactDOM from 'react-dom';
// importing browserRoute component
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import { UserProvider } from './context/user.context';
import { ProductsProvider } from './context/productsContext';

import './index.scss';


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <UserProvider>
      <ProductsProvider>
        <App />
      </ProductsProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
