import React, { useEffect, useState } from 'react'
import ExclusiveItemCart from './ExclusiveItemCart'
const Exclusive = () => {
    const [ExclusiveItem,setExclusiveItem] = useState([])
    useEffect(()=>{
        const fetchExclusiveData = async ()=>{
            const res = await fetch('exqlusiveOffer.json');
            let data = await res.json()
            setExclusiveItem(data)
        }
        fetchExclusiveData()
    },[])
  return (
    <div>
      {
        ExclusiveItem.map(item=> <ExclusiveItemCart key={item.id} item={item}></ExclusiveItemCart>)
      }
    </div>
  )
}

export default Exclusive
