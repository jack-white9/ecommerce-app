import React, { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
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

  useEffect(() => console.log(cart), [cart])
  useEffect(() => console.log(products), [products])

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/products' element={<Products 
                                            cart={cart} 
                                            setCart={setCart}
                                            products={products}
                                            setProducts={setProducts}
                                            />}/>
        <Route path='/cart' element={<Cart 
                                        cart={cart} 
                                        setCart={setCart}
                                        products={products}
                                        setProducts={setProducts}/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
