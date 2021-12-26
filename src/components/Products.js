import React, { useState, useEffect } from 'react'
import Product from './Product'
import Nav from './Nav'

const Products = (props) => {
    const [productTiles,  setProductTiles] = useState(null)

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then(json => props.setState({...props.state, products: json}))
        .then(() => console.log(props.state))
      }, [])
    
      useEffect(() => {
        if (props.state.products) {
          setProductTiles(props.state.products.map((product) => {
            return (
              <Product 
                state={props.state}
                setState={props.setState}
                product={product}
                id={product.id}
                image={product.image}
                title={product.title}
                price={product.price}
                description={product.description}
              />
            )
          })
        )}
      }, [props.state.products])
    
    
      return (
        <div>
            <Nav />
            <section className="products__grid">
                {productTiles}
            </section>
        </div>
      );
}

export default Products
