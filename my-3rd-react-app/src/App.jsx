import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Products from './products'
import Countrys from './Countrys'

function App() {
  const [valueP, setValueP] = useState(false)
  const [valueC, setValueC] = useState(false)
function showproductData() {
  setValueP(!valueP)
}
function showCountryData() {
  setValueC(!valueC)
}
  return (
    <>
      <button className='m-4 btn' onClick={showproductData}>show products data</button>
      <button className='m-4 btn' onClick={showCountryData}>show country data</button>
      {
        valueP && <Products></Products>
      }
      {
        valueC && <Countrys></Countrys>
      }
    </>
  )
}

export default App
