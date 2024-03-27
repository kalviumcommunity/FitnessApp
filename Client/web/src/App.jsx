import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Contact from './Components/Contact';
import SignIn from './Components/SignIn';
import About from './Components/About';
import SignUp from './Components/SignUp';

const App = () => {
  const[IsLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signin" element={<SignIn setIsLoggedIn={setIsLoggedIn}/>} />
        <Route path='/signup' element={<SignUp setIsLoggedIn={setIsLoggedIn}/>} />
      </Routes>
    </Router>
  );
};

export default App;
