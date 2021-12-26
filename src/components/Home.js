import React from 'react'
import { Link } from 'react-router-dom';
import Nav from './Nav'
import World from '../assets/world.svg'

const Home = (props) => {
    return (
        <div>
            <Nav cart={props.cart}/>
            <section className="home__container">
                <div className="home__container--left">
                    <h1 className="home__title">ECO-STORE</h1>
                    <p className="home__subtitle">The world's leading retailer of sustainably sourced products.</p>
                    <Link to="/products" className="home__button">SHOP NOW</Link>
                </div>
                <img src={World} alt="World" className="home__image"/>
            </section>
        </div>
    )
}

export default Home
