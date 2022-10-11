import React from 'react';
import { Link } from 'react-router-dom';
import nav from '../../nav.png';
import './Nav.css'

const Nav = () => {
    return (
        <div>
            <nav className='nav-container flex items-center justify-around' >
                <img src={nav} alt="" className='nav-img'/>
                <div className='link-container'>
                    <Link to='/' className='text-xl text-purple-900 hover:text-blue-800 font-semibold mr-8'>Subject</Link>
                    <Link to='/analytics' className='text-xl text-purple-900 hover:text-blue-800 font-semibold mr-8'>Analytics</Link>
                    <Link to='/blogs' className='text-xl text-purple-900 hover:text-blue-800 font-semibold mr-8'>Blogs</Link>
                </div>
            </nav>
        </div>
    );
};

export default Nav;