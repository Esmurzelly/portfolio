import React from 'react';

import MailchimpForm from '../MailchimpForm';

import { Container, Row, Col } from 'react-bootstrap';

import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-item-center">
          <MailchimpForm />
          <Col sm={6}></Col>
          <Col className="text-center text-sm-end" sm={6}>
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
            <p>CopyRight 2023. All Right Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
