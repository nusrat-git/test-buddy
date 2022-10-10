import React from 'react';
import { Link } from 'react-router-dom';
import nav from '../../nav.png';
import './Nav.css'

const Nav = () => {
    return (
        <div>
            <nav className='nav-container d-flex align-items-center justify-content-around' >
                <img src={nav} alt="" className='nav-img'/>
                <div className='link-container'>
                    <Link to='/' className='text-decoration-none fs-5 me-5 text-dark fw-bold'>Subject</Link>
                    <Link to='/analytics' className='text-decoration-none fs-5 me-5 text-dark fw-bold'>Analytics</Link>
                    <Link to='/blogs' className='text-decoration-none fs-5 me-5 text-dark fw-bold'>Blogs</Link>
                </div>
            </nav>
        </div>
    );
};

export default Nav;