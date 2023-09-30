import React from 'react'
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Home from './Components/Home/Home';

import SignUp from './Components/SignUp.jsx/SignUp';
import Login from './Components/Login/LOgin';
import Profile from './Components/Profile/Profile';
import SecretRout from './Components/SecretRout/SecretRout';

const Rouets = () => {
    const router = createBrowserRouter([
        {
          path: "/",
          element:<Home></Home>,
          children:[
            {
                path:"/login",
                element: <Login></Login>
            },
            {
                path:"/signup",
                element:<SignUp></SignUp>
            },
            {
                path:"/profile",
                element:<SecretRout><Profile></Profile></SecretRout>
            }
          ]
        },
      ]);
  return <RouterProvider router={router}></RouterProvider>
}

export default Rouets
