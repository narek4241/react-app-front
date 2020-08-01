import React from 'react';
import './NotFound.css'
import { Link } from 'react-router-dom';

const NotFound = ({message}) => {
    return (
        <div className='profile-not-found'>
            <div className='profile-not-found-image'>
                <img src={'https://res.cloudinary.com/dgzlcuh8j/image/upload/v1596276445/not-found_u3celn.png'}></img>
            </div>
            <div className='profile-not-found-heading'>
                <h1>not found</h1>
            </div>
            <div className='profile-not-found-message'>
                <p>{message}</p>
            </div>
            <div className='profile-not-found-return'>
                <p>return to <Link to={'/'}>home</Link></p>
            </div>
        </div>
    )
}

export default NotFound;

