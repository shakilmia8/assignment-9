import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import './Footer.css';

const Footer = () => {
    const element = <FontAwesomeIcon icon={faHeart} />;
    return (
        <div className='footer'>
            <p>Copyright &copy;2021 All rights reserved | This template is made with <span>{element}</span> by <span>cpi</span> </p>
        </div>
    );
};

export default Footer;