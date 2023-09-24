import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home';
import About from './components/About';
import Users from './components/Users';
import UserDetails from './components/UserDetails';
import ErrorPage from './components/ErrorPage';
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element:<Home></Home>,
      errorElement: <ErrorPage></ErrorPage>,
      children:[
        {
          path: "/about",
          element: <About></About>,
        },
        {
          path:"/users",
          loader: () => fetch('https://jsonplaceholder.typicode.com/users'),
          element: <Users></Users>,
        },
        {
          path:"/userdetails/:userid",
          loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/users/${params.userid}`),
          element: <UserDetails></UserDetails>,
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

export default App
