import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { HiOutlineExternalLink } from "react-icons/hi";
import { BsGithub } from "react-icons/bs";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title><strong className="Yellow">{props.title}</strong></Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        <Card.Text style={{ textAlign: "center" }}>
          {props.stacks}
        </Card.Text>
        <Card.Text style={{ textAlign: "center" }}>
          {props.respon}
        </Card.Text>
        <Button variant="primary" href={props.ghLink} target="_blank">
          <BsGithub /> &nbsp;
          <strong>{ "GitHub"}</strong>
        </Button>
        {"\n"}
        {"\n"}

        {/* If the component contains Demo link and if it's not a Blog then, it will render the below component  */}

        {!props.isBlog && props.demoLink && (
          <Button
            variant="primary"
            href={props.demoLink}
            target="_blank"
            style={{ marginLeft: "10px" }}
          >
             
           <strong> {"Live Demo"} </strong>&nbsp; <HiOutlineExternalLink color="black"  size={20}/>
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
