import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <div  className='container mx-auto'>
        <div className="navbar">
    <div className="navbar-start">
        <div className="dropdown">
        <label tabIndex={0} className="btn btn-ghost btn-circle">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
        </label>
        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-3 shadow bg-base-100 rounded-box w-52">
            <NavLink className={'text-black'} to={'/'}>Home</NavLink>
            <NavLink className={'text-black'} to={'/Features'}>Features</NavLink>
            <NavLink className={'text-black'} to={'/Shop'}>Shop</NavLink>
            <NavLink className={'text-black'} to={'/Contact'}>Contact</NavLink>
            <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs static sm:hidden" />
        </ul>
        </div>
    </div>
    <div className="navbar-center">
        <Link className="btn btn-ghost normal-case text-xl" to={'/'}>Fashion House</Link>
    </div>
    <div className="navbar-end">
    <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs sm:static hidden" />
        <button className="btn btn-ghost btn-circle">
        <div className="indicator">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
            </svg>

            <span className="badge badge-xs badge-primary indicator-item">0</span>
        </div>
        </button>
    </div>
    </div>
    </div>
  )
}

export default Header
