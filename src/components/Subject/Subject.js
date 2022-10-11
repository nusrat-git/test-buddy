import React from 'react';
import { Link } from 'react-router-dom';

const Subject = ({ subject }) => {
    const { id, logo, name, total } = subject;


    return (

        <div>
            <div>
                <div className=' bg-yellow-200 m-5 p-5 md:w-64 flex flex-col items-center rounded-lg shadow-xl'>
                    <div className='mb-3'>
                        <img src={logo} alt={name} className='md:w-32' />
                    </div>
                    <h1 className='text-2xl text-purple-400 font-bold mb-2'>{name}</h1>
                    <p className='mb-5 font-semibold'>Total Questions: {total}</p>
                    <Link to={`/quiz/${id}`} >
                        <button className=' bg-blue-300 rounded-md px-4 py-2 font-bold text-lime-800'>Start Playing</button>
                    </Link>
                </div>
            </div>
            <div>

            </div>
        </div>


    );
};

export default Subject;