import React from 'react';
import { Link } from 'react-router-dom';
import header from '../../header.png';

const Header = () => {
    return (
        <div>
            <div className='flex-column p-6 my-12 bg-lime-100 shadow-xl md:w-96 rounded-xl mx-6'>

                <div>
                    <img src={header} alt="" />
                </div>
                <div>
                    <h1 className=' text-3xl font-bold text-lime-700 mb-2'>Test Your Ability</h1>
                    <h5 className='text-2xl font-bold text-pink-400 mb-3'>Play quizs </h5>
                    <h5 className='text-lg font-bold text-gray-500'>Improve your Knowledge with test buddy.</h5>
                    <Link to='/subject'>
                        <button className='text-normal font-bold bg-red-300 px-4 py-2 rounded-2xl my-4'>Let's Play</button>
                    </Link>
                </div>

            </div>
        </div>
    );
};

export default Header;