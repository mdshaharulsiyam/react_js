import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Countrys from './components/component/countrys'
function App() {
  const [value,setValue] = useState(false)
  const showData = ()=>{
    setValue(!value)
  }
  return (
    <>
    <h2 className='text-6xl text-center'>world tour</h2>
    {/* <Countrys></Countrys> */}
    <button onClick={showData}>{value?'hide data':'showData'}</button>
    <div>
    {
      value?<Countrys></Countrys>:'no data found'
    }
    </div>
    </>
  )
}

export default App
