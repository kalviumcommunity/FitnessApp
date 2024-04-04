import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route , } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import SignIn from './Components/SignIn';
import About from './Components/About';
import SignUp from './Components/SignUp';
import Footer from './Components/Footer';
import Chest from './Components/Chest';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/signin" element={<SignIn setIsLoggedIn={setIsLoggedIn} />} />
        <Route path='/signup' element={<SignUp setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/chest" element={<Chest/>} />
      </Routes>
      <Footer /> 
    </Router>
  );
};

export default App;
