import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route , } from 'react-router-dom';
import{ToastContainer} from 'react-toastify';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import SignIn from './Components/SignIn';
import 'react-toastify/dist/ReactToastify.css'
import About from './Components/About';
import SignUp from './Components/SignUp';
import Footer from './Components/Footer';
import Chest from './Components/Chest';
import Shoulder from './Components/Shoulder';
import Back from './Components/Back';
import Biceps from './Components/Biceps';
import ImageView from './Components/imageview.jsx';
import Triceps from './Components/Triceps.jsx';
import Forearms from './Components/Forearms.jsx';
import Leg from './Components/Leg.jsx';
import Save from './Components/Save.jsx';
import Logout from './Components/Logout.jsx';
import Workoutplan from './Components/Workoutplan.jsx';
import Subscribe from './Components/Subscribe.jsx';
import Premium from './Components/premium.jsx';
import Platinum from './Components/Platinum.jsx';
import Instruction from './Components/Instruction.jsx';
import Faq from './Components/Faq.jsx';
import Event from './Components/Event.jsx';
import Eventform from './Components/Eventform.jsx';
import Crisp from './Components/Crisp.jsx';
import LandingPage from './Components/landing.jsx';
import Diet from './Components/Diet.jsx';
import AboutUs from './Components/Aboutus.jsx';
const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (<>
    <ToastContainer/>
    <Router>
     
      
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path="/Home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/signin" element={<SignIn/>} />
        <Route path='/signup' element={<SignUp/>} />
        <Route path="/chest" element={<Chest/>} />
        <Route path="/Shoulder" element={<Shoulder/>} />
        <Route path='/workoutplan' element={<Workoutplan/>}/>
        <Route path="/Back" element={<Back/>} />
        <Route path="/Biceps" element={<Biceps/>} />
        <Route path="/Triceps" element={<Triceps/>} />
        <Route path="/Forearms" element={<Forearms/>} />
        <Route path="/Leg" element={<Leg/>} />
        <Route path='/Save' element={<Save/>}/>
        <Route path='/Workoutplan'element={<Workoutplan/>}/>
        <Route path='/Subscribe'element={<Subscribe/>}/>
        <Route path='/Premium'element={<Premium/>}/>
        <Route path='/Platinum'element={<Platinum/>}/>
        <Route path='/Faq'element={<Faq/>}/>
        <Route path='/Crisp'element={<Crisp/>}/>
        <Route path='/Event'element={<Event/>}/>
        <Route path='/Instruction'element={<Instruction/>}/>
        <Route path='/Eventform'element={<Eventform/>}/>
        <Route path='/Diet'element={<Diet/>}/>
        <Route path='/Aboutus'element={<AboutUs/>}/>





      </Routes>
    
    </Router></>
  );
};

export default App;
