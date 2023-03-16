import React from 'react';
import { useParams, Link } from 'react-router-dom';
import NotFound from '../NotFound';
import { Container, Row, Col } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import './DetailProject.css';

import { useSelector } from 'react-redux';

const DetailcurrentProjectect = () => {
  const projects = useSelector(state => state.projects.projects);

  const params = useParams();
  const prodId = params.id;

  const currentProject = projects.find(p => p.id == prodId);

  if (currentProject === undefined) {
    return <NotFound />;
  }

  return (
    <Container className="detail_container">
      <Row className="p-4">
        <h1>{currentProject.title}</h1>
      </Row>
      <Row className="card_content">
        <Col className="card_content__img">
          <img src={currentProject.mainUrl} alt="" />
        </Col>
        <Col className="card_content__text">
          <p>Type: {currentProject.type}</p>
          <p>{currentProject.description}</p>
          <p>Stack: </p>
          {currentProject.stack.map((el, index) => (
            <ul key={index}>
              <li>{el}</li>
            </ul>
          ))}

          <Row className="list_of_buttons">
            <Col>
              <Button className="button_detail" variant="primary">
                <Link to="/">Go Home</Link>
              </Button>
            </Col>

            <Col>
              <Button className="button_detail" variant="primary">
                <Link to={currentProject.live}>Live</Link>
              </Button>
            </Col>

            <Col>
              <Button className="button_detail" variant="primary">
                <Link to={currentProject.code}>Code</Link>
              </Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default DetailcurrentProjectect;
