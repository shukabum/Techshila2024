import React from 'react'
import classes from '../styles/home.module.css';
import centerimage from '../assests/center.png';
const Home = () => {
  let categories =[
    {
      name:"Blockchain",
      link:"",
    },
    {
      name:"Development",
      link:"",
    },
    {
      name:"Design",
      link:"",
    },
    {
      name:"Finance",
      link:"",
    },
    {
      name:"Development",
      link:"",
    },
    {
      name:"Design",
      link:"",
    },
    {
      name:"Product",
      link:"",
    },
    {
      name:"Finance",
      link:"",
    },
  ]
  return (
    <div className={classes.container}>  
      <div className={classes.image}>
        <div className={classes.heading}>
          TECHSHILA
          <p>
          Tackle compelling problem statements and embrace hands-on learning experiences all at once!
          </p>
        </div>

        <img src={centerimage} alt ="center image"/>
      </div>
      <div className={classes.prob_container}>
        <div className={classes.stage}>
          {
            categories.map((item,index)=>
              <button key={index}>
                {item.name}
              </button>
            )
          }

        </div>
       
      </div>
      <div className={classes.spons}>
        <div>
        </div>

      </div>
      <div className={classes.team}>
        <h1>
          Team Techshila
        </h1>

      </div>
    </div>
  )
}

export default Home
