import { useState } from 'react'
import { Link } from "react-scroll";
import './Navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons'

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(false)

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar)
  }

  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">¨
        <Link 
              to='home' 
              className='nav-links' 
              spy={true}
              smooth={true}
              offset={-100}
              duration= {500}
              activeClass="active"
              >
        <img width="200" height="35" src='/images/logo.png' alt='A Logo For ENT'></img>
        </Link>
        </div>
        <div className="menu-icon" onClick={handleShowNavbar}>
       <FontAwesomeIcon className="bars" icon={faBars} />
        </div>
        <div className={`nav-elements  ${showNavbar && 'active'}`}>
        <ul>
            <li>
              <Link 
              to='home' 
              className='nav-links' 
              spy={true}
              smooth={true}
              offset={-100}
              duration= {500}
              activeClass="active"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to='services'
                className='nav-links'
                spy={true}
                smooth={true}
                offset={-80}
                duration= {500}
                activeClass="active"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                to='about'
                className='nav-links'
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
      </div>
    </nav>
  )
}

export default Navbar