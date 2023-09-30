import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import './header.css';
import { usersDetails } from '../Context/Context';

const Header = () => {
  const { user, logout } = useContext(usersDetails)
  const signoutUser = () => {
    logout()
  }
  console.log(user)
  const navlinks = <>
    <li> <NavLink className={'py-2 px-5 mx-2 text-base font-semibold hover:text-red-400 active:scale-[.9] transition-all'} to={'/'}>home</NavLink></li>
    {
      user && <>
        <li><NavLink className={'py-2 px-5 mx-2 text-base font-semibold hover:text-red-400 active:scale-[.9] transition-all'} to={'/profile'}>profile</NavLink></li>
      </>
    }
  </>
  return (
    <div className="navbar container mx-auto">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 menuBtn">
            {navlinks}

          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-xl">siyam</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {navlinks}
        </ul>
      </div>
      <div className="navbar-end menuBtn">
        {
          user ? <><h2 className='px-2'>{user.displayName}</h2><button onClick={signoutUser} className='btn'>signout</button></> : <NavLink className={'btn'} to={'/login'}>login</NavLink>
        }
      </div>
    </div>
  )
}

export default Header
