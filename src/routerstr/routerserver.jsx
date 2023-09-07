import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pathstr/home/home";
import Contacts from "./pathstr/information/contacs/contacs";
import Uboutus from "./pathstr/information/uboutus/uboutus";
import Paymentsorder from "./pathstr/information/payindelivery/paymentsorder";
import Shop from "./pathstr/shop/shop";
import Monitors from "./pathstr/shop/categories/monitors";
import Keyboard from "./pathstr/shop/categories/keyboard";
import Microphones from "./pathstr/shop/categories/microphone";
import Accessories from "./pathstr/shop/categories/accessories";
import Headphones from "./pathstr/shop/categories/headphones";
import Mouse from "./pathstr/shop/categories/mouse";
import Mousepads from "./pathstr/shop/categories/mousepads";
import Installmentplan from "./pathstr/information/installmentplan/installmentplan";

import Header from "./header/header";
import Footer from "./footer/footer";

import Cartproduct from "./pathstr/shop/categories/cssforcatalog/cartproduct/cartproduct";
import Shopingcart from "./pathstr/card/shopingcart";

import Search from "./header/navbarmenu/search/search";
import Adminpanel from "./adminpanel/adminpanel";


const Routerservises = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<Uboutus />} />
        <Route path="/contacs" element={<Contacts />} />
        <Route path="/paymentorder" element={<Paymentsorder />} />

        <Route path="/installmentplan" element={<Installmentplan />} />

        <Route path="/shop" element={<Shop />} />

        <Route path="/shop/mouse" element={<Mouse />} />
        <Route path="/shop/keyboard" element={<Keyboard />} />
        <Route path="/shop/monitors" element={<Monitors />} />
        <Route path="/shop/microphones" element={<Microphones />} />
        <Route path="/shop/accessories" element={<Accessories />} />
        <Route path="/shop/headphones" element={<Headphones />} />
        <Route path="/shop/mousepads" element={<Mousepads />} />

        <Route path="cart/:name/:article" element={<Cartproduct />} />


        <Route path="/Admin" element={<Adminpanel/>} />

        <Route path="/search" element={<Search/>} />

    
        <Route path="/shopingcart"
  element={<Shopingcart/>}
/>
        
          
            
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default Routerservises;
