import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../img/hero2.png"
import {
  AiFillGithub,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import {  MdOutlineContentCopy } from "react-icons/md";
function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="Yellow"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
            I am a  <i><b className="Yellow">Full Stack Developer </b></i>, passionate about building digital products that improve everyday experience for people.
              <br />
              <br />I am proficient in
              <i>
                <b className="Yellow"> MERN Stack </b>
              </i>
              <br />
              <br />
              My field of Interest's are building new &nbsp;
              <i>
                <b className="Yellow">Web Technologies and Products </b>
              </i>
              <br />
              <br />
              I love to work on exciting projects that test what I've learnt, 
              also look forward to work in a challenging environment which gives me an opportunity to prove myself & provides me with an atmosphere in which I can learn & grow.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
          <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>Get in <strong className="Yellow"> Touch</strong></h1>
            <p>
              Feel free to <span className="Yellow">connect </span>with me
            </p>
            <p className="contact-font">
              Email : <a className="Yellow mailto" href="mailto:info.coldfired@gmail.com">&nbsp;&nbsp;<strong  onClick={()=> {navigator.clipboard.writeText("info.coldfired@gmail.com") ;alert("Email id: info.coldfired@gmail.comcoppied ") }} >info.coldfired@gmail.com <MdOutlineContentCopy/></strong></a>
            </p>
            <p className="contact-font">
              Mobile : <span className="Yellow">&nbsp;<strong onClick={()=> {navigator.clipboard.writeText("+91 8637838646"); alert("phone no: +91 8637838646 coppied ")}} > +91 863783864 <MdOutlineContentCopy/></strong></span>
            </p>
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
    </Container>
  );
}
export default Home2;
