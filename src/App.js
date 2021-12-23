import React, { useState } from 'react'
import Products from './components/Products'

const App = () => {
  const [state, setState] = useState({
    cart: 'Shopping Cart',
    products: ''
  })

  return (
    <Products state={state} setState={setState}/>
  )
}

export default App;
