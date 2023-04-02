import React, { useState, useEffect } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';

import './NavBar.css';

const NavBar = () => {
  const [aciveLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.screenY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', onScroll);

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const onUpdateActiveLink = link => {
    setActiveLink(link);
  };

  return (
    <>
      <Navbar expand="lg" className={scrolled ? 'scrolled' : ''}>
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link
                href="#home"
                className={
                  aciveLink === 'home' ? 'active navbar-link' : 'navbar-link'
                }
                onClick={() => onUpdateActiveLink('home')}
              >
                Home
              </Nav.Link>
              <Nav.Link
                href="#skills"
                className={
                  aciveLink === 'skills' ? 'active navbar-link' : 'navbar-link'
                }
                onClick={() => onUpdateActiveLink('skills')}
              >
                Skills
              </Nav.Link>
              <Nav.Link
                href="#projects"
                className={
                  aciveLink === 'projects'
                    ? 'active navbar-link'
                    : 'navbar-link'
                }
                onClick={() => onUpdateActiveLink('projects')}
              >
                Projects
              </Nav.Link>
              <Nav.Link
                href="#connect"
                className={
                  aciveLink === 'connect' ? 'active navbar-link' : 'navbar-link'
                }
                onClick={() => onUpdateActiveLink('connect')}
              >
                Get in Touch
              </Nav.Link>
            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
                <a href="https://github.com/Esmurzelly">
                  <i className="bi bi-github"></i>
                </a>
                <a href="https://t.me/Esmurzelly">
                  <i className="bi bi-telegram"></i>
                </a>
                <a href="https://www.instagram.com/esmurzelly">
                  <i className="bi bi-instagram"></i>
                </a>
              </div>
              <a href="#connect">
                <button className="vvd">Let's connect</button>
              </a>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
