import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Products from './Products'
import Cart from './Cart'

function App() {
  const [cart, setCart] = useState([])
  let totalMoneyIhacve = 50;
  const [remainingprice, setPrice] = useState(totalMoneyIhacve)
function AddTocart(Product) {
    let price = Product.price
    let newRemaining = remainingprice - price;
    const newCartitem = [...cart,Product]
    const alreadyhave = cart.find(cart=> cart.name == Product.name);  
    if (newRemaining>0 && !alreadyhave) {
      setPrice(newRemaining)
      alreadyhave?setCart(cart):setCart(newCartitem);
    }else{
      alert("you don't have enugh money to buy")
    }
}
  return (
    <>
      <div className='flex'>
      <Products AddTocart={AddTocart}></Products>
      <Cart totalMoneyIhacve={totalMoneyIhacve} remainingprice={remainingprice} cart={cart}></Cart>
      </div>
    </>
  )
}

export default App
