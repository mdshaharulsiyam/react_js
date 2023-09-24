import { useEffect, useState } from "react";
import Country from "./country";
// import { AddtoLocalStorage } from "./utilites/Localstorage";
import { addItemTolocalstorage,getItemFromLocalStorage,removeItemFromLocalstorage} from "./addTolocalStorage";
export default function Countrys() {
    const [country,setCountry] = useState([]);
    const [cartItem,setCartitem] = useState([]);

    useEffect(()=>{
        const CountryData = async ()=>{
            const res = await fetch('country.json');
            const data = await res.json()
            setCountry(data)
        }
        CountryData()
    },[])
    useEffect(()=>{
        let savedata = []
        let storedCart = getItemFromLocalStorage()
        for (const countryname of storedCart) {
            let cart = country.find(item => item.country === countryname);
            if(cart){
                savedata.push(cart) ;
            }
        }
        console.log(savedata)
       setCartitem(savedata)
    },[country])
    function addItemToCart(contry) {
        const newcartItem = [...cartItem,contry]
      const alreadyHave = cartItem.find(item=> item === contry);
      alreadyHave?setCartitem(cartItem):setCartitem(newcartItem);
      addItemTolocalstorage(contry.country)
    }

    function removeItemFromCart(itemname){
        let newCartItem = cartItem.filter(item=> item.country !== itemname)
        removeItemFromLocalstorage(itemname)
        setCartitem(newCartItem)
    }
    return(
        <>
        <h2 className="py-4 text-2xl">visited country</h2>
        <div className="grid grid-cols-3 gap-7 my-6">
            {
            cartItem.map(cartItem => {
                return(
                    <div key={cartItem.country} className="card w-96 bg-orange-500 text-primary-content">
                    <div className="card-body">
                        <h2 className="card-title">country : {cartItem.country}</h2>
                        <p>capital: {cartItem.capital}</p>
                        <p>population : {cartItem.population}</p>
                        <p>area : {cartItem.area_sq_km} sq_km</p>
                        <p>currency : {cartItem.currency}</p>
                        <p>language : {cartItem.language}</p>
                        <div className="card-actions justify-end">
                            <button onClick={()=>removeItemFromCart(cartItem.country)} className="btn">remove</button>
                        </div>
                    </div>
                </div>
                )
            })
            }
        </div>
            <h2 className="py-4 text-2xl">all country</h2>
        <div className="grid grid-cols-3 gap-7">
        {
            country.map(country => <Country 
                key={country.country} 
                addItemToCart={addItemToCart} 
                countrys={country} ></Country>)
        }
        </div>
        </>
    )
} 