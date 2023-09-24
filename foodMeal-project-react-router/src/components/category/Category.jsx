import React from 'react'
import { NavLink } from 'react-router-dom';

const Category = ({singlecategory}) => {
const {idCategory,strCategory,strCategoryDescription,strCategoryThumb}=singlecategory;
  return (
    <div>
      {
        <NavLink to={`/Foods/categoryItems/${strCategory}`}><button className='bg-[#FED7AA] text-black'>{strCategory}</button></NavLink>
      }
    </div>
  )
}

export default Category
