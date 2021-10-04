import React from 'react';
import { Col, Card } from 'react-bootstrap';

const Teacher = (props) => {
    const { name, role, img } = props.teacher;
    return (
        <div className='course-container'>
            <Col>
                <Card className='course-card'>
                    <Card.Img className='img' variant="top" src={img} />
                    <Card.Body>
                        <Card.Title>Name: {name}</Card.Title>
                        <Card.Text>Designation: {role}</Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default Teacher;