import './App.css';
import React, { useState, useEffect } from 'react';
import { CssBaseline } from '@material-ui/core';
import {commerce} from './lib/commerce';
import Products from './components/Products/Products';
// import Navbar from './components/Navbar/Navbar';
// import Cart from './components/Cart/Cart';
// import Checkout from './components/CheckoutForm/Checkout/Checkout';
// import ProductView from './components/ProductView/ProductView';
// import Footer from './components/Footer/Footer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import '@fortawesome/fontawesome-free/css/all.min.css';


function App() {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const { data } = await commerce.products.list();

    setProducts(data);
  };

  useEffect(()=>{
    fetchProducts();

  },[]);

  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            <Products products={products}  />
          </Route>
          <Route path="/product-view/:id" exact>
            <ProductView />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
