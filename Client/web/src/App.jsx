import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route , } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import SignIn from './Components/SignIn';
import About from './Components/About';
import SignUp from './Components/SignUp';
import Footer from './Components/Footer';
import Chest from './Components/Chest';
import Shoulder from './Components/Shoulder';
import Back from './Components/Back';
import Biceps from './Components/Biceps';
import ImageView from './Components/imageview.jsx';
import Workoutplan from './Components/Workoutplan.jsx';


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
        <Route path="/Shoulder" element={<Shoulder/>} />
        <Route path='/workoutplan' element={<Workoutplan/>}/>
  
        <Route path="/Back" element={<Back/>} />
        <Route path="/Biceps" element={<Biceps/>} />
      </Routes>
      <Footer /> 
    </Router>
  );
};

export default App;
