import React, { useState, useEffect } from 'react'
import Product from './Product'
import Nav from './Nav'

const Products = (props) => {
    const [productTiles, setProductTiles] = useState(null)

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then(json => props.setProducts(json))
      }, [])
    
      useEffect(() => {
        console.log(props.products)
        if (props.products) {
          setProductTiles(props.products.map((product) => {
            return (
              <Product 
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
        )}
      }, [props.products])
    
      return (
        <div className="products__container">
            <Nav cart={props.cart} />
            <h1 className="products__header">OUR PRODUCTS</h1>
            <h2 className="products__loading">{props.products ? null : 'Loading...'}</h2>
            <section className="products__grid">
                {productTiles}
            </section>
        </div>
      );
}

export default Products
