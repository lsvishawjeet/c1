import React from "react";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import { NavLink} from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';

const Navibar =()=>{
    return(
        <>
        <div className="navbar" style={{top:"0"}}>
           {[ 'xl'].map((expand) => (
        <Navbar key={expand} expand={expand} className=" justify-content-center navbar">
          <Container >
            <Navbar.Brand href="">Institute</Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement=""
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Institute
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-center flex-grow-1 pe-3">
                  <Nav.Link className="navihover"><span className="navborder"> <NavLink style={{textDecoration:"none", color:"black"}} activeClassName="navbaractive" to="/c1/home">Home</NavLink></span></Nav.Link>
                  <Nav.Link className="navihover"><span className="navborder"> <NavLink style={{textDecoration:"none", color:"black"}} activeClassName="navbaractive" to="/c1/programs">Programs</NavLink></span></Nav.Link>
                  {/* <NavDropdown
                    title="Programs"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <NavDropdown.Item href="#action3">Networking</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                      Ethical Hacking
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action5">
                      Web Technology
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action5">
                      Programming
                    </NavDropdown.Item>
                  </NavDropdown> */}
                  <Nav.Link className="navihover"><span className="navborder"> <NavLink style={{textDecoration:"none", color:"black"}} activeClassName="navbaractive" to="/c1/about" href="#about">About</NavLink></span></Nav.Link>
                  <Nav.Link className="navihover"><span className="navborder"> <NavLink style={{textDecoration:"none", color:"black"}} activeClassName="navbaractive" to="/c1/Contact" href="#about">Contact</NavLink></span></Nav.Link>
                </Nav>
              <NavLink style={{textDecoration:"none", color:"white"}} to="/contact"><Button className="applybuttonnav">Apply Now</Button> </NavLink>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
      </div>
        </>
    )
}
export default Navibar