import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

const Error = () => {
  const navigate = useNavigate()
    function back() {
      navigate('/')
    }
  return (
    <div className='text-center container mx-auto p-10'>
      <h2 className='text-8xl'>OPPS !!!!!!!!!!!</h2>
      <p>looks like this page doesnt exist</p>
      <button className='m-10' onClick={back}>back to home </button>
    </div>
  )
}

export default Error
