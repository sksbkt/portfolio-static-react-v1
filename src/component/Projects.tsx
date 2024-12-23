import { Col, Container, Nav, Row, Tab } from "react-bootstrap";

import ProjectCard from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";
import { projects, strings } from "../Utils/helper";
export default function Projects() {
  return (
    <section
      className="project px-5"
      id="project"
    >
      <Container>
        <Row className="position-relative">
          <Col>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  {/* //? we are using this technique to move scroll to a more reasonable position */}
                  <div
                    className="position-absolute"
                    style={{ transform: "translateY(-5vh)" }}
                    id="projects"
                  ></div>

                  <h2>Projects</h2>
                  <p>{strings.projects_desc}</p>
                  <Tab.Container
                    id="left-tabs-example"
                    defaultActiveKey="first"
                  >
                    <Nav
                      variant="pills"
                      className="flex-row nav-pills mb-5 justify-content-center align-item-center"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Tab 1</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Tab 2</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Tab 3</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content>
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                title={project.title}
                                description={project.description}
                                imgUrl={project.imgUrl}
                                link={project.link}
                              />
                            );
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <p>second tab</p>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third"></Tab.Pane>
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
        alt=""
      />
    </section>
  );
}
