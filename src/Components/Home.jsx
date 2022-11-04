import React, { useEffect } from "react";
import programmingicon from "../icons/Home/programming.svg";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Home =()=>{
    useEffect(()=>{
        document.title = 'Home';
      })
    return(
        <>
        <div id="home" className="home">
            <div className="hometext">
            <div>
            <span className="startline">Authorized Training <br/> Institute in <br/> <b style={{color:"brown"}}> Bathinda </b></span> <br/>
            <span className="headingtext">Learn Practically from Industry Experts</span><br/>
            <Button href="#programs" className="programbutton">Explore Programs</Button>
            </div>
            </div>
            <div className="programmingiconbox">
                <img className="programmingicon" src={programmingicon} alt="" srcset="" />
            </div>
        </div>
        <div className="hometext2">
           <span className="hometextline2">Learn Job-Oriented Advanced Computer Courses in from Industry Expert Trainer with their Experience and Build Your Successful Career.</span>
            </div>
        </>
    )
}
export default Home;