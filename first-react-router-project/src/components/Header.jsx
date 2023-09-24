import React from 'react'
import { Link, NavLink, Navigate } from 'react-router-dom'
import './navStyle.css'
const Header = () => {
  return (
    <div>
      <nav>
        <NavLink className='p-5 text-lg font-semibold' to={'/about'}>about</NavLink>
        <NavLink className='p-5 text-lg font-semibold' to={'/users'}>uers</NavLink>
      </nav>
    </div>
  )
}

export default Header
