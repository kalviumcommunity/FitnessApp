import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
               
                <div className="footer-section">
                    <h3 className="footer-title">Contact</h3>
                    <p>No.1, 2nd Floor, 3rd Main Road, Thiruthani Nagar, Old Pallavaram, Chennai - 600117 (Above London Bakery)</p>
                    <p>Email: kiruthik@gmail.com</p>
                    <p>Phone: +91 9443541516</p>
                </div>
                <div className="footer-section">
                    <h3 className="footer-title">Quick Links</h3>
                    <ul className="footer-links">
                        <li><Link className="footer-link" to="/customer">Feedback</Link></li>
                        <li><Link className="footer-link" to="/conditions">Terms & Conditions</Link></li>
                        <li><Link className="footer-link" to="/privacy">Privacy Policy</Link></li>
                    </ul>
                </div>
                <div className="footer-section">
                    <h3 className="footer-title">Follow Us</h3>
                    <ul className="footer-social">
                        <li>
                            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="footer-social-link">
                                <FaFacebookF size={20} />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="footer-social-link">
                                <FaTwitter size={20} />
                            </a>
                        </li>
                        <li>
                            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="footer-social-link">
                                <FaInstagram size={20} />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="footer-copyright">
                <p>&copy; {new Date().getFullYear()} GoFit. All rights reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;
