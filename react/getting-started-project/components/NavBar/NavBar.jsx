import React from "react";
import "./navbar.css";

const NavBar = () => {
  return (
    <div className="navbar">
      <img src="http://placekitten.com/g/50/50" alt="logo" className="logo" />
      <ul className="links">
        <li className="link">About</li>
        <li className="link">Experience</li>
        <li className="link">Contact</li>
      </ul>
    </div>
  );
};

export default NavBar;
