import React from 'react'

const CartItem = (props) => {
    return (
        <section className="cart__item--container">
            <img src={props.image} alt={props.title} className="cart__item--image" />
            <section className="cart__item--details">
                <p>{props.title}</p>
                <p>${props.price}</p>
            </section>
        </section>
    )
}

export default CartItem

/*
              key={product.id}
              cart={props.cart}
              setCart={props.setCart}
              product={product}
              id={product.id}
              image={product.image}
              title={product.title}
              price={product.price}
              description={product.description}
*/