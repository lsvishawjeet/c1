import React, { useEffect } from "react";
import Logo from "../icons/About/About.svg"

const About2 =()=>{
    useEffect(()=>{
        document.title = 'About';
      })
    return(
        <>
        <div id="about" className="about">
            <div className="mainabout">
            <div className="aboutlogobox">
                <img style={{pointerEvents: "none"}} className="aboutlogo" src={Logo} alt="" srcset="" />
            </div>
            <div className="aboutparah">
                <h1 style={{textAlign:"center", color:"brown"}}> <span style={{borderBottom:"2px solid Brown"}}>About Us</span> </h1><br/>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo amet sapiente a alias harum debitis impedit odio explicabo blanditiis veritatis minus, beatae eveniet officiis asperiores doloremque. Dignissimos et ducimus ad officia voluptates amet, perferendis placeat mollitia magni natus earum tempora quae dolor sunt possimus eveniet. Error deserunt nemo sapiente necessitatibus!</p>
            </div>
            </div>
        </div>
        </>
    )
}
export default About2;