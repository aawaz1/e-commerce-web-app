import Header from "./components/Header";
import Home from "./modules/Home/Home";
import Footer from "./components/Footer";
import { Router, Routes, Route } from "react-router-dom";

import "./App.css";
import Product from "./components/product";

import Products from "./modules/products";
import CategoryProducts from "./modules/CategoryProducts";





function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home/>} />
        
        <Route path="/products" element={<Products/>} />
       
        <Route path="/products/:id" element={<Product/>} />
        <Route path="/categories/:name" element={<CategoryProducts/>} />
        
        <Route path="*" element={<div>404 Error </div>} />
       
      </Routes>

      
      <Footer />
    </div>
  );
}

export default App;
