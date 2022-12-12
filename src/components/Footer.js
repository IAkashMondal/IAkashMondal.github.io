import React from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import {
  AiFillGithub,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { MdOutlineContentCopy } from "react-icons/md";
import Particles from "react-tsparticles";

function Footer() {

  return (
    <div id='contact'>
      <Particles/>
    <Container fluid className="footer">
    
      <Row>
        <Col md="4" className="footer-copywright">
        <p className="contact-font  text-white d-flex flex-row"> Email : &nbsp;&nbsp; <a className="Yellow mailto" href="mailto:info.coldfired@gmail.com"><p  onClick={()=> {navigator.clipboard.writeText("info.coldfired@gmail.com") ;alert("Email id: info.coldfired@gmail.com coppied ") }} > info.coldfired@gmail.com <MdOutlineContentCopy/></p></a> </p>
        <p className="contact-font  text-white d-flex flex-row"> Phone no :&nbsp;&nbsp; <a className="Yellow mailto" href="8637838346"><p  onClick={()=> {navigator.clipboard.writeText("info.coldfired@gmail.com") ;alert("Phone no : 8637838346 coppied ") }} > +91 8637838346 <MdOutlineContentCopy/></p></a> </p>
        <p className="contact-font  text-white flex-row"> <IoLocationSharp/> <p>Address:&nbsp;&nbsp; </p>&nbsp;&nbsp; <p className="Yellow">{` Siliguri,India.`}</p></p>
        </Col>
        <Col md="4" className="footer-copywright border border-3 border-white rounded spacer">
          <Container className="footer-container">
            <p className="header Yellow"><strong>Send me an Email</strong></p>
        <Form action="https://formspree.io/f/mgeqywna" method="POST" >
        <Form.Group className="mb-3" controlId="User name">
        <Form.Label className="Yellow">Username</Form.Label>
        <Form.Control name="username" type="text" placeholder="Your name" autoComplete="off" required />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label className="Yellow" >Email address</Form.Label>
        <Form.Control name="Email" type="email" placeholder="name@example.com"  autoComplete="off" required/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label className="Yellow">Your massage</Form.Label>
        <Form.Control placeholder={`We Love your work,  So we want to contact you for Hireing Process.`} name="massage" as="textarea" autoComplete="off" required rows={3} />
      </Form.Group>
      <input className="Yellow" type={"submit"} value="SEND"/>
    </Form>
    </Container>
        </Col>
        
        <Col md="4" className="footer-body">
        <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/IAkashMondal"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/akash-mondal-859b4b228/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
        </Col>
      </Row>
    </Container>
    </div>
  );
}

export default Footer;
