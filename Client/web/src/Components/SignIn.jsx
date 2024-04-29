import React, { useState } from 'react';
import { Link , useNavigate } from 'react-router-dom';
import './SignIn.css'; 

const SignIn = ({setIsLoggedIn}) => {
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });
    const [error, setError] = useState('');
    const Navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    }
    function getCookie(name) {
        let cookieArray = document.cookie.split('; ');
        let cookie = cookieArray.find((row) => row.startsWith(name + '='));
        return cookie ? cookie.split('=')[1] : null;
    }
    function setCookie(name, value, daysToExpire) {
        let date = new Date();
        date.setTime(date.getTime() + daysToExpire * 24 * 60 * 60 * 1000);
        document.cookie = name + '=' + value + ';expires=' + date.toUTCString() + ';path=/';
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setCookie('name',username,365)
        if (!formData.username || !formData.password) {
            setError('Please enter both username and password.');
            return;
        }
        
        
        setError('');

        console.log(formData); 
        setIsLoggedIn(true);
        Navigate("/");
    }

    return (
        <div className="sign-in-container">
            <h2 className="sign-in-title">Sign In</h2>
            {error && <p className="error-message">{error}</p>}
            <form className="sign-in-form" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="username">Username:</label>
                    <input type="text" id="username" name="username" value={formData.username} onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} />
                </div>
                <button type="submit">Sign In</button>
            </form>
            <p className="sign-up-link">Don't have an account? <Link to="/signup">Sign Up</Link></p>
        </div>
    );
}

export default SignIn;
