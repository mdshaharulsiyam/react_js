import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './header.css'
import { AiOutlineMenu } from 'react-icons/ai';
const Header = () => {
  let menushow = '';
  const [open,setOpen] = useState(false)
  const menuShow=()=>{
    setOpen(!open)
  }
  {
    open? menushow = "show":menushow = ""
  }
  return (
    <div className='bg-orange-200'>
      <nav className='py-4 flex justify-between items-center container mx-auto relative'>
        <div className='flex justify-start items-center '>
        <h2 id='hungry' className='text-xl font-bold'>Hungry!!!!!</h2>
        <input type="text" id='search' placeholder='search' className='px-4 py-2 ml-4 rounded-[4px]' />
        </div>
        <button onClick={menuShow} className='md:hidden block cursor-pointer'>
          {
            open?<AiOutlineMenu className='rotate-90'></AiOutlineMenu>:<AiOutlineMenu></AiOutlineMenu>
          }

        </button>
        <ul id={`${menushow}`} className={`manutransition absolute md:static hidden  -right-[999999999px] md:flex justify-start items-center gap-4`}>
            <NavLink to={"/"}>Home</NavLink>
            <NavLink to={"/Foods"}>Foods</NavLink>
            <NavLink to={"/About"}>About us</NavLink>
        </ul>
      </nav>
    </div>
  )
}

export default Header
