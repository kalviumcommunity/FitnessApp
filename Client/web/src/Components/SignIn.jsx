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

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (!formData.username || !formData.password) {
            setError('Please enter both username and password.');
            return;
        }
        
        // If both username and password are provided, clear any existing error message.
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
