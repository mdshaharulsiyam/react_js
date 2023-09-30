import React, { useContext } from 'react'
import { usersDetails } from '../Context/Context'
import { Navigate, useNavigate } from 'react-router-dom'

const SecretRout = ({children}) => {
    const { user,loading } = useContext(usersDetails)
    const navigate = useNavigate()
    if(loading){
        return <h2 className='text-center text-5xl py-28'>loading</h2>
    }
    if (user) {
        return (
           children
        )
    }else{
       return navigate('/login')
    }

}

export default SecretRout
