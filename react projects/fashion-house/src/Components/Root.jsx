import React from 'react'
import Header from './Header/Header'
import { Outlet } from 'react-router-dom'
import Footer from './Footer/Footer'

const Root = () => {
  return (
    <div>
      <div className='bg-[#C2EFD4]'>
      <Header></Header>
      </div>
      <div className='min-h-[60vh]'>
      <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default Root
