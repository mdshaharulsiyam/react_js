import React from 'react'
import { useLoaderData, useNavigation } from 'react-router-dom'
import FoodItem from './FoodItem';

const Items = () => {
    const navigation = useNavigation();
    const foodData = useLoaderData();
    const fooddata =  foodData.meals;
  return (
    <>
     {
      navigation.state === "loading" ? <p className='text-center font-bold text-lg my-8'>loading pleace wait.....</p> :<div className='flex flex-wrap justify-between items-center mx-auto container'>
        { fooddata.map(food=> <FoodItem key={food.idMeal} food = {food}></FoodItem>) } 
        </div>
     }
   
    </>
  )
}

export default Items
