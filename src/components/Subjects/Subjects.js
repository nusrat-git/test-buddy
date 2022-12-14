import {useLoaderData } from 'react-router-dom';
import Subject from '../Subject/Subject';

const Subjects = () => {
    const subjects = useLoaderData();

    return (
        <div className='grid md:grid-cols-3 md:mt-8'>
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

