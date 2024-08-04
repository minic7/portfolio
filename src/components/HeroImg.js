import "./HeroImgStyles.css"; 
import {Link} from "react-router-dom";
import React from 'react';
import IntroImg from "../assets/intro-bg.jpg"

const HeroImg = () => {
  return (
    <div className="hero">
        <div className="mask">
            <img className="intro-img" src={IntroImg} alt="IntroImg"/>
        </div>
        <div className="content">
            <p>Hello, I’m Sristi</p>
            <h1>&lt;Developer/&gt;</h1>
            <div>
                <Link to="/project" className="btn">Projects</Link>
                <Link to="https://drive.google.com/file/d/1F8vxMq-zj9H5b0VR7NHDbjENnsmMxZ6p/view?usp=drivesdk" target="_blank" className="btn btn-light">Resume</Link>
            </div>
        </div>

      
    </div>
  )
}

export default HeroImg
