import React from 'react'
import classes from '../styles/home.module.css';
const Card = ({name}) => {
  return (
    <div className={classes.card}>
      <img src={`../assests/${name}.jpg`} alt="Card" className={classes.cardimg}/>
    </div>
  )
}

export default Card
