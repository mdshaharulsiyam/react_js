import React from 'react'

const BanerContent = ({data}) => {
    const {title,description,image}=data;
    return (
        <div className="hero box-border pb-10">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img id='banerImage' src={image} className="w-[40%]  bg-[#6BC785] box-border p-8 pb-0 rounded-tl-[100px] rounded-br-[100px]" />
                <div className=''>
                    <h1 className="text-5xl font-bold">{title}</h1>
                    <p className="py-6">{description}</p>
                    <button className="btn bg-[#224F34] text-white hover:text-black">Explore Now</button>
                </div>
            </div>
        </div>
    )
}

export default BanerContent
