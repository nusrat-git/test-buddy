import React from 'react';
import { EyeIcon } from '@heroicons/react/24/solid'

const Questions = ({ questionData }) => {
    const { options, id, question, correctAnswer } = questionData;

    console.log(questionData);
    return (
        <div>
            <h1>{question}</h1>
            <EyeIcon className="h-6 w-6 text-blue-500"/>
            <p>
                {
                    options.map(option => <p>{option}</p>)
                }
            </p>
        </div>
    );
};

export default Questions;