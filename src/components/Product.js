import React from 'react'

const Product = (props) => {
    return (
        <figure className="products__tile">
            <img 
              src={props.image} 
              alt={props.title}
              className="products__tile--image"
            />
            <p className="products__tile--title">{props.title}</p>
            <p>${props.price}</p>
            <button>Add to cart</button>
        </figure>
    )
}

export default Product
