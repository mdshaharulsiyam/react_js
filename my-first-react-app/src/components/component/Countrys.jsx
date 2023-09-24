import { useEffect, useState } from "react";
import Country from "./country";
export default function Countrys(){
    const [countrys,setcountry]=useState([]);
    const [visitedcountry,setvisitedcountry]=useState([]);
    function Visited(country) {
        let alreadyVisit = visitedcountry.find(visit=> visit.cca3 === country.cca3); 
        let newNisitedcountry = [...visitedcountry,country];
        alreadyVisit?setvisitedcountry(visitedcountry):setvisitedcountry(newNisitedcountry); 

    }
    function removeVisited(country) {
        let newNisitedcountry = visitedcountry.filter(visit=> visit.cca3 !== country.cca3); 
        console.log(newNisitedcountry)
        setvisitedcountry(newNisitedcountry);

    }
    useEffect(()=>{
    const fetchdata = async ()=>{
        const res = await fetch('https://restcountries.com/v3.1/all')
        let contries = await res.json()
        setcountry(contries)
        }
        fetchdata()
    },[])
    return (
        <>
            <h2 className="text-2xl">my visited country</h2>
            <div className="flex  items-center w-full justify-start flex-wrap">
                {
                    visitedcountry.map((flag,index) => <img className="h-[70px] my-4 mx-5" key={index} src={flag.flags.png}></img>)
                }
            </div>
            <h3 className="text-4xl my-10">all country in the whole world</h3>
            <div className="flex justify-between items-center w-full flex-wrap">
        {
            countrys.map((country,index)=><Country
            key={index}
            Visited ={Visited}
            removeVisited={removeVisited}
            country={country}></Country>)
        }
        </div>
        </>
    )
}
