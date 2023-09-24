import React from 'react'

const Products = ({product}) => {
    const { id, name, price, rating, image_url, description } = product;
    return (
        <div className='md:w-[24.5%] sm:w-[49%] w-full box-border p-2 my-8'>
            <img src={image_url} alt={name} className='w-full' />
            <h2 className='pt-4'>{name}</h2>
            <div className='flex flex-wrap justify-between w-[150px] mx-auto pb-3 items-center'>
                <p>{price}</p>
                <hr className='w-4 block rotate-90' />
                <p className='flex'>{rating}<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-yellow-400">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                </svg>
                </p>
            </div>
        </div>
    )
}

export default Products
