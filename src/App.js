import React, { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home'
import Products from './components/Products'
import Cart from './components/Cart'
import './App.css'

const App = () => {
  const [state, setState] = useState({
    cart: [],
    products: ''
  })

  useEffect(() => console.log(state), [state])

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/products' element={<Products state={state} setState={setState}/>}/>
        <Route path='/cart' element={<Cart state={state} setState={setState}/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
