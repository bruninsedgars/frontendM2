import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/signup">Signup</Link></li>
        <li><Link to="/pois">Points of Interest</Link></li>
        <li><Link to="/events">Events</Link></li>
        <li><Link to="/donate">Donate</Link></li>
        <li><Link to="/property-sale">Property Sale</Link></li>
        <li><Link to="/rules">Rules</Link></li>
        <li><Link to="/history">History</Link></li>
        <li><Link to="/gallery">Photo Gallery</Link></li>
        <li><Link to="/map">Map</Link></li>
      </ul>
    </nav>
  );
};

export default NavBar;


