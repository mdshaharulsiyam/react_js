import React from 'react'
import { Link } from 'react-router-dom';

const FoodItem = ({food}) => {
    // console.log(food)
    const {strMeal,strMealThumb,idMeal}= food;
  return (
    <div>
        <div className="w-80 bg-base-100 shadow-xl p-7 box-border rounded-md">
        <figure><img src={strMealThumb} alt="" /></figure>
        <div className="">
            <h2 className="text-xl font-bold py-4">{strMeal} !!</h2>
           <div className='flex justify-end'>
           {
                <Link to={`/itemDetailse/${idMeal}`}><button className="bg-[#FED7AA] text-black">Border now</button></Link>
            }
           </div>
        </div>
        </div>
    </div>
  )
}

export default FoodItem
