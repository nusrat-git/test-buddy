import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Questions from '../Questions/Questions';

const Quizes = () => {
    const quizData = useLoaderData();
    const { id, name, total, questions } = quizData.data;
    return (
        <div className=''>
            <div className='p-5 m-4'>
                <h1 className='text-3xl font-bold mb-3'>Test Of {name}</h1>
                <p className='text-xl mb-3'>Total Questions: {total}</p>
            </div>
            <div className=''>
                {
                    questions.map(questionData => <Questions key={id} questionData={questionData}></Questions>)
                }
            </div>
        </div>
    );
};

export default Quizes;