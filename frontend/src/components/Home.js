import React from 'react';
import { Link } from 'react-router-dom';

const home = () => (
    <div className='container'>
        <div className="jumbotron mt-5">
            <h1 className="display-4">Welcome to Blog!</h1>
            <p className="lead">We make awsome blogs about vaious topics.</p>
            <hr className="my-4" />
            <p>Click the button below to check out our blogs.</p>
            <Link className="btn btn-primary btn-lg" to='/blog' role="button">Check out our Blogs </Link>
        </div>
    </div>

);

export default home;