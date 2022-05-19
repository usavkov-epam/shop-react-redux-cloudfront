import React from 'react';
import {
  Routes,
  Route,
} from "react-router-dom";

import {
  PageCart,
  PageOrder,
  PageOrders,
  PageProductForm,
  PageProductImport,
  PageProducts,
} from "../../components/pages";
import {
  MainLayout,
} from "../../components";

import './App.css';

function App() {

  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<PageProducts/>} />
        <Route path="cart" element={<PageCart />} />
        <Route path="admin">
          <Route path="orders" element={<PageOrders />}>
            <Route path=":id" element={<PageOrder />} />
          </Route>
          <Route path="products" element={<PageProductImport />} />
          <Route path="product-form" element={<PageProductForm/>}>
            <Route path=":id" element={<PageProductForm/>} />
          </Route>
        </Route>
      </Routes>
    </MainLayout>
  );
}

export default App;
