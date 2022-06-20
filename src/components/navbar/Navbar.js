import logo from '../../images/logo/logo.png';
import hamburger from '../../images/hamburger.png';
import './Navbar.css'
import { Link } from "react-router-dom";
import React, { useState, useEffect } from 'react'

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false)
  const [screenWidth, setScreenWidth] = useState(window.innerWidth)

  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    }
    window.addEventListener('resize', changeWidth)

    return () => { window.removeEventListener('resize', changeWidth) }
  }, [])

  return (
    <nav className="navbar">

      <div className="brand-title">
        <Link to="/">
          <img src={logo} height="40" alt="" loading="lazy" />  
        </Link>
      </div>

      <img src={hamburger} alt="" loading="lazy"
        className='toggle-button'
        onClick={() => setToggleMenu(!toggleMenu)} />

      {(toggleMenu || screenWidth > 768) && (
        <ul className="navbar-links">
          <li className="navbar-link"><Link to="/home" onClick={() => setToggleMenu(!toggleMenu)}>Home</Link></li>
          <li className="navbar-link"><Link to="/posts" onClick={() => setToggleMenu(!toggleMenu)}>BlogPosts</Link></li>
          <li className="navbar-link"><Link to="/photos"onClick={() => setToggleMenu(!toggleMenu)}>Photography</Link></li>
          <li className="navbar-link"><Link to="/about" onClick={() => setToggleMenu(!toggleMenu)}>About Me</Link></li>
        </ul>

      )}
    </nav>
  );
};
export default Navbar;