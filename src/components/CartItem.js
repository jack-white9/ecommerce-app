import React from 'react'

const CartItem = (props) => {  
    const removeItem = (id) => {
        props.setCart(props.cart.filter(item => {
            return item.id !== id // stuck here - this removes ALL items with matching id, not just the one specific item to be removed
        }))
    }

    return (
        <section className="cart__item--container">
            <section className="cart__item--information">
                <img src={props.image} alt={props.title} className="cart__item--image" />
                <section className="cart__item--details">
                    <p className="cart__item--name">{props.title}</p>
                    <button onClick={() => removeItem(props.id)} className="cart__item--remove">Remove</button>
                </section>
            </section>
            <p className="cart__item--price">${props.price.toFixed(2)}</p>
        </section>
    )
}

export default CartItem
