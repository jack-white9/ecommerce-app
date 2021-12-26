import React, { useState, useEffect } from 'react'
import Nav from './Nav'
import CartItem from './CartItem'

const Cart = (props) => {
    const [cartItems, setCartItems] = useState(null)

    useEffect(() => {
        setCartItems(props.cart.map((product) => {
        return (
            <CartItem 
              key={product.id}
              cart={props.cart}
              setCart={props.setCart}
              product={product}
              id={product.id}
              image={product.image}
              title={product.title}
              price={product.price}
              description={product.description}
            />
        )
        })
    )}, [props.cart])

    return (
        <div>
            <Nav />
            <section className="cart__container">
                {cartItems}
            </section>
        </div>
    )
}

export default Cart
