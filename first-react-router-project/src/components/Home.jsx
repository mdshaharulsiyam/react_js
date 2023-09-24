import React from 'react'
import Header from './Header'
import { Outlet, useNavigation } from 'react-router-dom'

const Home = () => {
    const navigation = useNavigation()
  return (
    <div className='text-center py-4'>
      <h2>hellow this is home</h2>
      <Header></Header>
      <h2>contents</h2>
      {
         navigation.state === "loading" ?<p className='text-5xl mb-11'>loading.....</p>:<Outlet></Outlet>
      }
    </div>
  )
}

export default Home
