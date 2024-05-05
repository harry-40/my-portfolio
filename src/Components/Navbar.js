import React from 'react';
import logo from '../config/logo.jpg';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {

  const navigate=useNavigate();
  
   const  handleHome=()=>{
    navigate('/');
   }
    const handleSkills=()=>{
      navigate('/skills');
    }

      const handleContactForm=()=>{
        navigate('/contact');

}
  return (
    <nav className="w-full  py-8 rounded-xxl">
      <div className="container mx-auto  md:flex justify-between items-center ">
        <div className="flex items-center">
          <h1 className="text-white text-xl font-bold"><img src={logo} alt='logo' height={50} width={50}  /></h1>
        </div>
        <ul className="flex space-x-12">
          <li>
            <a href="#" className="text-white text-2xl hover:text-yellow-300 font-bold sm:text-xl " onClick={handleHome}>Home</a>
          </li>
          <li>
            <a href="#" className="text-white text-2xl hover:text-yellow-300 font-bold ">Projects</a>
          </li>
          <li>
            <a href="#" className="text-white text-2xl hover:text-yellow-300 font-bold " onClick={handleSkills}>Skills</a>
          </li>
          <li>
            <a href="#" className="text-white text-2xl hover:text-yellow-300 font-bold " onClick={handleContactForm}>Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
