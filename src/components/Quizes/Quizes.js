import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Questions from '../Questions/Questions';

const Quizes = () => {
    const quizData = useLoaderData();
    const {id, name, total, questions } = quizData.data;

    console.log(quizData.data);
    return (
        <div className=''>
            <div className='p-5 mx-4 mt-12 mb-12 bg-cyan-300 rounded-lg'>
                <h1 className='text-5xl font-bold my-9 p-7'>Test Of {name}</h1>
                <p className='text-xl mb-3'>Total {total} questions</p>
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