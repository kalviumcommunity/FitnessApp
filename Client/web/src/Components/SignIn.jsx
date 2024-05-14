import React, { useState } from 'react';
import { Link , useNavigate } from 'react-router-dom';
import './SignIn.css'; 
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import googleimg from "../assets/google.png"
import auth from './Firebase.config'



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
        setCookie('name',formData.username,365)
        if (!formData.username || !formData.password) {
            setError('Please enter both username and password.');
            return;
        }
        setError('');
        axios.post('http://localhost:3000/login',{
            name:formData.username,
            password:formData.password
        }).then((response)=>{
        setCookie('name',formData.username,365)
        console.log('Signing up...');
        console.log(formData); 
        setIsLoggedIn(true);
        Navigate("/");
  }).catch((error)=>{console.error(error)});
    }
    const google = async (e) => {
        const provider = new GoogleAuthProvider();
        function setCookie(name, value, daysToExpire) {
          let date = new Date();
          date.setTime(date.getTime() + daysToExpire * 24 * 60 * 60 * 1000);
          document.cookie = name + '=' + value + ';expires=' + date.toUTCString() + ';path=/';
      }
        try {
          const result = await signInWithPopup(auth, provider);
          console.log(result);
          setCookie('logedin',true,365)
          setCookie("username",result.user.displayName,365);
          setCookie('token', result.user.accessToken,365);
          setIsLoggedIn(true);
          Navigate('/'); 
        } catch (error) {
          console.error(error.message);
        }
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
            <div>
            <img className='g_icon' src={googleimg} onClick={google} alt="google icon" />
            </div>
            <p className="sign-up-link">Don't have an account? <Link to="/signup">Sign Up</Link></p>
        </div>
    );
}

export default SignIn;
