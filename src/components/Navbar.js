import "./NavbarStyles.css"
 import React,{useState} from 'react'
 import { Link } from 'react-router-dom';
 import {FaBars,FaTimes} from "react-icons/fa"
 
 const Navbar = () => {

    const [click, setClick] = useState(false); // Corrected syntax
    const handleClick = () => setClick(!click);

    const[color,setColor]=useState(false);
    const changeColor=()=>{
      if(window.scrollY>=100){
        setColor(true);
      }else{
        setColor(false);
      }
    }
    window.addEventListener("scroll",changeColor);
   return (
     <div className={color?"header header-bg":"header"}>
        {/* //redirect me to home page always */}
        {/* <Link to="/">
        <h1>Portfolio.</h1>
        </Link> */}
       <ul className={click?"nav-menu active":"nav-menu"}>
        <li>
            <Link to="/">Home</Link>
        </li>
        <li>
            <Link to="/project">Project</Link>
        </li>
        <li>
            <Link to="/about">About</Link>
        </li>
        <li>
            <Link to="/contact">Contact</Link>
        </li>
       </ul>
       <div className="hamburger" onClick={handleClick}>
       {click ? (
          <FaTimes size={20} style={{ color: 'ivory' }} />
        ) : (
          <FaBars size={20} style={{ color: 'ivory' }} />
        )}
        
       </div>
     </div>
   )
 }
 
 export default Navbar
 