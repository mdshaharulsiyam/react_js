import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Simpleform from './Simpleform'
import CustomHoocTest from './CustomHoocTest'
import Form2 from './Form2'
import Test from './Test'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     {/* <Simpleform></Simpleform> */}
     {/* <Form2></Form2> */}
     {/* <CustomHoocTest></CustomHoocTest> */}
     <Test></Test>
    </>
  )
}

export default App
