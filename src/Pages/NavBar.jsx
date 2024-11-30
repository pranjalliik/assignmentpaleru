import React, { useState, useEffect, Fragment } from 'react';
import { Link , useLocation } from 'react-router-dom';

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const[show , setShow] = useState(false)
  const location = useLocation();

  const isActive = (path) => location.pathname === path;
  // Detect when the user scrolls
  const handleScroll = () => {
    if (window.scrollY > 10) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  // Attach scroll event listener
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    // Cleanup event listener
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Fragment>
 <div className={`fixed  top-0 left-0 right-0 bg-white z-10 transition-shadow duration-300 flex justify-between xl:px-[80px] px-[20px]  items-center cursor-default py-[30px] ${isScrolled ? 'shadow-lg' : ''}`}>
  <div className='font-sans text-[#0b57ff] text-4xl font-normal'>
    <span className='text-white bg-[#0b57ff] px-2 font-normal '>Pr</span>accel
  </div>

  {/* Navbar for large screens */}
  <div className='hidden lg:flex gap-x-[30px] text-lg font-semibold items-center'>
  <div className="hidden lg:flex gap-x-[30px] text-lg font-semibold items-center">
        <div
          className={`hover:text-[#0b57ff] hover:underline hover:underline-offset-8 ${
            isActive('/') ? 'underline underline-offset-8 text-[#0b57ff]' : ''
          }`}
        >
          <Link to="/">Home</Link>
        </div>
        <div
          className={`hover:text-[#0b57ff] hover:underline hover:underline-offset-8 ${
            isActive('/school') ? 'underline underline-offset-8 text-[#0b57ff]' : ''
          }`}
        >
          <Link to="/school">For Schools</Link>
        </div>
        <div
          className={`hover:text-[#0b57ff] hover:underline hover:underline-offset-8 ${
            isActive('/performance') ? 'underline underline-offset-8 text-[#0b57ff]' : ''
          }`}
        >
          <Link to="/performance">Performance</Link>
        </div>
        <div
          className={`hover:text-[#0b57ff] hover:underline hover:underline-offset-8 ${
            isActive('/register') ? 'underline underline-offset-8 text-[#0b57ff]' : ''
          }`}
        >
          <Link to="/register">Register</Link>
        </div>
        <div
          className={`hover:text-[#0b57ff] hover:underline hover:underline-offset-8 ${
            isActive('/login') ? 'underline underline-offset-8 text-[#0b57ff]' : ''
          }`}
        >
          <Link to="/login">Login</Link>
        </div>
        <div
          className={`hover:text-[#0b57ff] hover:underline hover:underline-offset-8 ${
            isActive('/about') ? 'underline underline-offset-8 text-[#0b57ff]' : ''
          }`}
        >
          <Link to="/about">About Us</Link>
        </div>
        <div
          className={`hover:text-[#0b57ff] hover:underline hover:underline-offset-8 ${
            isActive('/contact') ? 'underline underline-offset-8 text-[#0b57ff]' : ''
          }`}
        >
          <Link to="/contact">Contact Us</Link>
        </div>
      </div>
  </div>

  {/* Menu for small screens */}
  <div className='lg:hidden'>
    <button className='text-[#0b57ff] ' onClick={()=>setShow(!show)}>
      {/* Icon for menu (Hamburger menu, for example) */}
      &#9776; {/* You can replace this with an actual icon */}
    </button>
  </div>
</div>
{ show&&
<div className=' lg:hidden w-full bg-[#0b57ff] opacity-90 cursor-default font-semibold flex flex-col fixed mt-8 text-white pl-6 gap-y-6 py-3'>
 <div className='hover:underline hover:underline-offset-8'>Home</div>
 <div>For School</div>
    <div>Performance</div>
    <div>Register</div>
    <div>Login</div>
    <div>About Us</div>
    <div>Contact Us</div>
</div>
}
    </Fragment>
  );
};

export default NavBar;
