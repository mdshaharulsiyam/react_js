import React from 'react'

const Cloths = ({cloths}) => {
    const{id,title,description,image_url}= cloths;
  return (
    <div className='md:w-[32.5%] w-full box-border p-2 my-8'>
    <img src={image_url} alt={title} className='w-full' />
    <h2 className='pb-4 pt-2 text-3xl font-semibold'>{title}</h2>
    <p className='text-xl font-medium'>{description}</p>
</div>
  )
}

export default Cloths
