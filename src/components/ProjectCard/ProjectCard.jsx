import React from 'react';

import { NavLink } from 'react-router-dom';

import { Col } from 'react-bootstrap';

import './ProjectCard.css';

const ProjectCard = ({ id, title, description, mainUrl }) => {
  return (
    <Col sm={6} md={4}>
      <NavLink to={`/projects/${id}`}>
        <div className="proj-imgbx">
          <img src={mainUrl} alt="project img" />
          <div className="proj-txtx">
            <h4>{title}</h4>
            <span>{description}</span>
          </div>
        </div>
      </NavLink>
    </Col>
  );
};

export default ProjectCard;
