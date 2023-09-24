import React, { useEffect, useState } from 'react'
import Cloths from './Cloths';

const DesignerClothes = () => {
    const [designerCloths,setdesignerCloths] = useState([]);
    useEffect(()=>{
        const fetchdesignerClothsData = async ()=>{
            const res = await fetch('desinerCloths.json');
            let data = await res.json()
            setdesignerCloths(data)
        }
        fetchdesignerClothsData()
    },[])
  return (
    <div className='container mx-auto text-center my-14'>
      <h2 className='text-[#224F34] text-5xl font-medium'>Designer Clothes For You</h2>
      <p className='text-xl py-12 text-[#224F34]'>mmerse yourself in the world of luxury fashion with our meticulously crafted designer clothes!</p>
      <div className='flex flex-wrap justify-start gap-[1.25%] items-start'>
        {
            designerCloths.map(cloths => <Cloths key={cloths.id} cloths={cloths}></Cloths>)
        }
      </div>
    </div>
  )
}

export default DesignerClothes
