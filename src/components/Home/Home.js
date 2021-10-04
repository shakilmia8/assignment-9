import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Button, Container, Row } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import Course from '../Course/Course';
import img from '../../images/1.png';
import './Home.css';

const Home = () => {
    const [courses, setCourses] = useState([]);
    const history = useHistory();
    useEffect(() => {
        fetch('./courses.json')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, []);
    const handleClicked = () => {
        history.push('/courses')
    }
    return (
        <div className='home-container'>

            {/* banner section */}

            <div className='banner-container'>
                <Container className='banner'>
                    <div className='banner-content'>
                        <h1>The New Way To <br /> Learn Properly in <br /> With Us!</h1>
                        <Button>Let Started</Button>
                    </div>
                    <img src={img} alt="" />
                </Container>
            </div>

            {/* courses section */}

            <div>
                <Container className='courses-container'>
                    <h2>Let's Brows All Courses</h2>
                    <Row xs={1} sm={1} md={2} lg={3} className="g-4">
                        {Array.from({ length: 1 }).map((_, idx) => (
                            courses.map(course => <Course key={course.id} course={course}></Course>)
                        ))}
                        <Button onClick={handleClicked}>More Courses</Button>
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default Home;