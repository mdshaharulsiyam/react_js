import { useEffect, useState } from "react";
import Product from "./Product";

export default function Products ({AddTocart}){
    const [product,setproduct]=useState([]);
    useEffect(()=>{
       const fetchData = async ()=>{
        const res = await fetch('data.json');
        let data = await res.json();
        setproduct(data)
       }
       fetchData()
    },[])
    return (
        <div className="flex flex-wrap">
        {
            product.map(product=> <Product key={product.id} AddTocart={AddTocart} Product={product}></Product>)
        }
        </div>
    )
}