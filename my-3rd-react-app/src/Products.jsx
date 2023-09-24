import { useEffect, useState } from "react";
import Product from "./Product";
import { AddtoLocalStorage,getStroedItem,removeStroedItem } from "./utilites/Localstorage";

export default function Products() {
    const [products,setProdutc] = useState([]);
    const [cartItem,setItem] = useState([]);
    useEffect(()=>{
       const productsData = async() =>{
        const res = await fetch('products.json');
        let data = await res.json();
        setProdutc(data)

       }
       productsData()
    },[])
    useEffect(()=>{
        const savedDAta = []
        let storedCart = getStroedItem();
        for (const id of storedCart) {
          let localStorageitemget = products.find(item=> item.id === id)
          if(localStorageitemget){
            savedDAta.push(localStorageitemget)
          }
        }
        setItem(savedDAta)
    },[products])
    const addToCart= item =>{
        let alreadyHave = cartItem.find(cartItem => cartItem === item);
        let cartItems = [...cartItem,item];
        alreadyHave?setItem(cartItem):setItem(cartItems); 
        AddtoLocalStorage(item.id)
    }
    function removeFromCart(id) {
        let remainingcartitemAfterDelet = cartItem.filter(item=> item.id !== id);
        removeStroedItem(id)
        setItem(remainingcartitemAfterDelet)
    }
    return (
        <>
           <div className="flex flex-wrap justify-start items-center gap-3">
           {
                cartItem.map((item)=>{
                    return(
                        <div  key={item.id} className="border-2 border-gray-30 box-border p-2 w-[250px]">
                    <span>{item.name}</span><br />
                    <span>price : {item.price}</span>
                    <button onClick={()=>removeFromCart(item.id)}>remove</button>
                    </div>
                    )
                })
            }
           </div>
        <h2 className="text-2xl text-orange-200">total products data : {products.length}</h2>
        <div className="flex flex-wrap justify-start w-full">
        {
            products.map(item=> <Product key={item.id} item={item} addToCart={addToCart}></Product>)
        }
        </div>
        </>
    )
}