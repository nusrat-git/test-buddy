import React from 'react';
import { Link } from 'react-router-dom';
import nav from '../../nav.png';
import './Nav.css'

const Nav = () => {
    return (
        <div>
            <nav className=' bg-amber-100 p-3 md:p-0 flex items-center justify-around' >
                <img src={nav} alt="" className=' w-20'/>
                <div className='link-container'>
                    <Link to='/' className='md:text-xl text-purple-900 hover:text-blue-800 font-semibold mr-3 md:mr-8'>Subject</Link>
                    <Link to='/analytics' className='md:text-xl text-purple-900 hover:text-blue-800 font-semibold mr-3 md:mr-8'>Analytics</Link>
                    <Link to='/blogs' className='md:text-xl text-purple-900 hover:text-blue-800 font-semibold mr-3 md:mr-8'>Blogs</Link>
                </div>
            </nav>
        </div>
    );
};

export default Nav;