import React, { useEffect } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ProgramApi from "./ProgramApi";
import { Container, Row } from "react-bootstrap";
import { NavLink} from "react-router-dom";


const Programs =()=>{
    useEffect(()=>{
        document.title = 'Programs';
      })
    return(
        <>
        <div id="programs" className="programs">
            <div className="programcards">
                <div className="programheading">
                <span style={{paddingBottom:"5px", borderBottom:"2px solid brown", fontSize:"xx-large"}}>Programs We Offer</span>
                </div>
        <Container>
      <Row className="justify-content-md-center">
      {ProgramApi.map(function program(val){
            return(
                <>
                <div className="card">
                    <div style={{backgroundImage:`${val.img}`}} className="img">
                        <img style={{pointerEvents: "none"}} className="image" src={val.img} alt="" srcset="" />
                    </div>
                    {/* <div className="heading"> */}
                        <h4 className="heading">{val.name}</h4>
                    {/* </div> */}
                    {/* <div className="parah">
                        <p>{val.text}</p>
                    </div> */}
                    <div className="button">
                        <NavLink style={{textDecoration:"none", color:"white"}} to={val.link}> <Button className="explorebutton">{val.button}</Button> </NavLink>
                    </div>
                </div>
                </>
            )
        })}
      </Row>
    </Container>
    </div>
        </div>
        </>
    )
}
export default Programs;