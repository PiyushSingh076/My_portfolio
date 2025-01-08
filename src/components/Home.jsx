import React from 'react';
import './Home.css';
import profileImage from './media/image.png'; 

function Home() {
  return (
    <div className="home">
      <div className="home-container">
        <div className="profile-image-container">
          <img src={profileImage} alt="Profile" className="profile-image" />
        </div>
        <div className="home-content">
          <h1>I'm<span className="yellow"> Michael Kasprowikz</span></h1> 
          <h2>Fullstack Web Developer</h2>
          <div className="home-buttons">
            <button className="hire-me-btn">Hire Me</button>
            <button className="my-works-btn">My Works</button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Home;