import React from 'react';
import logo from '../../images/logo.png'
import './Header.css'
const Header = () => {
    return (
        <div className ="Header">
           <img  src={logo} alt="" />
           <nav className = "nav">
           <a href="/shop">Shop</a>
           <a href="/review">Review</a>
           <a href="/manage">Manage Inventory here</a>
           </nav>
            
        </div>
    );
};

export default Header;