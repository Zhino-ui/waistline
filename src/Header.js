import React, { useState } from 'react';
import { FaBars, FaTimes } from "react-icons/fa";
import { Link, useLocation } from 'react-router-dom';
import Clothing from './Clothing';

const Header = () => {
  const { pathname } = useLocation();
  const [isOpen, setIsOpen] = useState(false)

  const handleToggle = ()=>{
    setIsOpen(!isOpen)
  }

  return (
    <nav className='navbar'>
      <button className='nav-toggle' onClick={handleToggle}>
        {isOpen ? <FaTimes/> : <FaBars /> }
        
        </button>
        
        <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
          <li>
            <Link id='link' className={pathname === '/' ? 'active' : ''} to="/">Home</Link>
          </li>
          <li>
            <Link id='link' className={pathname === '/clothing' ? 'active' : ''} to="/clothing">Clothing</Link>
          </li>
          
          <li>
            <Link id='link' className={pathname === '/contact' ? 'active' : ''} to="/contact">Contact</Link>
          </li>
      </ul> 
    </nav>
  );
};

export default Header;
