import React from "react";
import classes from "../styles/home.module.css";
// import centerimage from "../assests/center.png";
import fampay from '../assests/fampay.png';
import design5 from '../assests/design5.png';
import Komal from "../assests/Komal.jpg";
import Ayush from "../assests/Ayush.jpg";
import Shreyansh from "../assests/Shreyansh.jpg";

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
              Developing and optimising website of Fampay official website and enhancing its usability using some good and latest technologies such as Next.js
            </p>
            <button className={classes.web}>Web Development</button>

          </div>
          <div className={classes.sponsimage}>
            <img src={fampay} alt="fampay" className={classes.fampayimage} />
            <button className={classes.ps}>
              Problem Statement
            </button>

          </div>

        </div>
        <div className={classes.design3}></div>
        <div className={classes.design4}></div>
      </div>

      <div className={classes.teamcont}>
        <h1 className={classes.teamheading}>Team Techshila</h1>
        <div className={classes.design5}>
          <img src={design5} style={{
            height: "100%",
            width: "65%",
          }} />
          <div className={classes.card1}>
            <div className={classes.card}>
              <img src={Ayush} alt="Card" className={classes.cardimg} />
              <a><b>Ayush Pal </b><br /> Converner</a>
            </div>
          </div>
          <div className={classes.card2}>
            <div className={classes.card}>
              <img src={Shreyansh} alt="Card" className={classes.cardimg} />
              <a><b>Arin Tiwari </b><br /> Co-Converner</a>
            </div>
            <div className={classes.card}>
              <img src={Shreyansh} alt="Card" className={classes.cardimg} />
              <a><b>Shreyansh Tiwari </b><br /> Co-Converner</a>
            </div>
            <div className={classes.card}>
              <img src={Komal} alt="Card" className={classes.cardimg} />
              <a><b>Komalpreet Kaur </b><br /> Co-Converner</a>
            </div>
            <div className={classes.card}>
              <img src={Shreyansh} alt="Card" className={classes.cardimg} />
              <a><b>Aditya Sewal </b><br /> Co-Converner</a>
            </div>
          </div>
        </div>
        <div>

        </div>
      </div>
    </div>
  );
};

export default Home;
