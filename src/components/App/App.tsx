import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import {
  PageCart,
  PageOrder,
  PageOrders,
  PageProductForm,
  PageProductImport,
  PageProducts,
} from "components/pages";
import {
  MainLayout,
} from "components";

import './App.css';

function App() {

  return (
    <Router>
      <Switch>
        <Route path="/">
          <MainLayout>
            <Route exact path="/">
              <PageProducts/>
            </Route>
            <Route exact path={["/admin/product-form/:id", '/admin/product-form']}>
              <PageProductForm/>
            </Route>
            <Route exact path="/cart">
              <PageCart />
            </Route>
            <Route exact path="/admin/orders">
              <PageOrders />
            </Route>
            <Route exact path="/admin/order/:id">
              <PageOrder />
            </Route>
            <Route exact path="/admin/products">
              <PageProductImport />
            </Route>
          </MainLayout>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
