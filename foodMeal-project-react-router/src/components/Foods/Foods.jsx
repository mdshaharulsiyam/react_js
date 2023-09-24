import React, { useEffect, useState } from 'react'
import { Outlet, useLoaderData, useLocation } from 'react-router-dom'
import Category from '../category/Category';
const Foods = () => {
  const location = useLocation()
  const pathname = location.pathname;
  const FoodsCategory = useLoaderData();
  const categories = FoodsCategory.categories;
  return (
    <div>
      <h2 className='text-xl font-semibold text-center'>category </h2>
     <div className='flex justify-center gap-4 items-center flex-wrap max-w-3xl mx-auto p-6 my-7'>
     {
        categories.map(singlecategory=> <Category key={singlecategory.idCategory} singlecategory={singlecategory}></Category>)
    }   
     </div>
     {
      pathname === "/Foods"?<h3 className='text-xl font-bold my-11 text-center'>please select a category..... </h3>:<Outlet></Outlet>
    }
    </div>
  )
}

export default Foods
