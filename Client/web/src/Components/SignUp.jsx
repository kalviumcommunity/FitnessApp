import React, { useState } from 'react';
import { Link , useNavigate } from 'react-router-dom';
import "./SignUp.css"

const SignUp = ({setIsLoggedIn}) => {
  const [username, setusername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const Navigate = useNavigate()
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
  const handleSignUp = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3000/login',{
                name:username,
                password:password
            }).then((response)=>{setCookie('name',username,365)
            console.log('Signing up...');
            setIsLoggedIn(true);
            Navigate("/")
      }).catch((error)=>{console.error(error)});
    
  };

  return (
    <div className="signup-container">
      <h2 className="signup-title">Sign Up</h2>
      <form onSubmit={handleSignUp}>
        <div className="signup-form-group">
          <label className="signup-label" htmlFor="username">Username:</label>
          <input
            type="username"
            className="signup-input"
            id="username"
            value={username}
            onChange={(e) => setusername(e.target.value)}
            required
          />
        </div>
        <div className="signup-form-group">
          <label className="signup-label" htmlFor="password">Password:</label>
          <input
            type="password"
            className="signup-input"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="signup-form-group">
          <label className="signup-label" htmlFor="confirmPassword">Confirm Password:</label>
          <input
            type="password"
            className="signup-input"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="signup-submit">Sign Up</button>
      </form>
      <div className="signup-message">
        <p>Already have an account? <Link className="signup-link" to="/signin">Sign In</Link></p>
      </div>
    </div>
  );
};

export default SignUp