import React from 'react';
import logo from '../assets/logo.png';

const Navbar = () => {
  return (
    <div className="flex justify-between">
      <img className="w-28" src={logo} alt="Ajaib Logo" />
      <span className="material-symbols-rounded">menu</span>
    </div>
  );
};

export default Navbar;
