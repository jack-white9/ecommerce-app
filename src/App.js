import React, { useState, useEffect } from 'react'
import { Routes, Route, BrowserRouter, HashRouter } from 'react-router-dom';
import Home from './components/Home'
import Products from './components/Products'
import Cart from './components/Cart'
import './App.css'

const App = () => {
  const [cart, setCart] = useState([])
  const [products, setProducts] = useState('')

  useEffect(() => {
    const retreiveCart = JSON.parse(localStorage.getItem('cart'))
    if (retreiveCart) {
      setCart(retreiveCart)
    }
  }, [])

  useEffect(() => {
    if (cart) {
      localStorage.setItem('cart', JSON.stringify(cart))
    }
  }, [cart])
  
  // <BrowserRouter> works fine locally, but HashRouter needed for deployment. Doesn't work rn.
  return (
    <BrowserRouter basename='/ecommerce-app'>
      <Routes>
        <Route exact path='/' element={<Home cart={cart}/>}/>
        <Route exact path='/products' element={<Products 
                                            cart={cart} 
                                            setCart={setCart}
                                            products={products}
                                            setProducts={setProducts}
                                            />}/>
        <Route exact path='/cart' element={<Cart 
                                        cart={cart} 
                                        setCart={setCart}
                                        products={products}
                                        setProducts={setProducts}/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
