import React from 'react'
import Header from '../Header/Header'
import { Outlet, useLoaderData, useLocation } from 'react-router-dom'
import Articale from '../Articale/Articale'
import Footer from '../Footer/Footer'

const Home = () => {
    const location = useLocation()
    const {pathname} = location;
    
  return (
    <div>
      <Header></Header>
      {
      pathname === "/"?<Articale></Articale>:<Outlet></Outlet>
      }
      <Footer></Footer>
    </div>
  )
}

export default Home
