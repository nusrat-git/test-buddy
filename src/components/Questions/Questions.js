import React from 'react';
import { EyeIcon } from '@heroicons/react/24/solid'

const Questions = ({ questionData }) => {
    const { options, id, question, correctAnswer } = questionData;

    console.log(questionData);
    return (
        <div className=' bg-teal-200 m-8 p-9 rounded-xl'>
            <div className='flex items-center justify-center gap-4  mt-9'>
                <h1 className='text-2xl font-semibold'>{question}</h1>
                <EyeIcon className="h-6 w-6 text-blue-500" />
            </div>
            <p className='grid md:grid-cols-2 p-7'>
                {
                    options.map(option => <div className='flex justify-center items-center'>
                        <input type="radio" value="" name="default-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"></input>
                        <p className='p-7 text-xl'>{option}</p>

                    </div>)
                }
            </p>
        </div>
    );
};

export default Questions;