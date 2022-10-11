import React from 'react';

const Options = ({option, givenAnswer}) => {
    return (
        <div>
            <div className='flex justify-center items-center shadow-md p-3 m-3 md:m-5 rounded-xl'>
                <input type="radio" value={option} name="default-radio" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" onClick={givenAnswer}></input>
                <p className='p-7 text-xl'>{option}</p>

            </div>
        </div>
    );
};

export default Options;