import "./AboutContactStyles.css"
import React1 from "../assets/react1.jpg"
import React2 from "../assets/react22.webp"
import React from 'react'
import { Link } from "react-router-dom"

const AboutContact = () => {
  return (
    <div className="about">
        <div className="left">
        <h1>Who Am I?</h1>
        <p>
            I'm a front-end developer specializing in React. I craft
            responsive and secure websites tailored to meet my clients' needs.
        </p>
        <Link to="/contact">
        <button className="btn">Contact</button>
        </Link>
        </div>
      
        <div className="right">
            <div className="img-container">
                <div className="img-stack top">
                    <img src={React1} className="img" alt="React logo" /> 
                </div>
                <div className="img-stack bottom">
                    <img src={React2} className="img" alt="React logo" /> 
                </div>
            </div>
        </div>

      
    </div>
  )
}

export default AboutContact
