import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Products from './components/Products'
import Home from './components/Home'
import './App.css'

const App = () => {
  const [state, setState] = useState({
    cart: 'Shopping Cart',
    products: ''
  })

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/products' element={<Products state={state} setState={setState}/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
