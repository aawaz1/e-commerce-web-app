import React from "react";
import Categories from "../../components/Categories";

import { useState, useEffect } from "react";
import ProductCard from "../../components/productcard";


const Products = () => {
  const [products,setProducts] = useState([])
  const fetchProducts = async () =>{
    const response =  await fetch('https://fakestoreapi.com/products')
    const data = await response.json()
    console.log(data)
    setProducts(data)
  }
  useEffect(()=>{
    
    fetchProducts()
  },[])
  return (
    <>
    <Categories/>
    <div class="flex flex-col text-center w-full mt-20">
      <h2 class="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">POPULAR PRODUCTS</h2>
      <h1 class="sm:text-3xl text-2xl font-medium title-font text-gray-900">ALL PRODUCTS</h1>
    </div>
    {
       products.length > 0 ?
       <ProductCard products={products}/>
       : 
       <div>loading.....</div>
    }
   </>
  )


  
};

export default Products;
