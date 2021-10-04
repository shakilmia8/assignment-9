import React from 'react';
import { Button } from 'react-bootstrap';

const NotFound = () => {
    return (
        <div className='mt-5'>
            <h1 className='fw-50'>404</h1>
            <h3>Page Not Found</h3>
            <Button>Go Home</Button>
        </div>
    );
};

export default NotFound;