import React from 'react';
import { Container, Row, Col, Nav, Tab } from 'react-bootstrap';
import ProjectCard from '../ProjectCard/ProjectCard';
import colorSharp2 from '../../assets/img/color-sharp2.png';
import TrackVisibility from 'react-on-screen';
import 'animate.css';
import projImg1 from '../../assets/img/project-img1.png';
import projImg2 from '../../assets/img/project-img2.png';
import projImg3 from '../../assets/img/project-img3.png';

import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

import './Projects.css';

const Projects = ({projects}) => {
  return (
    <section className="projects" id="projects">
      <Container>
        <Row>
          <Col>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? 'animate__animated animate__slideInUp' : ''
                  }
                >
                  <h2>Projects</h2>
                  <p>
                    I try to improve my woork taking unsual projects. You can
                    see and check some of my web-applicaions below considering
                    demo and code
                  </p>
                </div>
              )}
            </TrackVisibility>

            <Tab.Container id="projects-tabs" defaultActiveKey="first">
              <Nav
                variant="pills"
                id="pills-tab"
                className="nav-pills mb-5 justify-content-center align-items-center"
              >
                <Nav.Item>
                  <Nav.Link eventKey="first">Web applications</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Layouts</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Utils</Nav.Link>
                </Nav.Item>
              </Nav>

              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Row>
                    {projects
                      .filter(project => project.type.includes('web_app'))
                      .map((project, index) => {
                        return <ProjectCard {...project} key={index} />;
                      })}
                  </Row>
                </Tab.Pane>

                <Tab.Pane eventKey="second">
                  <Row>
                    {projects
                      .filter(project => project.type.includes('web_site'))
                      .map((project, index) => {
                        return <ProjectCard {...project} key={index} />;
                      })}
                  </Row>
                </Tab.Pane>

                <Tab.Pane eventKey="third">
                  <Row>
                    {projects
                      .filter(project => project.type.includes('utility'))
                      .map((project, index) => {
                        return <ProjectCard {...project} key={index} />;
                      })}
                  </Row>
                </Tab.Pane>

                <Button variant='primary' className='button_projects'>
                  <Link to='/projects'>Whole List of projects</Link>
                </Button>

              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      <img src={colorSharp2} alt="" className="background-image-right" />
    </section>
  );
};

export default Projects;
