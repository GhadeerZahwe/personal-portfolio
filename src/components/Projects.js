import { Container, Row, Col, Tab, Nav, Carousel } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import certImg1 from "../assets/img/cert1.png";
import certImg2 from "../assets/img/cert2.jpeg";
import certImg3 from "../assets/img/cert3.jpeg";
import certImg4 from "../assets/img/cert4.jpeg";
import certImg5 from "../assets/img/cert5.jpeg";
import certImg6 from "../assets/img/cert6.jpeg";


import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const projects = [
    {
      title: "iDonate Mobile App",
      description:
        "A mobile app that facilitates donation of excess food, connecting donors with delivery drivers. Includes a desktop admin panel for better management.",
      imgUrl: projImg1,
      link: "https://github.com/GhadeerZahwe/iDonate",
    },
    {
      title: "CMS Website for News",
      description:
        "A CMS system allowing admins, publishers, and editors to manage digital content efficiently and publish articles.",
      imgUrl: projImg2,
      link: "https://github.com/GhadeerZahwe/DgPad-CMS",
    },
    {
      title: "Email AI Agent (n8n Automation)",
      description:
        "An AI-powered email assistant built with n8n to handle emails, perform live web searches, manage Google Calendar, and log interactions.",
      imgUrl: projImg3,
      link: "https://github.com/GhadeerZahwe/Email-AI-Agent",
    },
    {
      title: "Titanic Survivors Prediction",
      description:
        "Machine learning model predicting Titanic passenger survival using features like age, sex, and ticket class.",
      imgUrl: projImg1,
      link: "https://github.com/GhadeerZahwe/Predicting-Titanic-Survivors",
    },
    {
      title: "Heart Disease Classification",
      description:
        "ML project predicting heart disease using patient health data, including full workflow from preprocessing to model evaluation.",
      imgUrl: projImg2,
      link: "https://github.com/GhadeerZahwe/Heart_Disease_Classifier",
    },
    {
      title: "Collaborative Movie Recommendation",
      description:
        "A Collaborative Movie Recommendation System using Item-Based Filtering with KNN to suggest top 10 similar movies based on user ratings.",
      imgUrl: projImg3,
      link: "https://github.com/GhadeerZahwe/Collaborative-Recommendation-Movies",
    },
  ];

  // Events array
  const events = [
    {
      title: "Summer of Tech - BDD",
      images: [
        require("../assets/img/summerTech1.jpeg"),
        require("../assets/img/summerTech2.jpeg"),
        require("../assets/img/summerTech3.jpeg"),
        require("../assets/img/summerTech4.jpeg"),
        require("../assets/img/summerTech5.jpeg"),
      ],
      link: "https://www.linkedin.com/posts/ghadeer-zahwe_summeroftech-beirutdigitaldistrict-ai-activity-7230609283409707008-jlFs?utm_source=share&utm_medium=member_desktop&rcm=ACoAADORqvEB_8CtfbODm6nVeiLCkJdOhU_ckeo"
    },
    {
      title: "Women in Tech Roadshow - AUB",
      images: [
        require("../assets/img/womenTech1.jpeg"),
        require("../assets/img/womenTech2.jpeg"),
        require("../assets/img/womenTech3.jpeg"),
        require("../assets/img/womenTech4.jpeg"),
        require("../assets/img/womenTech5.jpeg"),
        require("../assets/img/womenTech6.jpeg"),
        require("../assets/img/womenTech7.jpeg"),
        require("../assets/img/womenTech8.jpeg"),
      ],
      link:"https://www.linkedin.com/posts/ghadeer-zahwe_womenintech-ai-techcommunity-ugcPost-7299528818053029888-8Bhg?utm_source=share&utm_medium=member_desktop&rcm=ACoAADORqvEB_8CtfbODm6nVeiLCkJdOhU_ckeo"
    },
    {
      title: "Youth Forward AI Panel - Middle East Airlines",
      images: [
       require("../assets/img/youthForward1.jpeg"),
       require("../assets/img/youthForward2.jpeg"),
       require("../assets/img/youthForward3.jpeg"),
       require("../assets/img/youthForward4.jpeg"),
       require("../assets/img/youthForward5.jpeg"),
       require("../assets/img/youthForward6.jpeg"),
      ],
      link:"https://www.linkedin.com/posts/ghadeer-zahwe_youthforward-artificialintelligence-automations-ugcPost-7372533867922165760-aGdB?utm_source=share&utm_medium=member_desktop&rcm=ACoAADORqvEB_8CtfbODm6nVeiLCkJdOhU_ckeo"
    },
    {
      title: "AI Career Fair - BDD",
      images: [
        require("../assets/img/aiCareerFair1.jpeg"),
  require("../assets/img/aiCareerFair2.jpeg"),
  require("../assets/img/aiCareerFair3.jpeg"),
  require("../assets/img/aiCareerFair4.jpeg"),
  require("../assets/img/aiCareerFair5.jpeg"),
  require("../assets/img/aiCareerFair6.jpeg"),
  require("../assets/img/aiCareerFair7.jpeg"),
  require("../assets/img/aiCareerFair8.jpeg"),
      ],
      link:"https://www.linkedin.com/posts/ghadeer-zahwe_lebanon-ai-machinelearning-ugcPost-7375178202295549952-u5NE?utm_source=share&utm_medium=member_desktop&rcm=ACoAADORqvEB_8CtfbODm6nVeiLCkJdOhU_ckeo"
    },
    {
    title: "Google Developer Groups #DevFest - LAU",
    images: [
      require("../assets/img/devfest1.jpeg"),
      require("../assets/img/devfest2.jpeg"),
            require("../assets/img/devfest4.jpeg")
    ],
    link: "https://www.linkedin.com/posts/ghadeer-zahwe_devfest-devfestlebanon-gdgcoatlebanon-activity-7116495735004508161-Zu0Y?utm_source=share&utm_medium=member_desktop&rcm=ACoAADORqvEB_8CtfbODm6nVeiLCkJdOhU_ckeo",
  },
  {
    title: "AWS Community Day - BDD",
    images: [
       require("../assets/img/awsday1.jpeg"),
  require("../assets/img/awsday2.jpeg"),
  require("../assets/img/awsday3.jpeg"),
  require("../assets/img/awsday4.jpeg"),
  require("../assets/img/awsday5.jpeg"),
  require("../assets/img/awsday6.jpeg"),
    ],
    link: "https://www.linkedin.com/posts/ghadeer-zahwe_awscommunityday2024-beirutdigitaldistrict-activity-7276582742086111232-mI2w?utm_source=share&utm_medium=member_desktop&rcm=ACoAADORqvEB_8CtfbODm6nVeiLCkJdOhU_ckeo",
  },
  ];


