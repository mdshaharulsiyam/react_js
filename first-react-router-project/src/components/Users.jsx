import React from 'react'
import { useLoaderData } from 'react-router-dom'
import SingleUser from './SingleUser';
const Users = () => {
  const data = useLoaderData();
  console.log(data)
  return (
    <div>
      <h2>this is users page</h2>
      <p className='font-bold'>total users {data.length}</p>
      <div className='flex justify-center gap-4 flex-wrap'>
        {
          data.map(user => <SingleUser key={user.id} user={user}></SingleUser>)
        }
      </div>
    </div>
  )
}

export default Users
