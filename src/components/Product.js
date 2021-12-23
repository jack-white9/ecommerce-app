import React from 'react'

const Product = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            <img src={props.image} alt={props.title}/>
            <p>{props.title}</p>
            <p>{props.price}</p>
            <button>Add to cart</button>
        </div>
    )
}

export default Product
