import React from 'react';
import { Link } from 'react-router-dom';
import './Subject.css';


const Subject = ({ subject}) => {
    const {id, logo, name, total } = subject;


    return (

        <div>
            <div className='container quiz-container'>
                <div className='bg-success p-5 m-3 rounded'>
                    <img src={logo} alt={name} className='quiz-img' />
                    <h1>{name}</h1>
                    <p>Total Questions: {total}</p>
                    <Link to={`/quiz/${id}`} >
                        <button className='btn btn-secondary'>Start Playing</button>
                    </Link>
                </div>
            </div>  
            <div>

            </div>
        </div>


    );
};

export default Subject;