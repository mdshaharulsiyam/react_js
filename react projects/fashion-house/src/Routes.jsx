import React from 'react'
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Home from './Components/Home/Home';
import Shop from './Components/Shop/Shop';
import Features from './Components/Features/Features';
import Contact from './Components/Contact/Contact';
import Root from './Components/Root';
import Error from './Error';
const Routes = () => {
    const router = createBrowserRouter([
        {
          path: "/",
          element:<Root></Root>,
          errorElement:<Error></Error>,
          children:[
            {
              path: "/",
              element:<Home></Home>,
            },
            {
                path:"/Shop",
                element:<Shop></Shop>
            },
            {
                path:"/Features",
                element:<Features></Features>
            },
            {
                path:"/Contact",
                element:<Contact></Contact>
            }
          ]
        },
      ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default Routes
