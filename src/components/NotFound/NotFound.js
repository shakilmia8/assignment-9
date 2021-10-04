import React from 'react';
import './NotFound.css';
import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

const NotFound = () => {
    const history = useHistory();
    const handleClickedHome = () => {
        history.push('/home');
    }
    return (
        <div className='notfound'>
            <i className="far fa-frown-open"></i>
            <h1>4<span>0</span>4</h1>
            <h2>Page Not Found</h2>
            <Button onClick={handleClickedHome}>Go Home</Button>
        </div>
    );
};

export default NotFound;