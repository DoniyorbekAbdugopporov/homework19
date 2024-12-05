import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "../pages/about/About";
import Contact from "../pages/contact/Contact";
import Discovery from "../pages/discovery/Discovery";
import Layout from "../pages/layout/Layout";
import Login from "../pages/login/Login";
import Home from "../pages/home/Home";
import WishList from "../pages/wishlist/Wishlist";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/discovery" element={<Discovery />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/wishlist" element={<WishList />} />
      </Route>
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default Router;
