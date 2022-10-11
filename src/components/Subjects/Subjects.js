import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Subject from '../Subject/Subject';

const Subjects = () => {
    const subjects = useLoaderData();
    
    return (
        <div>
            {
                subjects.data.map(subject => <Subject
                    key={subject.id}
                    subject={subject}
                >

                </Subject>)
            }
        </div>
    );
};

export default Subjects;

