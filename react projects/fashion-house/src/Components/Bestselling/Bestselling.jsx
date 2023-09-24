import React, { useEffect, useState } from 'react'
import BestSelingProductCart from './BestSelingProductCart';

const Bestselling = () => {
  const [btnContent,setbtnContent]=useState('show All')
    const [bestsellingProductData,setBestsellingProductData] = useState([]);
    const [sliceDetails,setsliceDetails] = useState(3)
    useEffect(()=>{
       const fetchsellingData = async () =>{
        const res = await fetch('BestSelling.json');
        let data = await res.json();
        setBestsellingProductData(data)
       }
       fetchsellingData()
    },[])
    const handelShowAll =()=>{
      if(btnContent === 'show All'){
        setsliceDetails(bestsellingProductData.length);
        setbtnContent('show Less')
      }else{
        setsliceDetails(3);
        setbtnContent('show All')
      }
      
    }
  return (
    <div className='container mx-auto py-6 box-border my-11 text-center text-[#224F34] font-medium'>
      <h2 className='text-5xl'>Best selling</h2>
      <p className='text-xl py-8'>Get in on the trend with our curated selection of best-selling styles.</p>
      <div className='flex flex-wrap justify-start gap-[1.25%] items-center'>
        {
            bestsellingProductData.slice(0,sliceDetails).map(products=> <BestSelingProductCart key={products.id} products={products}></BestSelingProductCart>)
        }
      </div>
      <button onClick={handelShowAll} className='btn text-center block mx-auto rounded-none px-10 border-2 border-[#224F34] text-[#224F34] my-4'>{btnContent}</button>
    </div>
  )
}

export default Bestselling
