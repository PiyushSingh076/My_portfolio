import React from "react";
import "./Navbar.css";

function Navbar({ setCurrentPage }) {
  return (
    <nav className="navbar">
      <div className="logo">Piyush Singh</div>
      <ul className="nav-links">
        <li onClick={() => setCurrentPage("home")}>Home</li>
        <li onClick={() => setCurrentPage("about")}>About</li>
        <li onClick={() => setCurrentPage("skills")}>Skills</li>
        <li onClick={() => setCurrentPage("projects")}>Projects</li>
        <li onClick={() => setCurrentPage("contact")}>Contact Me</li>
      </ul>
    </nav>
  );
}

export default Navbar;
