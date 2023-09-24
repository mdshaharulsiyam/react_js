import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Cowntdown from '../Cowndown/Cowntdowns';
const ExclusiveItemCart = ({ item }) => {
    const { id, title, description, image, date } = item;
    return (
        <div className="hero box-border pb-10 container mx-auto bg-[#C2EFD4]">
            <div className="hero-content flex-col lg:flex-row">
                <img id='banerImage' src={image} className="md:w-[40%] w-full box-border p-8 pb-0 rounded-tl-[100px] rounded-br-[100px]" />
                <div className=''>
                    <h1 className="text-5xl font-bold">{title}</h1>
                    <p className="py-6">{description}</p>
                    <Cowntdown key={id} date={date}></Cowntdown>
                    <button className="btn bg-[#224F34] text-white hover:text-black">BUY NOW</button>
                </div>
            </div>
        </div>
    )
}

export default ExclusiveItemCart
