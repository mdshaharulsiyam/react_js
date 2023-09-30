import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import DefaultPage from './DefaultPage';
import Signup from './Signup';
import Home from './Home';
import Header from './Header';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element:<Header></Header>,
    },
    {
      path: "/login",
      element:<DefaultPage></DefaultPage>,
    },
    {
      path: "/signup",
      element:<Signup></Signup>,
    },
    {
      path: "/home",
      element:<Home></Home>,
    },
  ])
  return (
    <>
    <RouterProvider router={router} />
    </>
  )
}

export default App
