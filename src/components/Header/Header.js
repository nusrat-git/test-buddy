import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div className='header-container'>
            <div className='text-start position-absolute top-50 ps-5'>
                <h1 className='text-white pb-4'>Test Yourself</h1>
                <h3 className='text-white pb-4'>Improve Your Knowledge</h3>
                <button className='play-btn btn btn-success'>Let's Play</button>
            </div>
        </div>
    );
};

export default Header;