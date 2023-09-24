import React from 'react'
import Header from '../Header/Header'
import { Outlet } from 'react-router-dom'
import Baner from '../Baner/Baner'
import Bestselling from '../Bestselling/Bestselling'
import OurProducts from '../OurProducts/OurProducts'
import Exclusive from '../Exclusive/Exclusive'
import DesignerClothes from '../DesignerClothes/DesignerClothes'
import FeedbackCorner from '../FeedbackCorner/FeedbackCorner'

const Home = () => {
  return (
    <>
      <div className='bg-[#C2EFD4]'>
      <Baner></Baner>
      </div>
      <Bestselling></Bestselling>
      <OurProducts></OurProducts>
      <Exclusive></Exclusive>
      <DesignerClothes></DesignerClothes>
      <FeedbackCorner></FeedbackCorner>
      </>
  )
}

export default Home
