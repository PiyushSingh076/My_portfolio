import React from "react";
import "./About.css";
import profile_pic from "./media/imag.png";
import cv from "./media/Piyush_Resume.pdf"; // Adjust the path to your CV file

function About() {
  return (
    <div className="about">
      <div className="about-content">
        <img 
          src={profile_pic} 
          alt="Profile" 
          className="about-image" 
        />
        <div className="about-text">
          <h1>About Me</h1>
          <p>
            A passionate Full stack web and app developer with a strong drive for innovation. I enjoy tackling complex challenges and building robust, efficient solutions. I'm constantly learning and exploring new technologies, always seeking ways to improve my skills and contribute to the evolving tech landscape.
          </p>
          <ul>
            <li>Name: Piyush Singh</li>
            <li>Date of Birth: 04 November 2003</li>
            <li>Address: Aquamarine Hostel, Nit Trichy, Tiruchirapalli, Tamil Nadu</li>
            <li>Zip code: 620015</li>
            <li>Email: piyush1071singh@gmail.com</li>
            <li>Phone: +91-930745890</li>
          </ul>
          <a href={cv} download>
            <button className="download-btn">Download CV</button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default About;
