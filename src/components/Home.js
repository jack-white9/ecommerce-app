import React from 'react'
import { Link } from 'react-router-dom';
import Nav from './Nav'
import World from '../assets/world.svg'

const Home = () => {
    return (
        <div>
            <Nav />
            <section className="home__container">
                <h1 className="home__title">ECO-STORE</h1>
                <p className="home__subtitle">The world's leading retailer of sustainably sourced products.</p>
                <Link to="/products" className="home__button">SHOP NOW</Link>
                <img src={World} alt="World"/>
            </section>
        </div>
    )
}

export default Home
