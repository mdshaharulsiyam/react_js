import React from 'react'
import {useLoaderData, useNavigate } from 'react-router-dom'

const UserDetails = () => {
    const details = useLoaderData();
    const navigate = useNavigate()
    function back() {
        navigate(-1)
    }
    console.log(details)
    const {name,email,address,phone,website,id}= details;
    const {street,suite,city,zipcode}=address;
  return (
    <div>
       <div class="card w-96 bg-rose-400 text-neutral-content border p-4 mx-auto shadow-2xl rounded-lg text-left">
            <div class="card-body items-center">
                <h2 class="card-title">name : {name}</h2>
                <p>email : {email}</p>
                <p>phone : {phone}</p>
                <p>website : {website}</p>
                <p> address : {street+' '+suite+' '+city+' '+zipcode}</p>
                <button className='py-2 px-6 bg-blue-500 rounded-2xl' onClick={back}>back</button>
         </div>
        </div>
    </div>
  )
}

export default UserDetails
