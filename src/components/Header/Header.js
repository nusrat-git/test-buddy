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
        <div className='md:flex flex-column p-6 items-center justify-center my-4 bg-lime-100'>

            <div>
                <img src={header} alt="" />
            </div>
            <div>
                <h1 className=' text-3xl font-bold text-lime-700 mb-2'>Test Your Ability</h1>
                <h5 className='text-2xl font-bold text-pink-400 mb-3'>Play quizs </h5>
                <h5 className='text-xl font-bold text-purple-400'>Improve your Knowledge with test buddy.</h5>
            </div>
            
        </div>
    );
};

export default Header;