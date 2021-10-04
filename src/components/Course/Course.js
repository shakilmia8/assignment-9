import React from 'react';
import { Col, Card } from 'react-bootstrap';

import './Course.css';

const Course = (props) => {
    const { name, description, img } = props.course;

    return (
        <div className='course-container'>
            <Col>
                <Card className='course-card'>
                    <Card.Img className='img' variant="top" src={img} />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>
                            {description}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default Course;