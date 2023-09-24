import React from 'react'
import { Link } from 'react-router-dom';

const SingleUser = ({user}) => {
    const {name,email,address,phone,website,id}= user;
    const {street,suite,city,zipcode}=address;
  return (
    <div>
      <div class="card w-96 bg-rose-400 text-neutral-content border p-4 shadow-2xl rounded-lg text-left">
            <div class="card-body items-center">
                <h2 class="card-title">name : {name}</h2>
                <p>email : {email}</p>
                <p>phone : {phone}</p>
                <p>website : {website}</p>
                <p> address : {street+' '+suite+' '+city+' '+zipcode}</p>

                <div class="card-actions justify-end">
                <Link to={`/userdetails/${id}`}><button class="btn btn-primary py-2 px-5 bg-blue-500 rounded-lg">Accept</button></Link>
                </div>
         </div>
        </div>
    </div>
  )
}

export default SingleUser
