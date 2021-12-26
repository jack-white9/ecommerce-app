import React from 'react'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Nav = (props) => {
    return (
        <nav>
            <ul className="navbar">
                <Link to="/" className="navbar__logo">Eco-Store</Link>
                <div className="navbar__links">
                    <li><a href="/" className="navbar__links--link navbar__home">Home</a></li>
                    <li><a href="/products" className="navbar__links--link navbar__products">Products</a></li>
                    <li><a href="/cart" className="navbar__links--link"><FontAwesomeIcon icon={faShoppingCart}/>&nbsp;({props.cart ? props.cart.length : 0})</a></li>
                </div>
            </ul>
        </nav>
    )
}

export default Nav
