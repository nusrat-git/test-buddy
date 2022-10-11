import React from 'react';
import header from '../../header.png';

const Header = () => {
    return (
        <div>
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
        </div>
    );
};

export default Header;