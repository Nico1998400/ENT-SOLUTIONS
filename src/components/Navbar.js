import React, { useState, useEffect } from 'react';
import { Link } from "react-scroll";
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const [, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link 
          to='home' 
          className='navbar-logo' 
          onClick={closeMobileMenu}
           spy={true}
              smooth={true}
              offset={-100}
              duration= {500}
          >
            <img width="200" height="35" src='/images/logo.png' alt='A Logo For ENT'></img>
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link 
              to='home' 
              className='nav-links' 
              onClick={closeMobileMenu}
              spy={true}
              smooth={true}
              offset={-100}
              duration= {500}
              activeClass="active"
              >
                
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='services'
                className='nav-links'
                onClick={closeMobileMenu}
                spy={true}
                smooth={true}
                offset={-80}
                duration= {500}
                activeClass="active"
              >
                Services
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='about'
                className='nav-links'
                onClick={closeMobileMenu}
                spy={true}
                smooth={true}
                offset={-80}
                duration= {500}
                activeClass="active"
              >
                About
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
