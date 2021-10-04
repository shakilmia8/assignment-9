import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { useEffect } from 'react';
import { useState } from 'react';
import Teacher from '../Teacher/Teacher';

const Teachers = () => {
    const [teachers, setTeachers] = useState([]);
    useEffect(() => {
        fetch('./teachers.json')
            .then(res => res.json())
            .then(data => setTeachers(data));
    }, []);
    return (
        <div>
            <Container className='design-container'>
                <h2>Our Teachers</h2>
                <Row xs={1} sm={1} md={2} lg={3} className="g-4">
                    {Array.from({ length: 1 }).map((_, idx) => (
                        teachers.map(teacher => <Teacher key={teacher.key} teacher={teacher}></Teacher>)
                    ))}
                </Row>
            </Container>
        </div>
    );
};

export default Teachers;