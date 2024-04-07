import React, { useEffect, useState } from 'react'
import classes from '../styles/nav.module.css';
import logo from '../assests/stclogo.png';
const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false)

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
      <div className={classes.logocont}>
        <img src={logo} alt="STC Logo" className={classes.logo} />
        Techshila
      </div>
      {/* kbdcakhadhcakjbc */}
      <img></img> 
      <div className={classes.links}>
        {isMobile ? (
          <div>Bars or any other mobile navigation UI</div>
        ) : (
          <>
            <a href="">Home</a>
            <a href="">Problem Statements</a>
            <a href="">Team Techshila</a>
            <a href="">Contacts</a>
          </>
        )}
      </div>
    </div>
  )
}

export default Navbar
