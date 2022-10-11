import React from 'react';
import { EyeIcon } from '@heroicons/react/24/solid'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Options from '../Options/Options';

const Questions = ({ questionData}) => {
    const { options, question, correctAnswer } = questionData;

    const answer = () => toast(`${correctAnswer}`);

    const givenAnswer = event => {
        event.target.value === correctAnswer ? toast('your answer is right') : toast('your answer is wrong');
    }

    return (
        <div className=' bg-teal-200 m-3 p-3 md:m-8 md:p-9 rounded-xl'>
            <div className='flex-column md:flex items-center justify-center gap-4  mt-9'>
                <h1 className='text-xl md:text-2xl font-bold md:font-semibold'> {question}</h1>
                <button className=' text-blue-500 hover:text-black' onClick={answer} ><EyeIcon className='h-6 w-6 mt-5 md:mt-0' /></button>
                <ToastContainer />
            </div>
            <div className='grid md:grid-cols-2 md:p-7'>
                {
                    options.map(option => <Options key={option} option={option} givenAnswer={givenAnswer}></Options>)
                }
            </div>
        </div>
    );
};

export default Questions;