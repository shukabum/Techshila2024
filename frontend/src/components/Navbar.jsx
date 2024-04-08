import React, { useEffect, useState } from 'react'
import { FaBars, FaTimes } from "react-icons/fa";
import classes from '../styles/nav.module.css';
import logo from '../assests/stclogo.png';
import Vector from '../assests/Vector.png';
const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false)
  const [menuOn, setMenuOn] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768)
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <div className={classes.container}>
      <div className={classes.mobile_menu}>
        <div className={classes.mobile_logo}>
          <img src={logo} alt="STC Logo" />
        </div>
        <div onClick={() => {setMenuOn(!menuOn)}} className={classes.mobile_menu_icon}>
          {/* <img src={menuOn ? FaBars : FaTimes} alt="" /> */}
          { menuOn ? <FaTimes/> : <FaBars/>}
          
        </div>
        <div className={menuOn ? classes.displayMobileMenu : classes.hideMobileMenu}>
        <a href="">Home</a>
            <a href="">Problem Statements</a>
            <a href="">Team Techshila</a>
            <a href="">Contacts</a>
        </div>
      </div>
      <div className={classes.large_screens}>
      <div className={classes.logocont}>
        <img src={logo} alt="STC Logo" className={classes.logo} />
        <div className={classes.text}>Techshila</div>
      </div>
      <div className={classes.links}>
      <a href="">Home</a>
            <a href="">Problem Statements</a>
            <a href="">Team Techshila</a>
            <a href="">Contacts</a>
      </div>
      </div>
      {/* kbdcakhadhcakjbc */}
      {/* <img></img>
      <div className={classes.links}>
        {isMobile ? (<button className={classes.iconButton}>
          {isMobile ? <FaBars /> : <FaTimes />}
        </button>

        ) : (
          <>
            <a href="">Home</a>
            <a href="">Problem Statements</a>
            <a href="">Team Techshila</a>
            <a href="">Contacts</a>
          </>
        )}
      </div> */}
    </div>
  )
}

export default Navbar
