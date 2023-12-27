import React from 'react';
import './Nav.css'; // Create a CSS file for styling

const Hamburger = ({ isOpen, toggle }) => {
  return (
    <div className="hamburger" onClick={toggle}>
      <div className={`line ${isOpen ? 'open' : ''}`}></div>
      <div className={`line ${isOpen ? 'open' : ''}`}></div>
      <div className={`line ${isOpen ? 'open' : ''}`}></div>
    </div>
  );
};

export default Hamburger;
