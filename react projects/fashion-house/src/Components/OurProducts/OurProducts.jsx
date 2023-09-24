import React, { useEffect, useState } from 'react'
import Category from './Category';
import Products from './Products';

const OurProducts = () => {
    const [products,setProducts] = useState([])
    const [Categores,setCategores]=useState([]);
    useEffect(()=>{
        const fetchCategoryData = async ()=>{
            const res = await fetch('Category.json');
            let data = await res.json()
            setCategores(data)
        }
        fetchCategoryData()
    },[])
    useEffect(()=>{
        const fetchProductsData = async ()=>{
            const res = await fetch('products.json');
            let data = await res.json()
            setProducts(data)
        }
        fetchProductsData()
    },[])
  return (
    <div className='text-center container mx-auto'>
      <h2 className='text-5xl text-[#224F34] font-medium pb-10'>Our products</h2>
        <div className='flex flex-wrap justify-center gap-4 max-w-4xl mx-auto '>
            {
                Categores.map(categore=> <Category key={categore.id} categore={categore}></Category>)
            }
        </div>
        <div className='flex flex-wrap justify-start md:gap-[.63%] sm:gap-[2%] items-center'>
            {
                products.map(product=> <Products key={product.id} product={product}></Products>)
            }
        </div>
    </div>
  )
}

export default OurProducts
