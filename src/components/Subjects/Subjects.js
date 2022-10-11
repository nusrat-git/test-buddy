import {useLoaderData } from 'react-router-dom';
import Subject from '../Subject/Subject';

const Subjects = () => {
    const subjects = useLoaderData();

    return (
        <div className=' sm:flex-column md:flex justify-center'>
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

