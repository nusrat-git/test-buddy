import React from 'react';
import './Header.css';
import header from '../../header.png';

const Header = () => {
    return (
        // <div className='header-container'>
        //     <div className='text-start position-absolute top-50 ps-5'>
        //         <h1 className='text-white pb-4'>Test Yourself</h1>
        //         <h3 className='text-white pb-4'>Improve Your Knowledge</h3>
        //         <button className='play-btn btn btn-success'>Let's Play</button>
        //     </div>
        // </div>
        <div className='header-container d-flex justify-content-center align-items-center m-5 '>

            <div>
                <img src={header} alt="" />
            </div>
            <div>
                <h1 className='pb-2'>Test Your Ability</h1>
                <h5 className='pb-2'>Play quizs </h5>
                <h5 className='pb-3'>Improve your Knowledge with test buddy.</h5>
                <button className='btn btn-success'>Let's Play</button>
            </div>
            
        </div>
    );
};

export default Header;