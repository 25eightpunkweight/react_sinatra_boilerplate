import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ProductList from './components/ProductList'
import CartDiv from './components/CartDiv'
import { CartProvider } from './contexts/CartContext';



function App() {
  const [count, setCount] = useState(0)

  return (
    <CartProvider>
      <div className="App">
        <div className="centered-box">
          <h1>Cash Register</h1>
          <p>Click on a Product to add to your cart!</p>
          <p>Click on an Item on your cart to remove one item from your cart!</p>
          <div className="horizontal-container">
            <ProductList/>
            <CartDiv/>
          </div>
        </div>
      </div>
    </CartProvider>
  )
}

export default App
