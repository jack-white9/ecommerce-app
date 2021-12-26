import React from 'react'

const CartItem = (props) => {  
    const removeItem = (id) => {
        props.setCart(props.cart.filter(item => {
            return item.id !== id // stuck here - this removes ALL items with matching id, not just the one specific item to be removed
        }))
    }

    return (
        <section className="cart__item--container">
            <img src={props.image} alt={props.title} className="cart__item--image" />
            <section className="cart__item--details">
                <p>{props.title}</p>
                <p>${props.price}</p>
            </section>
            <button onClick={() => removeItem(props.id)}>Remove</button>
        </section>
    )
}

export default CartItem
