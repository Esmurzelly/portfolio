import React from 'react';

import ProjectCard from '../components/ProjectCard/ProjectCard';

import { useSelector } from 'react-redux';

import { Container, Row, Col, Tab } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

import 'animate.css';

import TrackVisibility from 'react-on-screen';

import colorSharp2 from '../assets/img/color-sharp2.png';

const ProjectList = () => {
  const projects = useSelector(state => state.projects.projects);

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
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Row>
                    {projects.map((project, index) => {
                      return <ProjectCard {...project} key={index} />;
                    })}
                  </Row>
                </Tab.Pane>

                <Button variant="primary" className="button_projects">
                  <Link to="/">Go Home</Link>
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

export default ProjectList;
