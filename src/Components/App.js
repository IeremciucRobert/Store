import React from "react";
import Header from "./Header/NavBar";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Products from "./Pages/Products/Products";
import Favorites from "./Pages/Favorites/Favorites";
import Contact from "./Pages/Contact/Contact";
import Cart from "./Pages/Cart/Cart";
import Checkout from "./Pages/Checkout/Checkout";
import User from "./Pages/User/User";
import Product from "./Pages/SingleProduct/SingleProduct";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import Footer from "./Footer/Footer";
import "../css/universal.css";

export default function App() {
  return (
    <Router>
      <Header />
      <Route path={["/", "/Home"]} exact component={Home} />
      <Route path="/Products" component={Products} />
      <Route path="/Favorites" component={Favorites} />
      <Route path="/Contact" component={Contact} />
      <Route path="/Cart" component={Cart} />
      <Route path="/User" component={User} />
      <Route path="/Product" component={Product} />
      <Route path="/Checkout" component={Checkout} />
      <Route path="/Login" component={Login} />
      <Route path="/Register" component={Register} />
      <Footer />
    </Router>
  );
}
