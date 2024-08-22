import React from 'react';
import { useNavigate } from 'react-router-dom';
import videoBg from '../assets/Fitness Cinematic Video _ Sony A7siii _ Gym Video-(1080p).mp4'

function LandingPage() {
  const navigate = useNavigate();

  const handleSignIn = () => {
    navigate('/signin');
  };

  const handleSignUp = () => {
    navigate('/signup');
  };

  return (
    <div style={styles.goFitApp}>
      <div style={styles.banner}>
        <div style={styles.overlay}></div>
        <video style={styles.videobg} src={videoBg} autoPlay loop muted/>
        <div style={styles.content}>
      <nav style={styles.goFitNavbar}>
        <h1 style={styles.goFitLogo}>Go-Fit</h1>
        <div style={styles.nav}>
          <h3>ABOUT US</h3>
          <h3>CONTACT US</h3>
        </div>
        <div>
          <button style={styles.goFitButton} onClick={handleSignIn}>Sign In</button>
          <button style={styles.goFitButton} onClick={handleSignUp}>Sign Up</button>
        </div>
      </nav>
      <div style={styles.goFitHero}>
        <div style={styles.goFitOverlay}></div>
        <div style={styles.goFitWelcomeText}>
          <h1 style={{color:'white'}}>Welcome to Go-Fit</h1>
          <p style={{color:'white'}}>Your journey to a healthier life starts here</p>
        </div>
        <video style={styles.goFitVideo} autoPlay loop muted>
          <source src="https://example.com/your-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      </div>
      </div>
      
      
    </div>
  );
}

const styles = {
  overlay:{
    position:'absolute',
    top:'0',
    left:'0',
    width:'100%',
    height:'100%',
    backgroundColor:'rgba(0,0,0,0.4)'
  },
  nav:{
    marginLeft:'6vw',
    display:'flex',
    width:'31vw',
    alignItems:'center',
    justifyContent:'space-between',
    color:'#fff'
  },
  banner:{
    height:'100vh',
    width:'100%',
  },
  content:{
    position:'absolute',
    width:'100%',
    height:'100%',
    top:'0',
    color:'white',
  },
  videobg:{
    height:'100%',
    width:'100%',
    objectFit:'cover'
  },
  goFitApp: {
    fontFamily: 'Arial, sans-serif',
  },
  goFitNavbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1rem 2rem', // Green color scheme
    color: '#fff',
  },
  goFitLogo: {
    fontSize: '1.5rem',
  },
  goFitButton: {
    margin: '0 0.5rem',
    padding: '0.5rem 1rem',
    fontSize: '1rem',
    color: '#333',
    backgroundColor: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  goFitHero: {
    position: 'relative',
    height: '70vh',// Dark background for hero section
    color: '#fff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    overflow: 'hidden',
  },
  goFitOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
  },
  goFitWelcomeText: {
    zIndex: 1,
    textAlign: 'center',
        


  },
  goFitVideo: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    position: 'absolute',
    top: 0,
    left: 0,
  },
  goFitContent: {
    padding: '2rem',
    textAlign: 'center',
  },
  goFitSection: {
    margin: '2rem 0',
  },
  goFitImage: {
    width: '100%',
    maxWidth: '600px',
    borderRadius: '10px',
    marginTop: '1rem',
  },
  goFitQuote: {
    marginTop: '2rem',
    fontSize: '1.5rem',
    fontStyle: 'italic',
  },
  goFitFooter: {
    padding: '1rem',
    backgroundColor: '#4CAF50', // Green color scheme for footer
    color: '#fff',
    textAlign: 'center',
  },
};

export default LandingPage;
