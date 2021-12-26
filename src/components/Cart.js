import React, { useState, useEffect } from 'react'
import uniqid from 'uniqid'
import Nav from './Nav'
import CartItem from './CartItem'

const Cart = (props) => {
    const [cartItems, setCartItems] = useState(null)

    useEffect(() => {
        setCartItems(props.cart.map((product) => {
        return (
            <CartItem 
              key={uniqid()}
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

    const totalPrice = props.cart.reduce((total, item) => total + item.price, 0)

    return (
        <div>
            <Nav />
            <section className="cart__container">
                {cartItems}
                <p><strong>Total Price: </strong>${totalPrice}</p>
            </section>
        </div>
    )
}

export default Cart