const certifications = [
  {
    title: "Machine Learning Specialization by Andrew Ng (Coursera)",
    img: certImg6,
    link: "https://www.coursera.org/account/accomplishments/verify/4MFTEN24ZBOL?utm_source=ln&utm_medium=certificate&utm_content=cert_image&utm_campaign=sharing_cta&utm_product=course"
  },
  {
    title: "Machine Learning - Supervised Learning: Theory and Practice (Fakker.AI)",
    img: certImg4,
  },
  {
    title: "Machine Learning - Unsupervised Learning: Theory and Practice (Fakker.AI)",
    img: certImg5,
  },
  {
    title: "Certificate of Completion of Internship at Alpha Technology Group Company",
    img: certImg3,
    link: "https://www.linkedin.com/posts/ghadeer-zahwe_newbeginnings-newjourney-thankyou-activity-7018637395814154242-BQs2?utm_source=share&utm_medium=member_desktop&rcm=ACoAADORqvEB_8CtfbODm6nVeiLCkJdOhU_ckeo"
  },
  {
    title: "Certificate of Completion ofFSW Bootcamp with SE Factory",
    img: certImg2,
    link: "https://www.linkedin.com/posts/ghadeer-zahwe_softwaredevelopment-certificationachievement-activity-7168011718084825090-6Gsh?utm_source=share&utm_medium=member_desktop&rcm=ACoAADORqvEB_8CtfbODm6nVeiLCkJdOhU_ckeo"
  },
  {
    title: "Certificate of Completion of AI Automation Course with Quantum Base",
    img: certImg1,
    link: "https://verify.myquantumbase.com/ai-specialist/ghadeer-zahwe"
  },
];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h3>Projects, Events, and Certifications</h3>
                  <p>
                    Here are some of my projects, the events I have attended, and the certifications I have earned, showcasing my experience in Web Development, AI, ML, and Automation.
                  </p>

                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Projects</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Events</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Certifications</Nav.Link>
                      </Nav.Item>
                    </Nav>

                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      {/* Projects Tab */}
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => (
                            <ProjectCard
                              key={index}
                              {...project}
                              link={project.link}
                            />
                          ))}
                        </Row>
                      </Tab.Pane>

                      {/* Events Tab */}
                    {/* Events Tab */}
                  <Tab.Pane eventKey="second">
  <Row>
    {events.map((event, i) => (
      <Col md={6} key={i} style={{ marginBottom: "30px" }}>
        <div className="event-card">
          <h4
            style={{
              fontWeight: "bold",
              marginBottom: "15px",
              textAlign: "center",
            }}
          >
            {event.title}
          </h4>
          <Carousel interval={3000} indicators={false}>
            {event.images.map((img, index) => (
              <Carousel.Item key={index}>
                <a
                  href={event.link ? event.link : "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ display: "flex", justifyContent: "center" }}
                >
                  <img
                    className="d-block"
                    src={img}
                    alt={`${event.title} - Slide ${index}`}
                    style={{
                      width: "90%",       // smaller width to avoid stretching
                      maxHeight: "350px", // max height for consistency
                      objectFit: "contain", // show full image
                      borderRadius: "15px",
                    }}
                  />
                </a>
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
      </Col>
    ))}
  </Row>
</Tab.Pane>

                       <Tab.Pane eventKey="third">
  <Carousel interval={4000} indicators={false}>
    {certifications.map((cert, index) => (
      <Carousel.Item key={index}>
        <a
          href={cert.link}
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: "none", display: "flex", flexDirection: "column", alignItems: "center" }}
        >
          <img
            className="d-block"
            src={cert.img}
            alt={cert.title}
            style={{
              width: "80%",        // make it smaller than full width
              maxHeight: "400px",  // set max height to prevent too big
              objectFit: "contain", // show full image without cropping
              borderRadius: "10px",
            }}
          />
          <h5
            style={{
              color: "#fff",
              textAlign: "center",
              marginTop: "10px",
              fontWeight: "500",
            }}
          >
            {cert.title}
          </h5>
        </a>
      </Carousel.Item>
    ))}
  </Carousel>
</Tab.Pane>

                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img
        className="background-image-right"
        src={colorSharp2}
        alt="background"
      />
    </section>
  );
};
