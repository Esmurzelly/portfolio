import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import NotFound from '../NotFound';
import { Container, Row, Col } from 'react-bootstrap';
import {Button} from 'react-bootstrap';
import './DetailProject.css';

const DetailProject = ({projects}) => {
    const navigate = useNavigate();
    const params = useParams();
    const prodId = params.id;
    console.log('current id ', prodId)

    const proj = projects.find(p => p.id == prodId);


    if(proj === undefined) {
        return <NotFound/>
    }

    return ( 
        <Container className='detail_container'>
            <Row className='p-4'>
                <h1>{proj.title}</h1>
            </Row>
            <Row className='card_content'>
                <Col className='card_content__img'>
                    <img src={proj.mainUrl} alt="" />
                </Col>
                <Col className='card_content__text'>
                    <p>Type: {proj.type}</p>
                    <p>{proj.description}</p>
                    <p>Stack: </p>
                    {proj.stack.map((el) => (
                        <ul>
                            <li>{el}</li>
                        </ul>
                    ))}

                    <Row className='list_of_buttons'>
                        <Col>
                            <Button className='button_detail' variant="primary">
                                <Link to="/">Go Home</Link>
                            </Button>
                        </Col>

                        <Col>
                            <Button className='button_detail' variant="primary">
                                <Link to={proj.live}>Live</Link>
                            </Button>
                        </Col>

                        <Col>
                            <Button className='button_detail' variant="primary">
                                <Link to={proj.code}>Code</Link>
                            </Button>
                        </Col>
                    </Row>
                    
                </Col>
            </Row>
        </Container>
     );
}
 
export default DetailProject;