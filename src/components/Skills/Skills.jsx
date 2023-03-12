import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import meter1 from '../../assets/img/meter1.svg';
import meter2 from '../../assets/img/meter2.svg';
import meter3 from '../../assets/img/meter3.svg';
import colorSharp from '../../assets/img/color-sharp.png';


import logo_html from '../../assets/img/stack/html.svg'
import logo_css from '../../assets/img/stack/css.svg'
import logo_bootstrap from '../../assets/img/stack/bootstrap.svg'
import logo_git from '../../assets/img/stack/git.svg'
import logo_github from '../../assets/img/stack/github.svg'
import logo_js from '../../assets/img/stack/js.svg'
import logo_react from '../../assets/img/stack/react.svg'
import logo_redux from '../../assets/img/stack/redux.svg'
import logo_sass from '../../assets/img/stack/sass.svg'
import logo_tailwind from '../../assets/img/stack/tailwind.svg'
import logo_vscode from '../../assets/img/stack/vscode.svg'
import logo_figma from '../../assets/img/stack/figma.svg'

import './Skills.css'

const Skills = () => {
    const responsive = {
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
      
    return ( 
        <section className='skill' id='skills'>
            <Container>
                <Row>
                    <Col>
                        <div className="skill-bx">
                            <h2>
                                Skills
                            </h2>
                            <p>There is my stack that I use in my projects. Time after time the list increases  .</p>
                            <Carousel 
                                responsive={responsive}
                                infinite={true}
                                className='skills-slider'
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
                                <img src={logo_html} alt="" />
                                <img src={logo_css} alt="" />
                                <img src={logo_js} alt="" />
                                <img src={logo_react} alt="" />
                                <img src={logo_redux} alt="" />
                                <img src={logo_bootstrap} alt="" />
                                <img src={logo_tailwind} alt="" />
                                <img src={logo_sass} alt="" />
                                <img src={logo_git} alt="" />
                                <img src={logo_vscode} alt="" />
                                <img src={logo_github} alt="" />
                                <img width={110} src={logo_figma} alt="" />
                            </div>
                        </div>
                    </Col>
                    <div className="tech_skills">
                    </div>
                </Row>
            </Container>
            <img src={colorSharp} alt="" className="background-image-left" />
        </section>
     );
}
 
export default Skills;