import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home';
import ErrorPage from './components/ErrorPage';
import About from './components/About/About';
import Foods from './components/Foods/Foods';
import Items from './components/Items/Items';
import PostDetails from './components/PostDetails/PostDetails';
function App() {
  const router = createBrowserRouter([
    {
      path:"/",
      element:<Home></Home>,
      errorElement:<ErrorPage></ErrorPage>,
      children:[
        {
          path:"/About",
          element: <About></About>,
        },
        {
          path:"/Foods",
          loader: () => fetch('https://www.themealdb.com/api/json/v1/1/categories.php'),
          element:<Foods></Foods>,
          children:[
            {
              path:"/Foods/categoryItems/:categoryID",
              loader : ({params})=>  fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${params.categoryID}`),
              element :<Items></Items>
            },
          ]
          
        },
        {
          path:"/itemDetailse/:itemId",
          loader:({params})=>  fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.itemId}`),
          // loader:({params})=>  fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=52874`),
          element:<PostDetails></PostDetails>,
        }
      ]
    }
  ]);

  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App
