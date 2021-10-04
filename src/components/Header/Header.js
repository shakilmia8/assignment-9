import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div>
            <Navbar bg="primary">
                <Container>
                    <Nav>
                        <NavLink className='text' to="/home">Home</NavLink>
                        <NavLink className='text' to="/courses">Courses</NavLink>
                        <NavLink className='text' to="/about">About Us</NavLink>
                        <NavLink className='text' to="/contact">Contact Us</NavLink>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;