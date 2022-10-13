import React from "react";
import { Col, Image, Row } from "react-bootstrap";
// import { CgHTML } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiGit,
  DiHtml5
} from "react-icons/di";
import {
  SiRedux,
  SiExpress,
  SiBootstrap,
  SiChakraui,
  SiTypescript,
  SiCypress,
} from "react-icons/si";
import { AiFillGithub } from "react-icons/ai";


import { AiFillHtml5 } from "react-icons/ai";
import { IoLogoCss3, IoLogoJavascript, IoLogoNpm, IoLogoReact } from "react-icons/io5";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <AiFillHtml5/>  <h4>HTML 5</h4>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <IoLogoCss3/> <h4>CSS 3</h4>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
    <IoLogoJavascript/><h4>JAVA SCRIPT</h4>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <IoLogoReact/> <h4>REACT JS</h4>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
      <SiRedux/> <h4>Redux</h4>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <SiTypescript/> <h4>Type Script</h4>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit /> <h4>Git</h4>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <AiFillGithub /><h4>Github</h4>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiCypress/> <h4>Cypress</h4>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <IoLogoNpm/><h4>Npm</h4>
      </Col>


    </Row>
  );
}

export default Techstack;
