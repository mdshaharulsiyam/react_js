import React from 'react'
import { useLoaderData } from 'react-router-dom'

const PostDetails = () => {
   const post = useLoaderData();
   console.log(post)
   const destracturePost = post.meals
   console.log()
   const {strArea,strCategory,strInstructions,strMealThumb,strIngredient1,strIngredient2,strIngredient3,strIngredient4,strIngredient5,strIngredient6,strIngredient7,strIngredient8}=destracturePost[0];
//    console.log(destracturePost)
  return (
    <div className='mx-auto container'>
      {
              <div className="hero text-center">
                <div className='w-1/2 mx-auto py-5'>
                <img className='w-full' src={strMealThumb}  />
                </div>
              <div className="hero-overlay bg-opacity-60"></div>
              <div className="hero-content text-center text-neutral-content">
                  <div className="">
                  <h1 className="mb-5 text-5xl font-bold">{strCategory}</h1>
                  <h1 className="mb-3 text-base font-bold">{strArea}</h1>
                  <p className='text-center font-extrabold'>row metarials</p>
                  <ul className=' mx-auto w-1/2 text-center  text-lg font-semibold flex flex-wrap justify-start items-center gap-2'>
                    <li>* {strIngredient1}</li>
                    <li>* {strIngredient2}</li>
                    <li>* {strIngredient3}</li>
                    <li>* {strIngredient4}</li>
                    <li>* {strIngredient5}</li>
                    <li>* {strIngredient6}</li>
                    <li>* {strIngredient7}</li>
                    <li>* {strIngredient8}</li>
                  </ul>
                  <p className='text-center font-extrabold'>details</p>
                  <p className="mb-5">{strInstructions}</p>
                  </div>
              </div>
              </div>
      }
    </div>
  )
}

export default PostDetails
