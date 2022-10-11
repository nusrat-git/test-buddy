import React from 'react';
import './Subject.css';

const Subject = ({ subject }) => {
    const { logo, name, total } = subject;
    const clicked = () => console.log('clicked');
    return (

        <div className='container quiz-container'>
            <div className='bg-success p-5 m-3 rounded'>
                <img src={logo} alt={name} className='quiz-img' />
                <h1>{name}</h1>
                <p>Total Questions: {total}</p>
                <button className='btn btn-secondary' onClick={clicked}>Start Playing</button>
            </div>
        </div>

    );
};

export default Subject;