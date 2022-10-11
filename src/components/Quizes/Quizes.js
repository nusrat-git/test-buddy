import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Questions from '../Questions/Questions';

const Quizes = () => {
    const quizData = useLoaderData();
    const {id , name , total, questions} = quizData.data;
    return (
        <div>
            <h1>Test Of {name}</h1>
            <p>Total Questions: {total}</p>
            {
                questions.map(questionData => <Questions key={id} questionData={questionData}></Questions>)
            }
        </div>
    );
};

export default Quizes;