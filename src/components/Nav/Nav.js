import React from 'react';
import { Link } from 'react-router-dom';
import nav from '../../nav.png';

const Nav = () => {
    return (
        <div>
            <nav className=' bg-amber-100 p-4 md:p-3 flex-column md:flex items-center justify-around' >
                <div className='flex items-center justify-center gap-4 p-2'>
                    <img src={nav} alt="" className=' w-20' />
                    <h1 className='text-2xl italic font-bold text-purple-900'>TEST BUDDY</h1>
                </div>
                <div className='link-container'>
                    <Link to='/subject' className='md:text-xl text-purple-900 hover:text-blue-800 font-bold mr-3 md:mr-8'>Subject</Link>
                    <Link to='/analytics' className='md:text-xl text-purple-900 hover:text-blue-800 font-bold mr-3 md:mr-8'>Analytics</Link>
                    <Link to='/blogs' className='md:text-xl text-purple-900 hover:text-blue-800 font-bold mr-3 md:mr-8'>Blogs</Link>
                </div>
            </nav>
        </div>
    );
};

export default Nav;