import React from "react";
import classes from "../styles/home.module.css";
import fampay from "../assests/fampay.png";
import design5 from "../assests/design5.png";
import ayush from '../assests/Ayush.jpg'
import Contact from "./Contact";
import Komal from '../assests/Komal.jpg';
import sheru from '../assests/Shreyansh.jpg';
import arin from '../assests/arin.jpg';
const Home = () => {
  let categories = [
    {
      name: "Blockchain",
      link: "",
    },
    {
      name: "Development",
      link: "",
    },
    {
      name: "Design",
      link: "",
    },
    {
      name: "Finance",
      link: "",
    },
    {
      name: "Development",
      link: "",
    },
    {
      name: "Design",
      link: "",
    },
    {
      name: "Product",
      link: "",
    },
    {
      name: "Finance",
      link: "",
    },
  ];
  return (
    <div className={classes.container}>
      <div className={classes.imagecont}>
        <div className={classes.heading}>
          TECHSHILA
          <span className={classes.text1}>
            Tackle
            <p className={classes.colorchange}>
              &nbsp;compelling problem statements&nbsp;
            </p>{" "}
            and embrace&nbsp;
            <p className={classes.colorchange}>hands-on learning&nbsp;</p>
            experiences all at once!
          </span>
        </div>
      </div>
      <div className={classes.prob_container}>
        <div className={classes.design1}></div>
        <div className={classes.design2}></div>
        <div className={classes.stage}>
          {categories.map((item, index) => (
            <button key={index} className={classes.btn}>
              {item.name}
            </button>
          ))}
        </div>
        <div className={classes.sponscont}>
          <div className={classes.sponsortext}>
            <p className={classes.boldtext}>
              Enhancing user experience of Fampay official website
            </p>
            <p>
              Developing and optimising website of Fampay official website and
              enhancing its usability using some good and latest technologies
              such as Next.js
            </p>
            <button className={classes.web}>Web Development</button>
          </div>
          <div className={classes.sponsimage}>
            <img src={fampay} alt="fampay" className={classes.fampayimage} />
            <button className={classes.ps}>Problem Statement</button>
          </div>
        </div>
        <div className={classes.design3}></div>
        <div className={classes.design4}></div>
      </div>

      <div className={classes.teamcont}>
        <h1 className={classes.teamheading}>Team Techshila</h1>
        <div className={classes.design5}>
          <img
            src={design5}
            style={{
              height: "100%",
              width: "65%",
            }}
          />
        </div>
        {/* team */}
        <div className={classes.card1cont}>
          <div className={classes.card1}>
            <img src={ayush} alt="ayush" style={{
              height:"300px",
              width:"250px",
              borderRadius:"20px",
              boxShadow:"rgba(0, 0, 0, 0.35) 0px 5px 15px",

            }}/>
            <p className={classes.card_text}>
              <h4>Ayush Pal</h4>
              Convener
            </p>
          </div>
        </div>
        <div className={classes.card2cont}>
          <div className={classes.card1}>
            <img src={arin} alt="ayush" style={{
              height:"300px",
              width:"250px",
              borderRadius:"20px",
              boxShadow:"rgba(0, 0, 0, 0.35) 0px 5px 15px",
              
            }}/>
            <p className={classes.card_text}>
              <h4>Arin Tiwari</h4>
              Co-Convener
            </p>
          </div>
          <div className={classes.card1}>
            <img src={sheru} alt="ayush" style={{
              height:"300px",
              width:"250px",
              borderRadius:"20px",
              boxShadow:"rgba(0, 0, 0, 0.35) 0px 5px 15px",
              
            }}/>
            <p className={classes.card_text}>
              <h4>Shreyansh Tiwari</h4>
              Co-Convener
            </p>
          </div>
          <div className={classes.card1}>
            <img src={Komal} alt="ayush" style={{
              height:"300px",
              width:"250px",
              borderRadius:"20px",
              boxShadow:"rgba(0, 0, 0, 0.35) 0px 5px 15px",
              
            }}/>
            <p className={classes.card_text}>
              <h4>Komalpreet Kaur</h4>
              Co-Convener
            </p>
          </div>
          <div className={classes.card1}>
            <img src={ayush} alt="ayush" style={{
              height:"300px",
              width:"250px",
              borderRadius:"20px",
              boxShadow:"rgba(0, 0, 0, 0.35) 0px 5px 15px",
              
            }}/>
            <p className={classes.card_text}>
              <h4>Aditya Sewal</h4>
              Co-Convener
            </p>
          </div>
        </div>
        <div></div>
      </div>

      <Contact/>
    </div>
  );
};

export default Home;
