import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import { BrowserRouter, Routes,Route } from 'react-router-dom';

import Home from './pages/Home';
import Cart from './component/Cart';
import Product from './component/Product';
import Login from './pages/Login'
import Favorite from './pages/Favorite';
import { Provider } from 'react-redux';
import store from './redux/store';
import Registration from './pages/Registration';
import Forget from './pages/Forget';
import Header from './component/Header';
import Products from './component/Products';
import Checkout from './component/Checkout';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
 < Provider store={store}> 
 <Header />  
 <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/products" element={<Products/>}></Route>
        <Route path="/products/:id" element={<Product />}></Route>
        <Route path= "/cart" element={<Cart />}></Route>
        <Route path="/register" element={<Registration />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/forget" element={<Forget/>}></Route>
        <Route path="/fav/:id" element={<Favorite />}></Route>
        <Route path="/checkout" element={<Checkout />}></Route>

      </Routes>
      </Provider>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
