import React from 'react'
import classes from '../styles/contact.module.css';
import design1 from '../assests/design1.png'
const Contact = () => {
  return (
    <div className={classes.container}>
        <img src={design1} alt="design1"/>
        <div className={classes.content}>
            <h1>
                Contact Us
            </h1>
            <span>
                <p>
                    email

                </p>
                <p>
                    phone

                </p>
            </span>
        </div>
      
    </div>
  )
}

export default Contact
