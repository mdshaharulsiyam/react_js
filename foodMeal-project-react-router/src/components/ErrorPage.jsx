import React from 'react'
import { useNavigate } from 'react-router-dom'

const ErrorPage = () => {
    const navigate = useNavigate()
    const goHome = ()=>{
        navigate('/')
    }
  return (
    <div className='flex justify-center items-center text-6xl h-min-[100vh] flex-col my-48'>
      <h2>opps!</h2>
      <button className='text-xl' onClick={goHome}>Home</button>
    </div>
  )
}

export default ErrorPage
