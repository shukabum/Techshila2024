import React from 'react'
import classes from '../styles/contact.module.css';
import design1 from '../assests/design1.png'
import email from '../assests/Mail.png';
import phone from '../assests/phonr.png';
const Contact = () => {
  return (
    <div className={classes.container}>
        
        <div className={classes.content}>
            <h1 style={{
                fontSize:"3rem",
                fontWeight:"800"
            }}>
                Contact Us
            </h1>
            <span className={classes.context}>
                <p style={{
                    display:'flex',
                    // justifyContent:'ce'
                    alignItems:"center",
                    gap:"1rem"
                }}>
                    <img src={email} className={classes.images}/>
                    gensec.technical@iitr.ac.in
                </p>    
               

            </span>
        </div>
      
    </div>
  )
}

export default Contact
