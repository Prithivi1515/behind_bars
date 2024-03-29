import React from 'react';
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar navbar-dark bg-dark">
    <ul className="navbar-nav">
      <li className="nav-item" >
        <Link to="/home" className="nav-link">Home</Link>
      </li>
      <li className="nav-item">
        <Link to="/about" className="nav-link">Doctor</Link>
      </li>
      <li className="nav-item">
        <Link to="/about" className="nav-link">Training</Link>
      </li>
      <li className="nav-item">
        <Link to="/about" className="nav-link">Courses</Link>
      </li>
      <li className="nav-item">
        <Link to="/about" className="nav-link">Profile</Link>
      </li>
      <li className="nav-item">
        <Link to="/about" className="nav-link">Settings</Link>
      </li>
    </ul>
  </nav>
  );
};

export default NavBar;
