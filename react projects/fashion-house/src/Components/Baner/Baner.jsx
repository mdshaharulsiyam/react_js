import React, { useEffect, useState } from 'react'
import BanerContent from './BanerContent'

const Baner = () => {
    const [banerData,setBanerData] = useState([])
    useEffect(()=>{
       const  fetchBanerData = async ()=>{
        const res = await fetch('baner.json');
        let data = await res.json();
        setBanerData(data)
       }
       fetchBanerData()
    },[])
    return (
        <div className='container mx-auto'>
            {
                banerData.map(data=> <BanerContent key={data.id} data={data}></BanerContent>)
            }
        </div>
    )
}

export default Baner
