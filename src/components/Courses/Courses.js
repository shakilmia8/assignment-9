import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { useEffect } from 'react';
import { useState } from 'react';
import MoreCourse from '../MoreCourse/MoreCourse';
import './Courses.css';

const Courses = () => {
    const [moreCourses, setMoreCourses] = useState([]);
    useEffect(() => {
        fetch('./moreCourses.json')
            .then(res => res.json())
            .then(data => setMoreCourses(data));
    }, [])
    const coursesBanner = 'https://lh3.googleusercontent.com/proxy/t1yVcVjwGx3-pGO4oqUQx8PBPyUzSPg8chNZ-tOGwAgYK63R0YawXdBikOlWhi3_zYIZi23H8up679GneqKY34VAXCTwSkSr7c_noXC-ybQEj_vrDFHComL94EpIwLMEN_w';
    return (
        <div>
            <img className='banner-img' src={coursesBanner} alt="" />

            <Container className='design-container'>
                <h2>Our Another Courses</h2>
                <Row xs={1} sm={1} md={2} lg={3} className="g-4">
                    {Array.from({ length: 1 }).map((_, idx) => (
                        moreCourses.map(moreCourse => <MoreCourse key={moreCourse.id} moreCourse={moreCourse}></MoreCourse>)
                    ))}
                </Row>
            </Container>
        </div>
    );
};

export default Courses;