import React, { useEffect, useState } from 'react'
import FeedBack from './FeedBack';

const FeedbackCorner = () => {
    const [feedBacks,setfeedBack] = useState([]);
    useEffect(()=>{
        const fetchfeedBackData = async ()=>{
            const res = await fetch('feedBacks.json');
            let data = await res.json()
            setfeedBack(data)
        }
        fetchfeedBackData()
    },[])
  return (
    <div className='container mx-auto mb-20'>
      <h2 className='text-5xl text-[#224F34] text-center font-medium'>Feedback Corner</h2>
      <div className='flex flex-wrap md:gap-[.6%] sm:gap-[1.25%] mt-16'>
        {
            feedBacks.map(feedbacks => <FeedBack key={feedbacks.username} feedbacks={feedbacks}></FeedBack>)
        }
      </div>
    </div>
  )
}

export default FeedbackCorner
