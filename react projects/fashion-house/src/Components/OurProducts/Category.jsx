import React from 'react'
import { NavLink } from 'react-router-dom';

const Category = ({categore}) => {
    const {id,name}=categore;
  return <NavLink to={"/"}><button className='uppercase text-[#454545] text-xl font-medium bg-white border-b-black rounded-none'>{name}</button></NavLink>
}
export default Category
