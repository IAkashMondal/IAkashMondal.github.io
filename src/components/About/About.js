import React from "react";
import { Container, Row } from "react-bootstrap";
import Github from "./Github";
import Techstack from "./Techstack";

import Toolstack from "./Toolstack";

function About() {
  return (
    <Container id="about" fluid className="about-section" >
      <Container>
        <Row style={{ justifyContent: "center", margin : "-50px" }} id="skills" >
        </Row>
        <h1 className="project-heading skills-section"  >
          Professional <strong className="Yellow">Skillset </strong>
        </h1>

        <Techstack  />

        <h1 className="project-heading">
          <strong className="Yellow">Tools</strong> I use
        </h1>
        <Toolstack />

        <Github />
      </Container>
    </Container>
  );
}

export default About;
