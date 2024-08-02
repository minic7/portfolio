import "./FooterStyles.css"


import React from 'react'
import {FaGithub, FaHome, FaLinkedin, FaMailBulk, FaPhone} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="location">
                    <h4>
                    <FaHome size={20} style={{color:"ivory",marginRight:"2rem"}}/>
                    <span>WhiteField,Bangalore</span>
                    </h4>
                    
                </div>
                
                <div className="phone">
                    <h4>
                    <FaPhone size={20} style={{color:"ivory",marginRight:"2rem"}}/>
                    <span>+91 7779886145</span>
                    </h4>
                    
                </div>
                <div className="email">
                <h4>
                    <FaMailBulk size={20} style={{ color: "ivory", marginRight: "2rem" }} />
                    <a href="mailto:choudhary27sristi@gmail.com" style={{ color: "ivory", textDecoration: "none" }}>
                        choudhary27sristi@gmail.com
                    </a>
                </h4>
               </div>

            </div>
            <div className="right">
            <h4>About Me</h4>
            
            <p>I hold a Bachelor's degree in Information Science and Technology, with a 
                strong passion for coding and software development. My technical expertise includes Django, React.js, Python, and Selenium, which I've leveraged to build dynamic web applications and automated websites. I'm eager to continue expanding my skills and collaborating on exciting projects.</p>
                <div className="social">
                <h4>
                <a href="https://github.com/minic7" target="_blank" rel="noopener noreferrer">
                <FaGithub size={30} style={{ color: "ivory", marginRight: "1rem" }} />
                </a>
                <a href="https://www.linkedin.com/in/sristi-choudhary/" target="_blank" rel="noopener noreferrer">
                <FaLinkedin size={30} style={{ color: "ivory", marginRight: "1rem" }} />
                </a>
            </h4>
            </div>
            </div>
            
        </div>
      
    </div>
  )
}

export default Footer
