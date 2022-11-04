import React, { useEffect } from "react";
import Form from 'react-bootstrap/Form';
import Contact from "./Contact";
import Button from 'react-bootstrap/Button';
import { Container } from "react-bootstrap";

const Contact2 = () => {
  useEffect(()=>{
    document.title = 'Contact';
  })
  return (
    <>
    <div className="applypage">
        <div className="applypagemain">
        <h2> <span className="applyheading">Book an apointment</span> </h2>
        <div className="formstart">
    <Form>
    <Form.Group className="mb-3" controlId="Name">
        <Form.Label>Name<span style={{color:"brown"}} >*</span> </Form.Label>
        <Form.Control type="text" placeholder="Name" required/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="name">
        <Form.Label>Mobile No.<span style={{color:"brown"}} >*</span></Form.Label>
        <Form.Control type="text" placeholder="Mobile No." required/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="FormGroup">
          <Form.Label>Select course<span style={{color:"brown"}} >*</span></Form.Label>
          <Form.Select className="formoptions" id="course">
            <option>Digital Marketing</option>
            <option>Web Development</option>
            <option>React js</option>
            <option>Mern Stack</option>
            <option>Ethical Hacking</option>
            <option>Programming (Any)</option>
            <option>Networking</option>
            <option>Hardware Training</option>
            <option>Graphic Designing</option>
            <option>Animation</option>
          </Form.Select>
        </Form.Group>

      <Button className="applybutton" variant="" type="submit">
        Submit
      </Button>
    </Form>
    </div>
    </div>
    </div>
    </>
  );
};
export default Contact2;
