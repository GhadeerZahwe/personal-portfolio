import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "iDonate Mobile App",
      description: "A mobile app that facilitates donation of excess food, connecting donors with delivery drivers. Includes a desktop admin panel for better management.",
      imgUrl: projImg1,
      link: "https://github.com/GhadeerZahwe/iDonate"
    },
    {
      title: "CMS Website for News",
      description: "A CMS system allowing admins, publishers, and editors to manage digital content efficiently and publish articles.",
      imgUrl: projImg2,
      link: "https://github.com/GhadeerZahwe/DgPad-CMS"
    },
    {
      title: "Email AI Agent (n8n Automation)",
      description: "An AI-powered email assistant built with n8n to handle emails, perform live web searches, manage Google Calendar, and log interactions.",
      imgUrl: projImg3,
      link: "https://github.com/GhadeerZahwe/Email-AI-Agent"
    },
    {
      title: "Titanic Survivors Prediction",
      description: "Machine learning model predicting Titanic passenger survival using features like age, sex, and ticket class.",
      imgUrl: projImg1,
      link: "https://github.com/GhadeerZahwe/Predicting-Titanic-Survivors"
    },
    {
      title: "Heart Disease Classification",
      description: "ML project predicting heart disease using patient health data, including full workflow from preprocessing to model evaluation.",
      imgUrl: projImg2,
      link: "https://github.com/GhadeerZahwe/Heart_Disease_Classifier"
    },
    {
    title: "Collaborative Movie Recommendation",
    description: "A Collaborative Movie Recommendation System using Item-Based Filtering with KNN to suggest top 10 similar movies based on user ratings.",
    imgUrl: projImg3, 
    link: "https://github.com/GhadeerZahwe/Collaborative-Recommendation-Movies"
  },
  ];

  return (
   <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Here are some of the projects I have worked on, demonstrating my skills in web development, AI & ML, automation, and UI/UX design.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Projects</Nav.Link>
                    </Nav.Item>
                      <Nav.Item>
                      <Nav.Link eventKey="second">Events</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => (
                            <ProjectCard
                              key={index}
                              {...project}
                              link={project.link} // Pass link to ProjectCard
                            />
                          ))
                        }
                      </Row>
                    </Tab.Pane>
                     <Tab.Pane eventKey="section">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
