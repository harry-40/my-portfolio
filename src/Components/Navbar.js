import React from 'react';
import logo from '../config/logo.jpg';

const Navbar = () => {
  return (
    <nav className="bg-black  py-8 rounded-xxl">
      <div className="container mx-auto  flex justify-between items-center">
        <div className="flex items-center">
          <h1 className="text-white text-xl font-bold"><img src={logo} alt='logo' height={50} width={50}  /></h1>
        </div>
        <ul className="flex space-x-12">
          <li>
            <a href="#" className="text-white text-2xl hover:text-yellow-300 font-bold  ">Home</a>
          </li>
          <li>
            <a href="#" className="text-white text-2xl hover:text-yellow-300 font-bold ">Projects</a>
          </li>
          <li>
            <a href="#" className="text-white text-2xl hover:text-yellow-300 font-bold ">Skills</a>
          </li>
          <li>
            <a href="#" className="text-white text-2xl hover:text-yellow-300 font-bold ">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
