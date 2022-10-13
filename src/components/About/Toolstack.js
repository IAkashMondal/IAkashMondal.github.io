import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiHeroku,
  SiVercel,
} from "react-icons/si";
import { AiFillCodeSandboxCircle } from "react-icons/ai";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode /> <h4>Virtual Studio</h4>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <AiFillCodeSandboxCircle /><h4>Code Sandbox</h4>
      </Col>
      
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman /> <h4>PostMan</h4>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiHeroku />  <h4>Heroku</h4>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVercel />  <h4>Vercel</h4>
      </Col>
    </Row>
  );
}

export default Toolstack;
