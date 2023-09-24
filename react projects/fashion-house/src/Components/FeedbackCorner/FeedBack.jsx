import React from 'react'

const FeedBack = ({ feedbacks }) => {
    const { name, username, feedback } = feedbacks;
    return (
        <div className='md:w-[19.5%] sm:w-[32.5%] w-full my-1 p-5 bg-[#C2EFD4]'>
            <img src="icon.png" alt="" />
            <h2 className='text-[22px] text-[#224F34] font-medium py-4'>{name}</h2>
            <p className='text-base font-medium text-[#6F6F6F]'>{feedback}</p>
        </div>
    )
}

export default FeedBack
