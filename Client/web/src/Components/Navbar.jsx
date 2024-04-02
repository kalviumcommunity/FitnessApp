import React from 'react';
import { Link } from 'react-router-dom'; 
import "./Navbar.css";
import logo from "../assets/download-removebg-preview.png"

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
            </ul>
        </nav>
    );
}

export default Navbar;
