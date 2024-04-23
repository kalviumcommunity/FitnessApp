import React from 'react';
import { Link } from 'react-router-dom'; 
import "./Navbar.css";
import logo from "../assets/bg2.png"

const Navbar = () => {
    return (
        <nav>
            <div className="logo-container">
                <img src={logo} alt="Logo" className="logo" />
            </div>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/signin">Sign In</Link></li>
                <li><Link to="/favourite">Favorites</Link></li> 
            </ul>
        <div className='button'>
        <Link to ="/Membership">
            <button>MEMBERSHIP</button>
    </Link>
        </div>
        </nav>
    );
}

export default Navbar;
