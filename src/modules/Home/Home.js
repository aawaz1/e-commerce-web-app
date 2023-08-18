import React, { useEffect, useState } from 'react'
import Hero from '../../components/Hero'
import ProductCard from '../../components/productcard'
import Content from '../../components/Content'

import StatCard from '../../components/StatCard'
import Categories from '../../components/Categories'


const Home = () => {
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
    <Hero/>
    <Categories/>
    <div class="flex flex-col text-center w-full mt-20">
      <h2 class="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">POPULAR PRODUCTS</h2>
      <h1 class="sm:text-3xl text-2xl font-medium title-font text-gray-900">MOST POPULAR PRODUCTS</h1>
    </div>
    {
      products.length > 0 ? 
      <ProductCard products={products}/> :
      <div>
        loading.....
      </div> 
     
    }
    
    <Content/>
   
    <StatCard/>
  
    </>
  )
}

export default Home