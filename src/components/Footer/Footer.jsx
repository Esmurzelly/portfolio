import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import MailchimpForm from '../MailchimpForm';
import logo from '../../assets/img/logo.svg';
import navIcon1 from '../../assets/img/nav-icon1.svg'
import navIcon2 from '../../assets/img/nav-icon2.svg'
import navIcon3 from '../../assets/img/nav-icon3.svg'

import './Footer.css';

const Footer = () => {
    return ( 
        <footer className="footer">
            <Container>
                <Row className='align-item-center'>
                    <MailchimpForm />
                    <Col sm={6}></Col>
                    <Col className='text-center text-sm-end' sm={6}>
                        <div className="social-icon">
                            <a href="https://github.com/Esmurzelly"><img src={navIcon1} alt="" /></a>
                            <a href="https://t.me/Esmurzelly"><img src={navIcon2} alt="" /></a>
                            <a href="https://www.instagram.com/esmurzelly"><img src={navIcon3} alt="" /></a>
                        </div>
                        <p>CopyRight 2023. All Right Reserved</p>
                    </Col>
                </Row>
            </Container>
        </footer>
     );
}
 
export default Footer;