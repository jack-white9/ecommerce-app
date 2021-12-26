import React from 'react'
import Nav from './Nav'

const Cart = (props) => {
    return (
        <div>
            <Nav />
            <p>{props.state.cart ? props.state.cart : 'NOTHING HERE'}</p>
        </div>
    )
}

export default Cart
