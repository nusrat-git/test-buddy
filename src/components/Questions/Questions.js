import React from 'react';

const Questions = ({ questionData }) => {
    const { options, id, question, correctAnswer } = questionData;

    console.log(questionData);
    return (
        <div>
            <h1>{question}</h1>
            <p>
                {
                    options.map(option=> <p>{option}</p>)
                }
            </p>
        </div>
    );
};

export default Questions;