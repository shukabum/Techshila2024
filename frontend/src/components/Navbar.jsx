import React, { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import classes from "../styles/nav.module.css";
import logo from "../assests/stclogo.png";

const Navbar = ({ homeId, problemId, teamId, contactsId }) => {
  const [isMobile, setIsMobile] = useState(false);
  const [menuOn, setMenuOn] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const closeMobileMenu = (event, targetId) => {
    event.preventDefault();
    setMenuOn(false);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className={classes.container}>
      <div className={classes.mobile_menu}>
        <div className={classes.mobile_logo}>
          <img src={logo} alt="STC Logo" />
        </div>
        <div
          onClick={() => setMenuOn(!menuOn)}
          className={classes.mobile_menu_icon}
        >
          {menuOn ? <FaTimes /> : <FaBars />}
        </div>
        <div
          className={
            menuOn ? classes.displayMobileMenu : classes.hideMobileMenu
          }
        >
          <a href={`#${homeId}`} onClick={(e) => closeMobileMenu(e, homeId)}>
            Home
          </a>
          <a
            href={`#${problemId}`}
            onClick={(e) => closeMobileMenu(e, problemId)}
          >
            Problem Statements
          </a>
          <a href={`#${teamId}`} onClick={(e) => closeMobileMenu(e, teamId)}>
            Team Techshila
          </a>
          <a
            href={`#${contactsId}`}
            onClick={(e) => closeMobileMenu(e, contactsId)}
          >
            Contacts
          </a>
        </div>
      </div>
      <div className={classes.large_screens}>
        <div className={classes.logocont}>
          <img src={logo} alt="STC Logo" className={classes.logo} />
          <div className={classes.text}>Techshila</div>
        </div>
        <div className={classes.links}>
          <a href={`#${homeId}`}>Home</a>
          <a href={`#${problemId}`}>Problem Statements</a>
          <a href={`#${teamId}`}>Team Techshila</a>
          <a href={`#${contactsId}`}>Contacts</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
