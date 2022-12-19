import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Container, Row } from "react-bootstrap";
function Github() {
  return (
    <Row style={{ justifyContent: "center",alignItems:"center"  }}>
      <h1 className="project-heading" >
        Days I have <strong className="Yellow">Code</strong>
      </h1>
      <GitHubCalendar
        username="IAkashMondal"
        blockSize={15}
        blockMargin={5}
        color="#f5d10d"
        fontSize={16}

      />
   <Container className="gitstat">
    <Row >
      <p ><img   width={"60%"} src="https://github-readme-streak-stats.herokuapp.com/?user=iakashmondal&theme=great-gatsby" alt="iakashmondal" /></p>
      <p >&nbsp;<img   width={"60%"}  src="https://github-readme-stats.vercel.app/api?username=iakashmondal&theme=great-gatsby&show_icons=true&locale=en" alt="iakashmondal" /></p>
      <p ><img  width={"60%"} src="https://github-readme-stats.vercel.app/api/top-langs?username=iakashmondal&theme=great-gatsby&show_icons=true&locale=en&layout=compact" alt="iakashmondal" /></p>
    </Row>
   </Container>
    </Row>
  );
}

export default Github;
