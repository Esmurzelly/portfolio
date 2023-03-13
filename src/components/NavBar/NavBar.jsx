import React, {useState, useEffect} from 'react';
import {Navbar, Container, Nav} from 'react-bootstrap'
import navIcon1 from '../../assets/img/nav-icon1.svg'
import navIcon2 from '../../assets/img/nav-icon2.svg'
import navIcon3 from '../../assets/img/nav-icon3.svg';

import './NavBar.css';

const NavBar = () => {
    const [aciveLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
      const onScroll = () => {
        if(window.screenY > 50) {
          setScrolled(true);
        } else {
          setScrolled(false);
        }
      }

      window.addEventListener('scroll', onScroll);

      return () => window.removeEventListener('scroll', onScroll)
    }, []);

    const onUpdateActiveLink = (link) => {
      setActiveLink(link)
    }

    return (
      <>
        <Navbar expand="lg" className={scrolled ? 'scrolled' : ""}>
          <Container>
            <Navbar.Toggle aria-controls="basic-navbar-nav">
                <span className='navbar-toggler-icon'></span>
            </Navbar.Toggle>
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link 
                  href="#home" 
                  className={aciveLink === 'home' ? 'active navbar-link' : 'navbar-link'}
                  onClick = {() => onUpdateActiveLink('home')}
                >
                  Home
                  </Nav.Link>
                <Nav.Link 
                  href="#skills" 
                  className={aciveLink === 'skills' ? 'active navbar-link' : 'navbar-link'}
                  onClick = {() => onUpdateActiveLink('skills')}
                >
                  Skills
                </Nav.Link>
                <Nav.Link 
                  href="#projects" 
                  className={aciveLink === 'projects' ? 'active navbar-link' : 'navbar-link'}
                  onClick = {() => onUpdateActiveLink('projects')}
                >
                  Projects
                </Nav.Link>
                <Nav.Link 
                  href="#connect" 
                  className={aciveLink === 'connect' ? 'active navbar-link' : 'navbar-link'}
                  onClick = {() => onUpdateActiveLink('connect')}
                >
                  Get in Touch
                </Nav.Link>
              </Nav>
              <span className='navbar-text'>
                <div className="social-icon">
                  <a href="https://github.com/Esmurzelly"><img src={navIcon1} alt="github_account" /></a>
                  <a href="https://t.me/Esmurzelly"><img src={navIcon2} alt="telegram_account" /></a>
                  <a href="https://www.instagram.com/esmurzelly"><img src={navIcon3} alt="instagram_account" /></a>
                </div>            
                  <a href="#connect">
                    <button className="vvd">
                      Let's connect
                    </button>
                  </a>
              </span>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </>  
    );
}

export default NavBar;