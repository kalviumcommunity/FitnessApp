import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getAuth, signOut } from 'firebase/auth';
import "./Navbar.css";
import fitness from "../assets/fitness-png.png";

const Navbar = () => {
    const auth = getAuth();
    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            await signOut(auth);
            navigate('/'); // Redirect to signin page after logout
        } catch (error) {
            console.error('Error signing out:', error.message);
            // Handle logout error if needed
        }
    };

    return (
        <nav className="navbar">
            <div className="logo-container">
                <img src={fitness} alt="Logo" className="logo" />
            </div>
            <ul className="nav-links">
                <li><Link to="/home"><button type='button'>Home</button></Link></li>
                <li><Link to="/about"><button type='button'>About</button></Link></li>
                <li><Link to="/faq"><button type='button'>FAQ</button></Link></li>
                <li><Link to="/event"><button type='button'>Event</button></Link></li>
                <li><Link to="/Diet"><button type='button'>Diet plan</button></Link></li>
                <li><a href='https://gemini.google.com/app' target='_blank'><button type='button'>CHATBOT</button></a></li>
            </ul>
            <div className='button'>
                <button onClick={handleLogout}>Logout</button>
            </div>
        </nav>
    );
}

export default Navbar;
