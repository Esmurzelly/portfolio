import React from 'react';

import { useSelector } from 'react-redux';

import { Container, Row, Col } from 'react-bootstrap';

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import './Skills.css';

import meter1 from '../../assets/img/meter1.svg';
import meter2 from '../../assets/img/meter2.svg';
import meter3 from '../../assets/img/meter3.svg';
import colorSharp from '../../assets/img/color-sharp.png';

const Skills = () => {
  const skills_logo = useSelector(state => state.skills.skills);
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skill-bx">
              <h2>Skills</h2>
              <p>
                There is my stack that I use in my projects. Time after time the
                list increases .
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="skills-slider"
              >
                <div className="item">
                  <img src={meter1} alt="Image" />
                  <h5>Web Development</h5>
                </div>

                <div className="item">
                  <img src={meter3} alt="Image" />
                  <h5>Figma Design</h5>
                </div>

                <div className="item">
                  <img src={meter2} alt="Image" />
                  <h5>Brand Idenity</h5>
                </div>

                <div className="item">
                  <img src={meter3} alt="Image" />
                  <h5>HTML Layout</h5>
                </div>
              </Carousel>

              <div className="stack">
                {skills_logo.map(skill => (
                  <img key={skill.id} src={skill.logo} alt={skill.name} />
                ))}
              </div>
            </div>
          </Col>
          <div className="tech_skills"></div>
        </Row>
      </Container>
      <img src={colorSharp} alt="" className="background-image-left" />
    </section>
  );
};

export default Skills;
