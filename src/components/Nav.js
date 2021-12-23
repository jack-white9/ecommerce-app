const Nav = () => {
    return (
        <nav>
            <ul className="navbar">
                <li className="navbar__logo">My Store</li>
                <div className="navbar__links">
                    <li><a href="/" className="navbar__links--link">Home</a></li>
                    <li><a href="/products" className="navbar__links--link">Products</a></li>
                    <li><a href="/products" className="navbar__links--link">Cart</a></li>
                </div>
            </ul>
        </nav>
    )
}

export default Nav
