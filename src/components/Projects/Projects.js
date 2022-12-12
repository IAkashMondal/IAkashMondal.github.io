import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import carb from "../../img/CarbManager.jpg" 
import mytv from "../../img/MytvApp.jpg" 
import Trip from "../../img/TripAdvisor.jpg" 
import exp from "../../img/Expedia.jpg" 
import body from "../../img/Body_and_barth.jpg"
import toy from "../../img/Toy_march2.jpg"


function Projects() {
  return (
    <Container  fluid className="project-section">
      <div id="project" className="projects-sections"></div>
      <Particle />
      <Container>
        <h1 className="project-heading" >
          My Recent <strong className="Yellow">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
      
        
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <Col md={6} className="project-card">
            <ProjectCard
              imgPath={mytv}
              isBlog={false}
              title="MyTv App "
              description="MyTv+ is the website for watching Movies and shows. its have a subscription functionality and high security authentication with firebase for the users and admin both and we can see different type of category in movies and shows."
              stacks="Tech Stack : REACT,JAVASCRIPT,Glitch SERVER,AXIOS,REDUX,FIRE BASE AUTHENTICATIONR,ROUTER DOM, CHAKRA-UI"
              respon=" Responibilities: Navbar,Sign in,Sign up,Admin panel(Add,delete,edit at live data),Movie searching."
              ghLink="https://github.com/priyanshu1120/bent-tail-4615"
              demoLink="https://appletv-phi.vercel.app/"
            />
          </Col>
       

          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={Trip}
              isBlog={false}
              title="Trip Advisor clone"
              description="Tripadvisor, Inc. is an American online travel company that offers online hotel reservations and bookings for transportation, lodging, travel experiences, and restaurants.Tripadvisor, the world's largest travel platform."
              stacks="Tech Stack : REACT,JAVASCRIPT,JSON,AXIOS,REDUX,ROUTER DOM, CHAKRA-UI"
              respon=" Responibilities: Navbar,Cart,Product cards,Product Filter."
              ghLink="https://github.com/pallu2108/sedate-toys-1304"
              demoLink="https://trip-advisor-clone.vercel.app/"
            />
          </Col>
          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={exp}
              isBlog={false}
              title="Expedia.com Clone"
              description="Expedia.com is an online booking site for hotels,travels and car services, Have built the user flow of the website from sign up to product description page and the data managed with json server."
              stacks="Tech Stack : REACT,JAVASCRIPT,JSON,AXIOS,CONTEXT API, CHAKRA-UI"
              respon=" Responibilities: Complete WebSite."
              ghLink="https://github.com/IAkashMondal/poised_society_7641"
              demoLink="https://poised-society-7641.vercel.app/"
            />
          </Col>
       

          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={carb}
              isBlog={false}
              title="Carb Manager clone"
              description="In this project I have built a web application where user can compare calories of a particular food and the respective food will be displayed after certain time interval."
              stacks="Tech Stack : REACT,JAVASCRIPT,JSON,AXIOS,CONTEXT API, CHAKRA-UI"
              respon=" Responibilities: Complete WebSite."
              ghLink="https://github.com/IAkashMondal/serious_haircut_7840/tree/master/src"
              demoLink="https://carb-manager.vercel.app/"
            />
          </Col>

          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={body}
              isBlog={false}
              title="Bath & Body Works Clone"
              description="Bath & Body Works, LLC. is an American specialty retailer company founded in the year 1990 in New Albany, Ohio by Les Wexner. Till present it has since expanded across 6 continents. sold soaps, lotions, fragrances, and candles."
              stacks="Tech Stack : HTML, CSS, JAVASCRIPT"
              respon=" Responibilities: Cart page,WishList page,Product Display page,Payment Page,Address Page."
              ghLink="https://github.com/IAkashMondal/bath-and-body-works-2"
              demoLink="https://iakashmondal.github.io/bath-and-body-works-2/"              
            />
          </Col>
          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={toy}
              isBlog={false}
              title="Toy March Clone"
              description="A famous e-commerce website. Have built the user flow of the website from sign up to placing the orders, address updating page, and checkout page, and data managed with json server and local storage."
              stacks="Tech Stack : HTML, CSS, JAVASCRIPT"
              respon=" Responibilities: Cart page,WishList page.Payment Page,Address Page."
              ghLink="https://github.com/PrathyushNair/ToyMarche_clone"
              demoLink="https://62488c87db897540a8152398--subtle-centaur-57e7a8.netlify.app/"              
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
